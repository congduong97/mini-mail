import { SafeAreaView, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { SIZE } from "../utils";
import { StatusBar } from "expo-status-bar";

interface ContainerProps extends ViewProps {
  style?: ViewStyle;
}

const Container = ({ children, style, ...rest }: ContainerProps) => {
  return (
    <SafeAreaView style={[styles.container, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZE.padding,
  },
});
