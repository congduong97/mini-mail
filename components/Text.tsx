import { Text as RNText, TextProps } from "react-native";

interface AppTextProps extends TextProps {}

const Text = ({ children, ...rest }: AppTextProps) => {
  return <RNText {...rest}>{children}</RNText>;
};

export default Text;
