import { IStyle, IGenericStyle, IPartsStyle } from "./types";

// Weights for all our styles, per item category.
export const STYLE: IStyle = {
  shoe: {
    categories: {
      // this is used to choose whether to generate a rare or common shoe.
      // if common is selected, the weighted generated runs again with a new subset of options.
      // Common 99% of the time, Rare 1%.
      common: 0.99,
      rare: 0.01
    },
    // Common subset
    // Each of these will return different SVG components.
    common: {
      basketball: 0.2,
      dad: 0.2,
      runner: 0.2,
      boot: 0.1,
      indie: 0.1,
      punk: 0.1,
      skate: 0.1
    },

    // Rare subset
    // Each of these will return different SVG components.
    rare: {
      louBouton: 0.1,
      stormTropper: 0.4,
      moonBoot: 0.3,
      cowBoy: 0.2,
      glassSlipper: 0.1
    }
  },
  // Each time we add a new category, we define the rarity and the base models.
  watch: {
    categories: {
      common: 0.8,
      rare: 0.2
    },
    common: {
      timex: 0.4,
      casioGShock: 0.35,
      snapBand: 0.25
    },
    rare: {
      carterCrash: 0.5,
      RolexZerographe4336: 0.5
    }
  }
};

// Generic colors used accross the board.
// Accents, sparkle etc.
export const GENERIC: IGenericStyle = {
  accent: {
    pastelGreen: 0.25,
    lavendarPink: 0.25,
    geraniumLake: 0.25,
    grainYellow: 0.25
  },
  sparkle: {
    champagne: 0.5,
    oceanHaze: 0.2,
    ruby: 0.1,
    emerald: 0.1,
    hyper: 0.1
  }
};

// Here we define rarity/weight for each part of the item.
// IE laces, shoes etc.
// We can include or ommit cetrain colors/flair depending on the part.
export const PARTS: IPartsStyle = {
  laces: {
    color: {
      black: 0.4,
      white: 0.2,
      primaryColor: 0.4
    },
    flair: {
      flat: 0.8,
      speckle: 0.1,
      hyper: 0.05,
      glass: 0.05
    },
    size: {
      thin: 0.9,
      thick: 0.1
    }
  },
  sole: {
    color: {
      black: 0.2,
      white: 0.4,
      gum: 0.2,
      primaryColor: 0.2
    },
    flair: {
      flat: 0.65,
      polkaDot: 0.05,
      speckle: 0.05,
      hyper: 0.05,
      glass: 0.05,
      sparkle: 0.05,
      jelly: 0.05,
      galaxy: 0.05
    },
    size: {
      standard: 0.95,
      platform: 0.05
    }
  }
};
