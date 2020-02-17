import { generateStyle } from "./generateStyle";
import { generateShoePart } from "./generateShoePart";
import { uuid } from "./createUuid";
import { IShoe, ShoeBase, ShoePart } from "../types";

export function generateShoes(
  amount: Number
): { items: IShoe[]; rareItems: IShoe[] } {
  let items: IShoe[] = [];
  let rareItems = [];

  // Loop through based on itemCount.
  for (let count = 0; count < amount; count++) {
    const itemType = "shoe";
    const weightedShoe = generateStyle(itemType); // Generate random weighted base style.
    const newShoe: IShoe = {
      // Create the shoe entry.
      id: uuid(),
      base: {
        type: ShoeBase.Shoe,
        item: weightedShoe.item, // returns base shoe type.
        class: weightedShoe.rarity // returns a rare indicator.
      },
      parts: {
        laces: generateShoePart(ShoePart.Laces),
        sole: generateShoePart(ShoePart.Sole)
      }
    };

    // If this shoe is rare, save it to the rare array for easy reference.
    if (newShoe.base.class === "rare") {
      rareItems.push(newShoe);
    }

    // Push new show to array.
    items.push(newShoe);
  }

  // return all the shoes, and the rare list.
  return {
    items,
    rareItems
  };
}
