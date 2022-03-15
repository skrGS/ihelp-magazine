import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Loading = ({ showText = true }) => {
  return (
    <View
      style={{
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: "#041C32",
        width: windowWidth,
        height: windowHeight,
        paddingTop: 100,
      }}
    >
      <ActivityIndicator
        size="large"
        color="#99AAAB"
        style={{ alignSelf: "center", justifyContent: "center" }}
      />
      {showText && (
        <Text style={{ top: 10, fontWeight: "bold", fontSize: 18 }}>
          Түр хүлээнэ үү...
        </Text>
      )}
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
