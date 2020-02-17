import { generateStyle } from "./generateStyle";
import { uuid } from "./createUuid";
import { IWatch } from "../types";

export function generateWatches(amount: Number): any {
  let items: IWatch[] = [];
  let rareItems = [];

  for (let count = 0; count < amount; count++) {
    const weightedWatch = generateStyle("watch");
    const newWatch: IWatch = {
      id: uuid(),
      base: {
        item: weightedWatch.item,
        class: weightedWatch.rarity
      }
    };

    if (newWatch.base.class === "rare") {
      rareItems.push(newWatch);
    }

    items.push(newWatch);
  }

  return {
    items,
    rareItems
  };
}
