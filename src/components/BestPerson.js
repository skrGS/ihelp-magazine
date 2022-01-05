import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { api } from "../../Constants";
import { useNavigation } from "@react-navigation/native";

const BestPerson = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#041C32",
        marginTop: 1,
        paddingVertical: 15,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          color: "white",
          marginLeft: 15,
        }}
      >
        Онцлох зочин
      </Text>

      <Text
        style={{
          fontWeight: "400",
          fontSize: 14,
          color: "white",
          marginLeft: 15,
        }}
      >
        Онцлох зочны ярилцлага унших
      </Text>
      <ScrollView horizontal style={{ paddingVertical: 20 }}>
        {data.map((e) => {
          return (
            <View style={{ paddingHorizontal: 10 }} key={e._id}>
              {/* <TouchableOpacity
                onPress={() =>
                  navigation.navigate("BestPersonDetail", { id: e.id })
                }
              > */}
              <Image
                source={{ uri: api + "/upload/" + e.photo }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "white",
                  paddingTop: 10,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {e.name}
              </Text>
              {/* </TouchableOpacity> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BestPerson;

const styles = StyleSheet.create({});
