import { COLORS, FONTS, SIZE } from "@/utils";
import { Text as RNText, TextProps } from "react-native";

interface AppTextProps extends TextProps {}

const Text = ({ children, style, ...rest }: AppTextProps) => {
  return (
    <RNText
      style={[
        {
          fontFamily: FONTS.R400,
          fontSize: SIZE.fontPixel(16),
          color: "black",
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
