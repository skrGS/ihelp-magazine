import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { api } from "../../Constants";
import { useNavigation } from "@react-navigation/native";

const AnotherHiglight = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {data.map((e) => {
        return (
          <View key={e._id} style={styles.viewer}>
            {/* <TouchableOpacity
              onPress={() =>
                navigation.navigate("AnotherHighlightDetail", { id: e.id })
              }
            > */}
            <Image
              source={{ uri: api + "/upload/" + e.photo }}
              style={styles.image}
            />
            <Text style={styles.name}>{e.name}</Text>
            <Text style={styles.title}>{e.title}</Text>
            {/* </TouchableOpacity> */}
          </View>
        );
      })}
    </View>
  );
};

export default AnotherHiglight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#041C32",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 15,
  },
  image: {
    width: 150,
    height: 230,
    borderRadius: 10,
  },
  viewer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    paddingTop: 10,
  },
  title: {
    fontSize: 10,
    color: "grey",
    fontWeight: "400",
  },
});
