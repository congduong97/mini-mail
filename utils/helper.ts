import { SIZE } from "./size";

export const hitSlop = (number: number) => ({
  top: SIZE.widthPixel(number),
  left: SIZE.widthPixel(number),
  right: SIZE.widthPixel(number),
  bottom: SIZE.widthPixel(number),
});
