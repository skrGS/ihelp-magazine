import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../Constants";
import useAriunzaya from "../hooks/useAriunzaya";

const Ariunzaya = (props) => {
  const navigation = useNavigation();
  const { id } = props.route.params;
  const [ariunzaya, error] = useAriunzaya(id);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!ariunzaya) {
    return null;
  }
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* ariunzaya zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight, flex: 1 }}
        resizeMode="cover"
        source={{ uri: api + "/upload/" + ariunzaya.p4ArFace }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View style={{ flex: 0.5 }} />
        <View
          style={{
            backgroundColor: "#55b8ae",
            // marginBottom: 0,
            flex: 0.35,
            paddingHorizontal: 20,
            width: windowWidth / 1.5,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 22,
              paddingTop: 20,
              color: "white",
            }}
          >
            {ariunzaya.arTitle}
          </Text>
          <View
            style={{
              borderWidth: 3,
              marginVertical: 15,
              width: 50,
              borderColor: "white",
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              fontSize: 16,
              width: windowWidth / 1.8,
              color: "white",
            }}
          >
            {ariunzaya.arText}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>16-20 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#55b8ae",
                fontSize: 10,
              }}
            >
              ОНЦЛОХ ЗОЧИН
            </Text>
          </View>
        </View>
        {/* Zurraas  */}
        <View
          style={{
            borderWidth: 1,
            marginVertical: 10,
          }}
        />
        {/* Taniltsuulga */}
        <Text
          style={{
            marginTop: 50,
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Montserrat-medium",
          }}
        >
          {ariunzaya.p16Work}
        </Text>
        <Text
          style={{
            color: "#55b8ae",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          {ariunzaya.p16Name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 32,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "Playfair-bold",
          }}
        >
          {ariunzaya.p16BigTitle}
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#55b8ae",
            borderColor: "#55b8ae",
            padding: 2,
            width: 80,
            alignSelf: "center",
            marginVertical: 20,
            marginBottom: 30,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Playfair-regular",
              bottom: 10,
              flex: 0.14,
            }}
          >
            M
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Montserrat-bold",
              marginHorizontal: 8,
              top: 5,
              flex: 1,
              marginBottom: 30,
            }}
          >
            {ariunzaya.p16Title}
          </Text>
        </View>
        {/* <Text
            style={{ fontSize: 18, fontFamily: "Montserrat-bold", bottom: 20 }}
          >
            боловсролтой байгаа нь манай улсын хөдөлмөрийн зах зээл хэрхэн
            гажуудсаныг илтгэж байгаа үзүүлэлт болов уу. Хөдөлмөрийн зах зээлийн
            энэ том зааг үүссэн шалтгаан нь юу вэ?
          </Text> */}

        <Text style={{ fontSize: 16, fontFamily: "Montserrat-regular" }}>
          {ariunzaya.p16Text}
        </Text>
        <Text style={styles.textStatus}>{ariunzaya.p16Text2}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p16Status}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p16Status1}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p16Text3}</Text>
        <Text style={styles.textTitle}>{ariunzaya.p16Title1}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p16Text4}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p16Text5}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p16Text6}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p16Text7}</Text>

        <Image
          source={{ uri: api + "/upload/" + ariunzaya.p4Ar1 }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-semibold-italic",
            marginVertical: 15,
          }}
        >
          {ariunzaya.p4Ar1Text}
        </Text>
        <View style={{ borderWidth: 2, borderColor: "#55b8ae" }} />
        <Text style={styles.textTitle}>{ariunzaya.p18Title}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p18Text}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p18Text1}</Text>
        <Text style={[styles.textTitle, { color: "#55b8ae" }]}>
          {ariunzaya.p18BlueText}
        </Text>
        <View style={{ borderWidth: 1, borderColor: "#55b8ae" }} />
        <Text style={styles.textTitle}>{ariunzaya.p18Title1}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p18Text2}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p18Status}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p18Status1}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p18Status2}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p18Text3}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p18Text4}</Text>
        <Text
          style={{
            backgroundColor: "#55b8ae",
            fontFamily: "Montserrat-bold",
            fontSize: 18,
            padding: 18,
            color: "white",
          }}
        >
          {ariunzaya.p18BlueText1}
        </Text>
        <Text style={styles.textTitle}>{ariunzaya.p19Title}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p19Text}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p19Text1}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p19Text2}</Text>
        <Image
          source={{ uri: api + "/upload/" + ariunzaya.p4Ar2 }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-semibold-italic",
            marginVertical: 15,
          }}
        >
          {ariunzaya.p4ArText}
        </Text>
        <View
          style={{ borderWidth: 2, borderColor: "#55b8ae", marginBottom: 15 }}
        />

        <View
          style={{
            backgroundColor: "#55b8ae",
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={[styles.textTitle, { color: "white", textAlign: "right" }]}
          >
            {ariunzaya.p20BlueText}
          </Text>
        </View>

        <Text style={styles.textTitle}>{ariunzaya.p20Title}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p20Text}</Text>
        <Image
          source={{ uri: api + "/upload/" + ariunzaya.p20Photo }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-semibold-italic",
            marginVertical: 15,
          }}
        >
          {ariunzaya.p20PhotoText}
        </Text>
        <View
          style={{ borderWidth: 2, borderColor: "#55b8ae", marginBottom: 15 }}
        />
        <Text style={styles.textTitle}>{ariunzaya.p20Title1}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p20Text1}</Text>
        <Text style={styles.textStatus}>{ariunzaya.p20Text2}</Text>
        <Image
          source={require("../../assets/icon.png")}
          style={{
            width: 14,
            height: 14,
            bottom: 25,
            left: 95,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Montserrat-bold",
          marginHorizontal: 20,
          marginVertical: 30,
          textAlign: "right",
        }}
      >
        2022/03 САР
      </Text>
    </ScrollView>
  );
};

export default Ariunzaya;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-bold",
    // marginBottom: 15
    marginVertical: 8,
  },
  textStatus: {
    fontSize: 16,
    fontFamily: "Montserrat-regular",
    marginVertical: 8,
  },
});