import { SIZE } from "./size";

export const hitSlop = (number: number) => ({
  top: SIZE.widthPixel(number),
  left: SIZE.widthPixel(number),
  right: SIZE.widthPixel(number),
  bottom: SIZE.widthPixel(number),
});

export const FONTS = {
  R900: "Roboto_900Black",
  R700: "Roboto_700Bold",
  R500: "Roboto_500Medium",
  R400: "Roboto_400Regular",
  R300: "Roboto_300Light",
  R100: "Roboto_100Thin",
};
