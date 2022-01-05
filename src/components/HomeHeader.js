import React from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

const HomeHeader = () => {
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
        <Image
          source={require("../../assets/2smal.png")}
          style={{ width: 77, height: 36, top: 32, left: 18 }}
        />
      </View>
      <View style={{ right: 11, top: 20 }}>
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
          style={{ right: 25, color: "white", top: 35 }}
          onPress={() => navigation.navigate("ProfileScreen")}
        />
        <Ionicons
          name="notifications-outline"
          size={30}
          color="#333"
          style={{ right: 16, color: "white", top: 35 }}
          onPress={() => navigation.navigate("NotifacationScreen")}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
