import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../Constants";
import { Badge } from "react-native-elements";
import axios from "axios";
import UserContext from "../contexts/UserContex";
const windowWidth = Dimensions.get("window").width;

const HomeHeader = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState();
  useEffect(() => {
    axios
      .get(`${api}/api/v1/notifications`)
      .then((result) => {
        setNotifications(result.data.count);
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        width: windowWidth,
        justifyContent: "space-between",
        backgroundColor: "#1c2841",
        paddingVertical: 35,
      }}
    >
      <View>
        <Image
          source={require("../../assets/faceLogo.png")}
          style={{
            width: 160,
            height: 30,
            justifyContent: "center",
            alignSelf: "center",
            left: 10,
            top: 24,
          }}
        />
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
          style={{ right: 10, color: "white", top: 23 }}
          onPress={() => navigation.navigate("ProfileScreen")}
        />
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("NotifacationScreen")}
        >
          <Ionicons
            name="notifications-outline"
            size={30}
            color="#333"
            style={{ right: 16, color: "white", zIndex: 0, top: 23 }}
          />
          {notifications === 0 ? null : (
            <Badge
              value={notifications}
              status="primary"
              containerStyle={styles.badgeStyle}
            />
          )}
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  badgeStyle: {
    position: "absolute",
    top: 30,
    right: 15,
  },
});

export default HomeHeader;
