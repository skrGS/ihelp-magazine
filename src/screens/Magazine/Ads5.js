import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads5 = ({ data }) => {
  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "white" }}
      horizontal
    >
      <Image
        source={{ uri: api + "/upload/" + data.ads5 }}
        style={{
          height: windowHeight / 1.1,
          width: windowWidth * 1.5,
          alignSelf: "center",
        }}
        resizeMode="center"
      />
    </ScrollView>
  );
};

export default Ads5;

const styles = StyleSheet.create({});
