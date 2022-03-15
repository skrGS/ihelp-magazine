import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import ProfileHeader from "../components/ProfileHeader";
import UserContext from "../contexts/UserContex";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { api } from "../../Constants";

//Аппыг ажиллаж байхад нь дэлгэцэнд ил байхад нь сэрүүлэг үүсвэл яах ёстойг энд тохируулж өгж байна!
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const registerForPushNotificationsAsync = async () => {
  try {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      throw new Error("Permission not granted!");
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    return token;
  } catch (error) {
    console.error(error);
  }
};

const ProfileScreen = () => {
  const state = useContext(UserContext);
  const [alarm, setAlarm] = useState("Сануулахгүй");
  const [notificationId, setNotificationId] = useState(null);
  const [userName, setUserName] = useState(state.userName);
  useEffect(() => {
    const notificationResponseReceivedListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response, "clicked");
      });

    const notificationReceivedListener =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(
          "notification irleeeee",
          notification.request.content.data.id
        );
      });

    registerForPushNotificationsAsync();
    AsyncStorage.getItem("notificationId")
      .then((result) => {
        console.log("id==", result);
        setNotificationId(result);
      })
      .catch((err) => console.log(err));
    AsyncStorage.getItem("alarm")
      .then((result) => {
        setAlarm(JSON.parse(result).alarm);
      })
      .catch((err) => console.log(err));

    return () => {
      notificationReceivedListener.remove();
      notificationResponseReceivedListener.remove();
    };
  }, []);

  const toggleAlarm = () => {
    setAlarm((alarm) => {
      const newValue = !alarm;

      // if (newValue) {
      //   Notifications.scheduleNotificationAsync({
      //     content: {
      //       title: "Карьераа хөгжүүлье!",
      //       body: "Танд хэрэгтэй мэдээллүүд чанартай найдвартай баттай эх сурвалжаас...",
      //       data: {
      //         id: "61cd6da4e588ca5cbc955cd4",
      //       },
      //     },
      //     trigger: {
      //       seconds: 2,
      //     },
      //   })
      //     .then((id) => {
      //       console.log("alarm : ", id);
      //       setNotificationId(id);
      //       AsyncStorage.setItem("notificationId", id);
      //     })
      //     .catch((err) => console.log(err));
      // } else {
      //   Notifications.cancelScheduledNotificationAsync(notificationId)
      //     .then((result) => {
      //       setNotificationId(null);
      //       AsyncStorage.removeItem("notificationId");
      //       console.log("alarm cancelled : ");
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
      AsyncStorage.setItem("alarm", JSON.stringify({ alarm: newValue }));
      return newValue;
    });
  };
  const navigation = useNavigation();
  const changeData = () => {
    axios.put(`${api}/v1/users/${state.userId}`, {
      name: userName,
      email: email,
      phone: phone,
    });
  };
  return (
    <View style={{ backgroundColor: "#041C32", flex: 1 }}>
      <ProfileHeader />
      <View
        style={{
          // backgroundColor: "white",
          justifyContent: "center",
          alignSelf: "center",
          paddingTop: 30,
          // borderRadius: 150,
        }}
      >
        {/* <Entypo
          name="progress-two"
          size={100}
          color="#333"
          style={{ color: "#ffffff" }}
        /> */}
        <Image
          source={require("../../assets/icon.png")}
          style={{ height: 150, width: 150 }}
        />
      </View>
      <View style={{ top: 30, paddingHorizontal: 10 }}>
        <Input
          mode="flat"
          label="Нэр:"
          placeholder="Нэрээ оруулна уу"
          value={userName}
          style={{ color: "white" }}
        />

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
        {/* <View style={{ paddingHorizontal: 10 }}>
          <FormSwitch
            label="Мэдэгдэл:"
            icon={
              alarm === true
                ? "notifications-outline"
                : "notifications-off-outline"
            }
            data={["Нээгдсэн", "Хаагдсан"]}
            value={alarm}
            onValueChange={toggleAlarm}
          />
        </View> */}
        {console.log(state.userId)}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
