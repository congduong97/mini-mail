import { Dimensions, Platform } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

//iPhone-11
export const DESIGN_WIDTH = 414;
export const DESIGN_HEIGHT = 896;

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
