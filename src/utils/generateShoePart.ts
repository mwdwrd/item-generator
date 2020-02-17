import weighted from "weighted";
import { generateFlair } from "./generateFlair";
import { PARTS } from "../weights";
import { ShoePart } from "../types";

export function generateShoePart(partType: IShoePart): {} {
  let attributes: Object = {};

  switch (partType) {
    // Shoe Laces
    case ShoePart.Laces: {
      const flair = weighted.select(PARTS[partType].flair);
      const size = weighted.select(PARTS[partType].size);
      const flairAttributes = generateFlair(flair, partType);

      attributes = {
        flair: flairAttributes.flair,
        size: size
      };
      break;
    }
    // Shoe Sole
    case ShoePart.Sole: {
      const flair = weighted.select(PARTS[partType].flair);
      const size = weighted.select(PARTS[partType].size);
      const flairAttributes = generateFlair(flair, partType);

      attributes = {
        flair: flairAttributes.flair,
        size: size
      };
      break;
    }
    default: {
      attributes = "";
      break;
    }
  }

  return Object(attributes);
}
