import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import useNotification from "../hooks/useNotification";
import CustomHeader from "../components/CustomHeader";

const NotificationDetailScreen = (props) => {
  const { id } = props.route.params;
  const [notification, error] = useNotification(id);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!notification) {
    return null;
  }
  return (
    <View style={{ backgroundColor: "#041C32", flex: 1 }}>
      <CustomHeader />
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#ffffff" }}>
          ☛︎ {notification.name}
        </Text>
        <Text style={{ fontSize: 20, color: "grey", paddingTop: 15 }}>
          {notification.content}
        </Text>
      </View>
    </View>
  );
};

export default NotificationDetailScreen;

const styles = StyleSheet.create({});
