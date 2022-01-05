import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useHighlights from "../hooks/useHighlights";
import Highlights from "./Highlights.js";
const HighCategory = ({ data }) => {
  const [highlights, errorMessage] = useHighlights(data._id);

  return (
    <View
      style={{
        backgroundColor: "#041C32",
        marginBottom: 1,
        paddingVertical: 20,
      }}
    >
      <Text
        style={{
          marginLeft: 21,
          fontWeight: "bold",
          fontSize: 22,
          color: "white",
          bottom: 7,
          paddingVertical: 10,
        }}
      >
        {data.name}
      </Text>
      <Highlights data={highlights} />
    </View>
  );
};

export default HighCategory;

const styles = StyleSheet.create({});
