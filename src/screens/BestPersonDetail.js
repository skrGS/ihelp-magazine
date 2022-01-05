import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { api } from "../../Constants";
import useSpecial from "../hooks/useSpecial";
import CustomHeader from "../components/CustomHeader";
const fullWidth = Dimensions.get("window").width;
const BestPersonDetail = (props) => {
  const { id } = props.route.params;
  const [special, error] = useSpecial(id);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!special) {
    return null;
  }
  return (
    <ScrollView>
      <CustomHeader />
      <Image
        style={{
          height: 300,
          width: fullWidth,
        }}
        source={{ uri: api + "/upload/" + special.photo }}
      />
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
      <Text> {special.title} </Text>
    </ScrollView>
  );
};

export default BestPersonDetail;

const styles = StyleSheet.create({});
