export enum BUTTON_VARIANT {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ROUNDED = "rounded",
}

export const BUTTON_VARIANT_CLASSNAME = {
  [BUTTON_VARIANT.PRIMARY]: "bg-orange500 text-white hover:bg-orange800",
  [BUTTON_VARIANT.SECONDARY]: "bg-orange900 text-white",
  [BUTTON_VARIANT.ROUNDED]: "rounded-full bg-black text-white",
};
