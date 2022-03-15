import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import { api } from "../../../Constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads11 = ({ data }) => {
  return (
    <ScrollView style={{ width: windowWidth }} horizontal>
      <Image
        source={{ uri: api + "/upload/" + data.ads11 }}
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

export default Ads11;

const styles = StyleSheet.create({});
