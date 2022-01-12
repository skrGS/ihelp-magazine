import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import CustomHeader from "../components/CustomHeader";
import useNotifications from "../hooks/useNotifications";
const Notification = () => {
  const [notifications] = useNotifications();
  return (
    <ScrollView style={{ backgroundColor: "#041C32", flex: 1 }}>
      <CustomHeader />
      {notifications.map((e, index) => {
        return (
          <View key={index}>
            <View
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                paddingVertical: 5,
              }}
            >
              <Image
                source={require("../../assets/images/logo.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ paddingHorizontal: 10 }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                >
                  {e.name}
                </Text>
                <Text style={{ color: "grey", fontSize: 16, paddingRight: 40 }}>
                  {e.content}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
