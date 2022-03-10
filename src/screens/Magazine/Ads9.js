import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads9 = () => {
  return (
    <ScrollView style={{ width: windowWidth }} horizontal>
      <Image
        source={require("../../../assets/mag1/zuv.jpg")}
        style={{
          height: windowHeight / 1,
          width: windowWidth * 1.55,
        }}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default Ads9;

const styles = StyleSheet.create({});
