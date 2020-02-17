export interface IShoe {
  id: ID;
  base: {
    type: string;
    item: string;
    class: string;
  };
  parts: {
    sole: Object;
    laces: Object;
  };
  // Two optional propties that would allow us to have unlockable shoes.
  locked?: boolean;
  unlockSignature?: ID[];
}

// Shoe specific types

type ID = string;

export enum ShoeBase {
  Shoe = "shoe"
}

export enum ShoePart {
  Laces = "laces",
  Sole = "sole"
}

export enum ShoeClass {
  Rare = "rare"
}

// Style types

export interface IStyle {
  shoe: {
    categories: ICategoriesType;
    common: ISneakerCommonType;
    rare: ISneakerRareType;
  };
  watch: {
    categories: ICategoriesType;
    common: IWatchCommonType;
    rare: IWatchRareType;
  };
}

// Common types

export interface ICategoriesType {
  common: number;
  rare: number;
}

// Sneaker specific types

export interface ISneakerCommonType {
  basketball: number;
  dad: number;
  runner: number;
  boot: number;
  indie: number;
  punk: number;
  skate: number;
}

export interface ISneakerRareType {
  louBouton: number;
  stormTropper: number;
  moonBoot: number;
  cowBoy: number;
  glassSlipper: number;
}

// Watch specific Types

export interface IWatchCommonType {
  timex: number;
  casioGShock: number;
  snapBand: number;
}

export interface IWatchRareType {
  carterCrash: number;
  RolexZerographe4336: number;
}

// Generic Styles

export interface IGenericStyle {
  accent: {
    pastelGreen: number;
    lavendarPink: number;
    geraniumLake: number;
    grainYellow: number;
  };
  sparkle: {
    champagne: number;
    oceanHaze: number;
    ruby: number;
    emerald: number;
    hyper: number;
  };
}

// Part styles

export interface IPartsStyle {
  laces: {
    color: {
      black: number;
      white: number;
      primaryColor: number;
    };
    flair: {
      flat: number;
      speckle: number;
      hyper: number;
      glass: number;
    };
    size: {
      thin: number;
      thick: number;
    };
  };
  sole: {
    color: {
      black: number;
      white: number;
      gum: number;
      primaryColor: number;
    };
    flair: {
      flat: number;
      polkaDot: number;
      speckle: number;
      hyper: number;
      glass: number;
      sparkle: number;
      jelly: number;
      galaxy: number;
    };
    size: {
      standard: number;
      platform: number;
    };
  };
}

// Color Pallete Type

export interface IColorPaletteType {
  offWhite: string;
  darkSalmon: string;
  teaGreen: string;
  black: string;
  white: string;
  gum: string;
  pastelGreen: string;
  lavendarPink: string;
  geraniumLake: string;
  grainYellow: string;
}

// Watch types

export interface IWatch {
  id: string;
  base: {
    item: string;
    class: string;
  };
}
