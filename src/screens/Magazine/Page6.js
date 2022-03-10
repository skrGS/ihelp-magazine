import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Page6 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ backgroundColor: "white", width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      {/* Page 11 nuur huudas  */}
      <ImageBackground
        source={require("../../../assets/mag1/page11.png")}
        style={{ width: windowWidth, height: windowHeight * 1 }}
        resizeMode="cover"
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          style={{
            position: "absolute",
            top: 120,
            left: 20,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            backgroundColor: "#ef58a0",
            alignSelf: "flex-start",
            marginTop: 70,
            paddingHorizontal: 15,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 16,
            }}
          >
            ЧИГ ХАНДЛАГА
          </Text>
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            marginVertical: 50,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 20,
              textAlign: "right",
            }}
          >
            КОМПАНИУД
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#ef58a0",
              width: 145,
              alignSelf: "flex-end",
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 20,
            }}
          >
            "ГАНЦ ЭВЭРТҮҮД"-ИЙГ
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#ef58a0",
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 20,
              textAlign: "right",
            }}
          >
            ХАЙЖ БАЙНА
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#ef58a0",
              width: 152,
              alignSelf: "flex-end",
            }}
          />
        </View>
      </ImageBackground>
      {/* 4Aguulga */}
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>26-27 | </Text>
        <Text style={{ color: "grey", fontWeight: "200" }}>
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <Text style={styles.textStatus}>
          Unicorn буюу Ганц эвэрт гэдэг амьтан байдагт зарим хүн итгэдэг, харин
          зарим нь итгэдэггүй. Яг л Монголын Хангарьд шиг. Ийм амьтныг олоход
          хэцүү. Тэгвэл тэрбум ам.долларын үнэлгээнд хүрсэн старт-ап компанийг
          Америкт ийн нэрийддэг. Гараанаас гараад ингэж үсрэнгүй хөгжсөн
          компанийг олох нь яг л Ганц эвэртийн эрэлд гарахтай ижил хэмээн
          зүйрлэжээ.
        </Text>
        <Text style={styles.textStatus}>
          Өнөө цагийн ажил олгогчид цаашид дахин аз туршихыг хүсэхээ больсон
          байна. Шинэ авсан ажилтнаа сургаж, хөтөлбөрт хамруулж, чадавхжуулахад
          мөнгө зарцуулахыг хүсэхгүй байна. Тийм ч учраас ажилд авах босгоо "3-5
          жилийн туршлагатай" гэж тавих нь түгээмэл хандлага болжээ. Үүнийг
          дагаад ажлын ярилцлагын цаг удаан үргэлжлэх болж. Зарим ажлын байран
          дээр бүр зургаан үе шаттай ярилцлага товлож байгаа гэвэл та итгэх үү?
          Зарим горилогчдын хувьд үүнийг нэг өдөрт амжуулж чадаж байгаа ба тэр
          өдрийг "супер өдөр" хэмээн нэрших хэмжээнд түгээмэл болжээ. Үүний
          хажуугаар хувийн үнэлэмж, гэрийн даалгавар зэрэг нь шалгуурт багтах
          болсныг анхаарахгүй өнгөрч болохгүй нь.
        </Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numberTitle}>1</Text>
          <Text style={styles.textTitle}>
            САЙН АЖЛЫН БАЙР ОЛЖ АВАХАД АМАРГҮЙ БОЛЖ БАЙНА
          </Text>
        </View>
        <Text style={styles.textStatus}>
          Нээлттэй ажлын байр маш олноор зарлагдсан байдаг. Гэвч Америкийн
          корпорацууд ажиллах хүчний хомсдолд орж байна. Компаниуд ажилтнуудаа
          сонгон шалгаруулж авахын тулд бүхий л зүйлийг хийж байгаагийн гол
          хөшүүрэг нь өндөр цалин амлах. Зарим нь шинэ загварын iPhone хүртэл
          үнэгүй өгч, фитнесс клубийн эрх дагалдуулах гэх мэт олон таатай
          нөхцөлийг санал болгох болжээ. Мэдээж эдгээр нь өндөр орлоготой ажлын
          байрны санал. Менежерүүд ажилчдын ажлаас гарч, орох үйл явцад толгой
          гашилгах болжээ.
        </Text>
        <Text style={styles.textStatus}>
          Монголд ч бас ийм хандлага сүүлийн жилүүдэд бий болоод байгааг дурдах
          хэрэгтэй. Энэ нь Америктай харьцуулахад манай хөдөлмөрийн зах зээлийн
          тогтолцоотой илүү холбогдоно.
        </Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numberTitle}>2</Text>
          <Text style={styles.textTitle}>АЖЛЫГ ХҮНИЙ ТӨЛӨӨ ХИЙХЭЭ БОЛь!</Text>
        </View>
        <Text style={styles.textStatus}>
          Ажлын байрны шалгаруулалтын үеэр түгээмэл яригддаг зүйл бол "Надад
          мөнгө хэрэгтэй байгаа учраас би ажил хиймээр байна. Би олон төрлийн
          төлбөр төлдөг. Хүн болгон л үүний төлөө ажил хийдэг биз дээ" гэх
          хандлага. Харамсалтай нь, энэ бол буруу өнцөг. Компаниуд илүү онцгой
          зүйлийг хүлээж байдаг. Тухайн компанийн хэтийн зорилгод хувь нэмэр
          оруулах хэмжээний судалгаа, хүчин чармайлт гаргахыг танаас хүсэж
          байдаг.
        </Text>
        <Text style={styles.textStatus}>
          Сэтгэл зүйчид ч мөн энэ тал дээр зөвлөхдөө тухайн ажлыг хүнд хийж өгч
          байна гэж цаг нөхцөөх бус, би үнэт цагаа зориулж байгаа тул
          амьдралынхаа энэ цагийг хэрхэн үр дүнтэй өнгөрөөх вэ гэдэг талаас нь
          ажилдаа хандах нь зөв гэдгийг сануулдаг.
        </Text>
      </View>
      <Image
        source={require("../../../assets/mag1/page11pony.png")}
        style={{ width: windowWidth / 1.2, height: 300 }}
      />
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numberTitle}>3</Text>
          <Text style={styles.textTitle}>
            ХАРИЛЦАА ХОЛБОО (NETWORKING) ХЭЗЭЭ ХЭЗЭЭНЭЭС ИЛҮҮ ЧУХАЛ БОЛОВ
          </Text>
        </View>
        <Text style={styles.textStatus}>
          Та цахимаар ажлын байрны хүсэлт явуулж байгаа нь өргөдлөө хар нүх рүү
          хаяж байна л гэсэн үг. Магадгүй хэн нэгэн таны өргөдлийг уншина.
          Магадгүй олж харах ч үгүй байх.
        </Text>
        <Text style={styles.textStatus}>
          Ажил хайж байгаа өргөдлөө ямар нэгэн аргаар холбогдох албан тушаалтны
          нүдний өмнө аваачих шаардлагатай шүү дээ. Үүний тулд:
        </Text>
        <Text style={styles.textStatus}>
          * Ажилтан авах ажлыг хариуцсан менежер рүү урьдчилж холбоо
          барихгүйгээр, хүсээгүй ч хамаагүй и-мэйл илгээ. Өөрийн товч түүх,
          өргөдлөө хавсаргах хэрэгтэй.
        </Text>
        <Text style={styles.textStatus}>
          * Тухайн салбартай холбоотой бага хурал, арга хэмжээнд оролцож, аль
          болох олон хүнтэй уулзаарай.
        </Text>
        <Text style={styles.textStatus}>
          * Одоо байгаа харилцаа холбоогоо ашиглан чухал хүнтэй танилцуулж болох
          хэн нэгнийг эрж хайгаарай.
        </Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#f1f2f2",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numberTitle}>4</Text>
          <Text style={styles.textTitle}>
            ЭНЭ БҮХНИЙ ЭЦЭСТ ТАНЫГ АМЖИЛТАД ХҮРНЭ ГЭДЭГТ ИТГЭЖ БАЙНА
          </Text>
        </View>
        <Text style={styles.textStatus}>
          Цар тахлын улмаас маш олон хүн ажилгүй болсон. Үүнд менежерүүд, хүний
          нөөцийн ажилтнууд олноор өртсөн. Магадгүй өнөөдөр тэд ажил хайгчийн
          өнцгөөс аливааг харж байгаа байх.
        </Text>
        <Text style={styles.textStatus}>
          Ажил горилогчид үгээ хэлж чадна. Гэхдээ тэдэнд эрх мэдэл байхгүй. Энэ
          салбар зөвхөн дотроосоо өөрчлөгдөж чадна. Тиймээс энэ бүх өөрчлөлттэй
          уялдуулж, ажил хайж байгаа үйл явцдаа анхаарах шаардлагатай болжээ.
        </Text>
        <Image
          source={require("../../../assets/icon.png")}
          style={{
            width: 14,
            height: 14,
            bottom: 32,
            left: 55,
            alignSelf: "center",
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

export default Page6;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-bold",
    color: "#a93b91",
    marginLeft: 10,
    marginRight: 50,
  },
  textStatus: {
    fontSize: 18,
    marginVertical: 15,
    fontFamily: "Montserrat-regular",
    color: "#000000",
  },
  numberTitle: {
    fontFamily: "Oswald-medium",
    color: "#a93b91",
    fontSize: 40,
    bottom: 10,
  },
});
