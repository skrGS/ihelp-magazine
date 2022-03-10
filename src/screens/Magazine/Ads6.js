import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads6 = () => {
  return (
    <ScrollView style={{ width: windowWidth }} horizontal>
      <Image
        source={require("../../../assets/mag1/GS25.png")}
        style={{
          height: windowHeight / 1,
          width: windowWidth * 1.7,
        }}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default Ads6;

const styles = StyleSheet.create({});
