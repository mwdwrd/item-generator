import weighted from "weighted";
import { STYLE } from "../weights";

export function generateStyle(Type) {
  const rarity = weighted.select(STYLE[Type].categories);
  const item = weighted.select(STYLE[Type][rarity]);

  return {
    rarity,
    item
  };
}
