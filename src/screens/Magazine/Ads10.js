import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads10 = () => {
  return (
    <ScrollView style={{ width: windowWidth }} horizontal>
      <Image
        source={require("../../../assets/mag1/dandy.jpg")}
        style={{
          height: windowHeight / 1,
          width: windowWidth * 1.55,
        }}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default Ads10;

const styles = StyleSheet.create({});
