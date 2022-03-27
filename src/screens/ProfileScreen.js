import React, { useContext } from "react";
import { StyleSheet, View, Image, Button } from "react-native";
import { Input } from "react-native-elements";
import ProfileHeader from "../components/ProfileHeader";
import UserContext from "../contexts/UserContex";
import * as Notifications from "expo-notifications";

//Аппыг ажиллаж байхад нь дэлгэцэнд ил байхад нь сэрүүлэг үүсвэл яах ёстойг энд тохируулж өгж байна!
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const ProfileScreen = () => {
  const state = useContext(UserContext);

  return (
    <View style={{ backgroundColor: "#041C32", flex: 1 }}>
      <ProfileHeader />
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          paddingTop: 30,
        }}
      >
        <Image
          source={require("../../assets/icon.png")}
          style={{ height: 150, width: 150 }}
        />
      </View>
      <View style={{ top: 30, paddingHorizontal: 10 }}>
        {/* <Input
          mode="flat"
          label="Нэр:"
          placeholder="Нэрээ оруулна уу"
          value={state.userName}
          style={{ color: "white" }}
        /> */}

        <Input
          mode="flat"
          label="Утасны дугаар:"
          placeholder="Утасны дугаар"
          value={state.phone}
          style={{ color: "white" }}
        />
        <Input
          mode="flat"
          label="И-мэйл хаяг:"
          placeholder="И-мэйл хаяг уу"
          value={state.email}
          style={{ color: "white" }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
