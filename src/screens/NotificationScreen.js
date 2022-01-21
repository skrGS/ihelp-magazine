import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";
import useNotifications from "../hooks/useNotifications";
const Notification = () => {
  const navigation = useNavigation();
  const [notifications] = useNotifications();
  return (
    <ScrollView style={{ backgroundColor: "#041C32", flex: 1 }}>
      <CustomHeader />
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        {notifications.map((e, index) => {
          return (
            <View
              key={index}
              style={{
                borderWidth: 0.5,
                borderColor: "grey",
                marginVertical: 5,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  paddingHorizontal: 5,
                  flexDirection: "row",
                  paddingVertical: 5,
                }}
                onPress={() =>
                  navigation.navigate("NotificationDetailScreen", { id: e.id })
                }
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
                  <Text
                    style={{ color: "grey", fontSize: 16, paddingRight: 40 }}
                  >
                    {e.content}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
