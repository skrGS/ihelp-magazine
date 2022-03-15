import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";

import React from "react";

import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads4 = ({ data }) => {
  return (
    <ScrollView style={{ width: windowWidth }}>
      <Image
        source={{ uri: api + "/upload/" + data.ads4 }}
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
