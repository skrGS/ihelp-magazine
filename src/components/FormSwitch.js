import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { mainColor, lightColor, textColor } from "../../Constants";
import Feather from "react-native-vector-icons/Feather";
import { Switch, TouchableRipple } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const FormText = (props) => {
  return (
    <View style={{ backgroundColor: "#041C32" }}>
      <Text style={{ fontSize: 16, color: "grey", fontWeight: "bold" }}>
        {props.label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <Ionicons name={props.icon} size={20} color={"white"} style={{}} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            paddingLeft: 10,
          }}
        >
          <TouchableRipple onPress={props.onValueChange}>
            <Text style={{ color: "white", fontSize: 17 }}>
              {props.value ? props.data[0] : props.data[1]}
            </Text>
          </TouchableRipple>
          <Switch
            color={"green"}
            value={props.value}
            onValueChange={props.onValueChange}
            style={{ bottom: 12, right: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default FormText;

const styles = StyleSheet.create({});
