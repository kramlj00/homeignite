export enum BUTTON_SIZE {
  BIG = "big",
  SMALL = "small",
}

export const BUTTON_SIZE_CLASSNAME = {
  [BUTTON_SIZE.BIG]: "px-8 h-12 sm:px-12 sm:h-[60px]",
  [BUTTON_SIZE.SMALL]: "px-6 h-10 sm:px-6 sm:h-10 hover:translate-y-0",
};
