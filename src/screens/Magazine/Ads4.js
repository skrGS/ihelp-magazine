import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads4 = () => {
  return (
    <ScrollView style={{ width: windowWidth }}>
      <Image
        source={require("../../../assets/mag1/reclam2.png")}
        style={{
          height: windowHeight,
          width: windowWidth,
        }}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default Ads4;

const styles = StyleSheet.create({});
