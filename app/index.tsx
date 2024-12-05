import Container from "@/components/Container";
import Text from "@/components/Text";
import { COLORS, SCREEN_HEIGHT, SIZE, STYLES } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const onConnect = () => {
    setLoading(!loading);
  };
  return (
    <Container style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://ui.shadcn.com/avatars/02.png" }}
          style={styles.avatar}
        />
      </View>
      <TouchableOpacity style={styles.signInBtn} onPress={onConnect}>
        {loading ? (
          <ActivityIndicator color={COLORS.dark.text} size={"small"} />
        ) : (
          <Ionicons
            name="mail-unread-outline"
            size={SIZE.widthPixel(30)}
            color={"#F2F2F2"}
          />
        )}
        <Text style={styles.signInText}>Connect with gmail</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZE.widthPixel(62),
    alignItems: "center",
    backgroundColor: "#1B1917",
    justifyContent: "center",
  },

  signInBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626",
    paddingHorizontal: SIZE.padding * 2,
    paddingVertical: SIZE.padding,
    borderRadius: SIZE.borderRadius,
    width: "90%",
    ...STYLES.boxShadow,
  },
  signInText: {
    color: "#F2F2F2",
    marginLeft: SIZE.widthPixel(16),
    fontSize: SIZE.fontPixel(20),
  },
  avatar: {
    width: SIZE.widthPixel(100),
    height: SIZE.widthPixel(100),
  },
  avatarContainer: {
    borderRadius: SIZE.widthPixel(100),
    overflow: "hidden",
    position: "absolute",
    top: SCREEN_HEIGHT / 5,
    ...STYLES.boxShadow,
    backgroundColor: "#262626",
    borderWidth: 4,
  },
});
