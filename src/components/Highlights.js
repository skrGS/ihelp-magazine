import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { api } from "../../Constants";
const windowWidth = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
const headBanner = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#041C32" }}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            // onPress={() => navigation.navigate("HighlightDetail", { item })}
            key={index}
          >
            <Image
              style={{
                width: windowWidth - 40,
                height: 200,
                alignSelf: "center",
                borderRadius: 20,
                marginVertical: 10,
              }}
              source={{ uri: api + "/upload/" + item.photo }}
            />
            <View style={{ marginLeft: 20, paddingVertical: 10 }}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontWeight: "400",
                  fontSize: 14,
                  paddingTop: 5,
                }}
              >
                {" "}
                {item.createdAt.slice(0, 10)}{" "}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default headBanner;

const styles = StyleSheet.create({});
