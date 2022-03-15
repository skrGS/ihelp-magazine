import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads9 = ({ data }) => {
  return (
    <ScrollView style={{ width: windowWidth }} horizontal>
      <Image
        source={{ uri: api + "/upload/" + data.ads9 }}
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
