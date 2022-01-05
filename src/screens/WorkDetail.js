import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  View,
} from "react-native";
import { api } from "../../Constants";
import useWork from "../hooks/useWork";
import CustomHeader from "../components/CustomHeader";
const fullWidth = Dimensions.get("window").width;

const WorkDetail = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#041C32" }}>
      <CustomHeader />
      <View style={{ borderWidth: 1, borderColor: "white" }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Image
          source={require("../../assets/2smal.png")}
          style={{ width: 100, height: 50 }}
        />
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 32 }}>
          Зөөгч
        </Text>
      </View>
    </View>
  );
};

export default WorkDetail;

const styles = StyleSheet.create({});
