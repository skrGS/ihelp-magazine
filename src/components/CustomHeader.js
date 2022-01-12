import React from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        width: windowWidth,
        justifyContent: "space-between",
        backgroundColor: "#1c2841",
        paddingVertical: 25,
      }}
    >
      <View>
        <AntDesign
          name="arrowleft"
          size={30}
          color="#fff"
          style={{ left: 28, top: 35 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ top: 20 }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Career
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 21,
            fontWeight: "500",
            bottom: 8,
          }}
        >
          developer
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <AntDesign
          name="user"
          size={30}
          color="#333"
          style={{ right: 28, color: "white", top: 35 }}
          onPress={() => navigation.navigate("ProfileScreen")}
        />
      </View>
    </View>
  );
};

export default CustomHeader;
