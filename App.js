import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import axios from "axios";
import { UserStore } from "./src/contexts/UserContex";
import MyStackNavigator from "./src/navigation/MyStackNavigator";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    console.log("Must use physical device for Push Notifications");
  }
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  return token;
}

function App() {
  const responseListener = useRef();
  useEffect(() => {
    if (Constants.isDevice && Platform.OS !== "web") {
      registerForPushNotificationsAsync().then((token) => {
        axios.post(`https://app.nativenotify.com/api/expo/key`, {
          appId: 930,
          appToken: "X0kjxdb9Y09ZC1ADDMDbPB",
          expoToken: token,
        });
      });
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response.notification.request.content.data);
          // If you send a Data Object with your push notification,
          // your Data Object will return here within 'response.notification.request.content.data' once your user taps on your push notification.
          // You can use a Data Object value to redirect your user to a certain screen based on the value of your Data Object
          // Your Data Object should always return if the app is in the foreground or background when push notification is clicked.
          // Your Data Object may not return if the app is killed when push notification is clicked.
        });
      return () => {
        Notifications.removeNotificationSubscription(responseListener);
      };
    }
  });
  return (
    <NavigationContainer>
      <UserStore>
        <MyStackNavigator />
      </UserStore>
    </NavigationContainer>
  );
}

export default App;
