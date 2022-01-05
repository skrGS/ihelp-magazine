import React from "react";
import { StyleSheet, Text, Image, ScrollView, Dimensions } from "react-native";
import { api } from "../../Constants";
const windowWidth = Dimensions.get("window").width;

const Banner = ({ data }) => {
  return (
    <ScrollView horizontal pagingEnabled>
      {data.map((e, index) => {
        return (
          <Image
            source={{ uri: api + "/upload/" + e.photo }}
            // source={require("../../assets/latebanner/ban1.png")}
            style={{ width: windowWidth, height: 250 }}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({});
