import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const Works = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ ...styles.container, marginVertical: 1 }}>
      <Text style={styles.headerText}> Нээлттэй ажлын байр </Text>

      {/* <TouchableOpacity
        onPress={() => navigation.navigate("WorkDetail")}
        style={styles.container}
      > */}
      <Image
        style={styles.image}
        source={require("../../assets/bgmagazine.png")}
      />

      {/* </TouchableOpacity> */}
    </ScrollView>
  );
};

export default Works;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#041C32",
    paddingBottom: 30,
  },
  mainText: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    alignSelf: "center",
    borderRadius: 20,
  },
  headerText: {
    backgroundColor: "#041C32",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingLeft: 11,
  },
});
