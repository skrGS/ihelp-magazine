import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../../Constants";
import Loading from "../../components/Loading";
import * as Animatable from "react-native-animatable";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page = ({ data, loading }) => {
  const navigation = useNavigation();
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <ImageBackground
          source={{ uri: api + "/upload/" + data.facePhoto }}
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
            useNativeDriver={true}
            animation="fadeInDownBig"
            duration={800}
            direction={"alternate"}
            iterationDelay={2000}
            source={{ uri: api + "/upload/" + data.faceLogo }}
            style={{
              width: 370,
              height: 70,
              alignSelf: "center",
              marginTop: 70,
            }}
          />
          <Animatable.View
            useNativeDriver={true}
            animation="fadeInLeftBig"
            duration={500}
            direction={"alternate"}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                width: windowWidth / 2.2,
                marginRight: 20,
                marginTop: 300,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Cambria-bold-italic",
                }}
              >
                {data.faceLogo2Text}
              </Text>
              <Image
                source={{ uri: api + "/upload/" + data.faceLogo2 }}
                style={{
                  width: 80,
                  height: 41.9,
                  marginTop: 10,
                  marginLeft: 20,
                }}
              />
            </View>
            <View
              style={{
                width: windowWidth / 2.2,
                marginRight: 10,
                marginTop: 300,
              }}
              duration={1800}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Playfair-bold",
                  textAlign: "right",
                }}
              >
                {data.faceTitle}
              </Text>

              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Cambria-bold-italic",
                  textAlign: "right",
                  marginTop: 10,
                }}
              >
                {data.faceText}
              </Text>
            </View>
          </Animatable.View>
          <Animatable.View
            useNativeDriver={true}
            animation="fadeInRightBig"
            duration={500}
            direction={"alternate"}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginHorizontal: 10,
              marginTop: 20,
            }}
          >
            <View style={{ width: windowWidth / 3, marginTop: 10 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Oswald-light",
                }}
              >
                {data.faceCareer}
              </Text>
            </View>
            <View style={{ width: windowWidth / 2.2, marginTop: 10 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Playfair-bold",
                  textAlign: "right",
                }}
              >
                {data.faceTitle1}
              </Text>

              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Cambria-bold-italic",
                  textAlign: "right",
                  marginTop: 10,
                }}
              >
                {data.faceText1}
              </Text>
            </View>
          </Animatable.View>
          <Animatable.View
            useNativeDriver={true}
            animation="fadeInUpBig"
            duration={500}
            direction={"alternate"}
            style={{ marginTop: 50, marginHorizontal: 20 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {data.faceTitle2}
            </Text>
            <Text
              style={{
                fontFamily: "Playfair-bold",
                color: "white",
                fontSize: 21,
              }}
            >
              {data.faceText2}
            </Text>
          </Animatable.View>
        </ImageBackground>
      )}
    </>
  );
};

export default Page;

const styles = StyleSheet.create({});
