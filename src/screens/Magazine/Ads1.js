import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads1 = () => {
  return (
    <ScrollView style={{ width: windowWidth }} horizontal>
      <Image
        source={require("../../../assets/mag1/Ads1.png")}
        style={{
          height: windowHeight / 1,
          width: 1400,

          alignSelf: "center",
        }}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default Ads1;

const styles = StyleSheet.create({});
