import weighted from "weighted";
import { PARTS, GENERIC } from "../weights";
import { IShoePartTypes } from "../types";

export function generateFlair(flairType: string, partType: IShoePartTypes) {
  let flair = {};

  switch (flairType) {
    // Style Attributes for Speckle
    case "speckle": {
      flair["type"] = "speckle";
      flair["baseColor"] = weighted.select(PARTS[partType].color);
      flair["speckleColor"] = weighted.select(GENERIC.accent);
      break;
    }
    // Style Attributes for PolkaDot
    case "polkaDot": {
      flair["type"] = "polkaDot";
      flair["baseColor"] = weighted.select(PARTS[partType].color);
      flair["polkaDotColor"] = weighted.select(GENERIC.accent);
      break;
    }
    // Style Attributes for Hyper
    case "hyper": {
      flair["type"] = "hyper";
      break;
    }
    // Style Attributes for Sparkle
    case "sparkle": {
      flair["type"] = "sparkle";
      flair["baseColor"] = weighted.select(PARTS[partType].color);
      flair["sparkleColor"] = weighted.select(GENERIC.sparkle);
      break;
    }
    // Style Attributes for Jelly
    case "jelly": {
      flair["type"] = "jelly";
      break;
    }
    // Style Attributes for Galaxy
    case "galaxy": {
      flair["type"] = "galaxy";
      break;
    }
    // Style Attributes for Flat
    default: {
      flair["type"] = "flat";
      flair["color"] = weighted.select(PARTS[partType].color);
      break;
    }
  }

  return { flair };
}
