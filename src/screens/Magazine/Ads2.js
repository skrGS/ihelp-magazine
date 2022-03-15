import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";

import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads2 = ({ data }) => {
  return (
    <ScrollView style={{ width: windowWidth }} horizontal>
      <Image
        source={{ uri: api + "/upload/" + data.ads2 }}
        style={{
          height: windowHeight / 1,
          width: windowWidth * 1.7,
        }}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default Ads2;

const styles = StyleSheet.create({});
