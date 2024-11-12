import { PixelRatio } from "react-native";
import {
  DESIGN_HEIGHT,
  DESIGN_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "./constant";

const widthBaseScale = SCREEN_WIDTH / DESIGN_WIDTH;
const heightBaseScale = SCREEN_HEIGHT / DESIGN_HEIGHT;

function normalize(size: number, based = "width") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, "width");
};
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, "height");
};
//for font  pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};

export const SIZE = {
  widthPixel,
  heightPixel,
  fontPixel,
  padding: widthPixel(16),
  margin: widthPixel(16),
  borderRadius: widthPixel(8),
};
