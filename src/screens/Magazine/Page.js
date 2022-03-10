import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../../assets/mag1/_DSC7836.jpg")}
      style={{
        width: windowWidth,
        height: windowHeight,
      }}
      resizeMode="cover"
    >
      <AntDesign
        name="arrowleft"
        size={30}
        color="#ffffff"
        style={{
          position: "absolute",
          top: 50,
          left: 10,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <Animatable.Image
        animation={"slideInDown"}
        duration={1800}
        source={require("../../../assets/mag1/careerdeveloperwhite.png")}
        style={{ width: 370, height: 70, alignSelf: "center", marginTop: 70 }}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 20,
        }}
      >
        <Animatable.View
          animation={"slideInLeft"}
          duration={1800}
          style={{ width: windowWidth / 2.2, marginRight: 10, marginTop: 300 }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: "Cambria-bold-italic",
            }}
          >
            180 Хоногийн дотор Дэлхийд хүлээн Зөвшөөрөгдсөн
          </Text>
          <Image
            source={require("../../../assets/mag1/BinanceLogo.png")}
            style={{
              width: 80,
              height: 41.9,
              marginTop: 10,
              marginLeft: 20,
            }}
          />
        </Animatable.View>
        <Animatable.View
          style={{ width: windowWidth / 2.2, marginRight: 10, marginTop: 300 }}
          animation={"slideInRight"}
          duration={1800}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: "Playfair-bold",
              textAlign: "center",
            }}
          >
            Б.ОДБАЯСАЛ:
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Cambria-bold-italic",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Xүлээлтээс давж Ажиллаж чаддаг Хүнд карьер ахиулах Хэцүү биш
          </Text>
        </Animatable.View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Animatable.View
          animation={"slideInLeft"}
          duration={1800}
          style={{ width: windowWidth / 2.5, marginRight: 10, marginTop: 10 }}
        >
          <Text
            style={{ color: "white", fontSize: 20, fontFamily: "Oswald-light" }}
          >
            Kарьераа хөгжүүлэх төлөвлөгөө гаргах энгийн 7 арга
          </Text>
        </Animatable.View>
        <Animatable.View
          animation={"slideInRight"}
          duration={1800}
          style={{ width: windowWidth / 2.2, marginRight: 10, marginTop: 10 }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: "Playfair-bold",
            }}
          >
            Б.БОЛОР-ЭРДЭНЭ:
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Cambria-bold-italic",
            }}
          >
            Чадварлаг залуусыг олон улсад хүч сориосой гэж хүсдэг
          </Text>
        </Animatable.View>
      </View>
      <Animatable.View
        style={{ marginTop: 50, marginHorizontal: 20 }}
        animation={"slideInUp"}
        duration={5000}
        iterationCount={2}
      >
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "white",
            fontSize: 18,
          }}
        >
          В.БАЯРСАЙХАН
        </Text>
        <Text
          style={{ fontFamily: "Playfair-bold", color: "white", fontSize: 21 }}
        >
          ЗАЛУУС ОЛДОЖ БУЙ БОЛОМЖОО ТУЛТАЛ АШИГЛААСА
        </Text>
      </Animatable.View>
    </ImageBackground>
  );
};

export default Page;

const styles = StyleSheet.create({});
