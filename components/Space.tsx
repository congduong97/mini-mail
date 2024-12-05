import { SIZE } from "@/utils";
import { StyleSheet, View, ViewProps } from "react-native";

interface SpaceProps extends ViewProps {
  width?: number;
  height?: number;
  opacity?: number;
}

const Space = ({ width, height, opacity, ...rest }: SpaceProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: SIZE.widthPixel(width || 0),
          height: SIZE.heightPixel(height || 0),
          opacity,
        },
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: 1,
    backgroundColor: "transparent",
    opacity: 1,
  },
});

export default Space;
