import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../contexts/UserContex";
import { Button } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const LoginScreen2 = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("97014400");
  const [password, setPassword] = useState("0808");
  const [error, setError] = useState(null);
  const state = useContext(UserContext);

  const loginHandler = () => {
    if (phone.length === 0) {
      Alert.alert("Та утасны дугаараа оруулна уу");
      return;
    }
    if (password.length === 0) {
      Alert.alert("Та нууц үгээ оруулна уу");
      return;
    }

    state.login(phone, password);
  };
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      keyboardDismissMode="on-drag"
    >
      <ImageBackground
        source={require("../../assets/loginbg.png")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      >
        <View style={styles.brandView}>
          <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            direction="alternate"
            source={require("../../assets/2smal.png")}
            style={{
              width: 250,
              height: 118,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
        </View>
      </ImageBackground>
      <Animatable.View
        animation="fadeInUpBig"
        duration={800}
        style={styles.bottomView}
      >
        <View style={{ padding: 40 }}>
          <Text
            style={{
              color: "rgba(30, 40, 50, 60)",
              fontSize: 34,
              textAlign: "center",
            }}
          >
            Тавтай морил
          </Text>

          <View style={{ marginTop: 20 }}>
            {error && (
              <Text style={{ fontSize: 20, textAlign: "center", color: "red" }}>
                {" "}
                {error}{" "}
              </Text>
            )}
            <Input
              label="Утасны дугаар:"
              value={phone}
              onChangeText={setPhone}
              keyboardType="number-pad"
            />
            <Input
              label="Пин код (4 оронтой тоо):"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              keyboardType="number-pad"
            />
            <Text
              style={{ marginBottom: 10, bottom: 10, left: 10 }}
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              Нууц үгээ мартасан бол{" "}
              <Text style={{ color: "blue" }}>энд дар</Text>
            </Text>
          </View>
          <View style={styles.forgetPassView}>
            <View style={{ flex: 1 }}>
              <Button
                title="Нэвтрэх"
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                  backgroundColor: "rgba(30, 40, 50, 60)",
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
                onPress={loginHandler}
              />
            </View>
          </View>
          <Text
            style={{ textAlign: "center", fontSize: 18, paddingVertical: 10 }}
          >
            Хэрэв танд бүртгэл байхгүй бол
          </Text>
          <View style={{ flex: 1 }}>
            <Button
              title="Бүртгүүлэх"
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(60, 70, 80, 90)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                marginHorizontal: 20,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate("RegisterScreen")}
            />
          </View>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default LoginScreen2;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 2,
    backgroundColor: "#ffffff",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgetPassView: {
    flexDirection: "row",
  },
});
