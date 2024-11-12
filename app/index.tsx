import { StyleSheet } from "react-native";
import React from "react";
import Text from "@/components/Text";
import Container from "@/components/Container";
import { COLORS, FONTS, SIZE } from "@/utils";

const Auth = () => {
  return <Container style={styles.container}></Container>;
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZE.widthPixel(62),
    alignItems: "center",
    backgroundColor: COLORS.dark.background,
  },
  title: {
    fontSize: SIZE.fontPixel(32),
    fontFamily: FONTS.R500,
    color: "#A4BBC4",
  },
});
