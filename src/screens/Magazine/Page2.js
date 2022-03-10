import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import * as Animatable from "react-native-animatable";

const Page2 = () => {
  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{ flexDirection: "row", marginTop: 50, marginHorizontal: 20 }}
      >
        <Text style={{ fontWeight: "bold" }}>6 | </Text>
        <Text style={{ color: "grey", fontWeight: "200" }}>
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          margin: 10,
          marginHorizontal: 20,
          borderColor: "grey",
        }}
      />
      <View style={{}}>
        <Animatable.Text
          animation="slideInDown"
          iterationCount={5}
          direction="alternate"
          style={{
            fontFamily: "Montserrat-bold",
            marginHorizontal: 20,
            color: "#0066a6",
            fontSize: 20,
            marginTop: 10,
          }}
        >
          ЭРХЛЭГЧИЙН ЗУРВАС
        </Animatable.Text>
        <View
          style={{
            borderWidth: 3,
            margin: 20,
            width: 80,
            borderColor: "#0066a6",
          }}
        />
        <Animatable.Image
          animation={"fadeInUpBig"}
          duration={1000}
          source={require("../../../assets/mag1/nka.png")}
          style={{ width: windowWidth / 1.1, height: 400, alignSelf: "center" }}
          resizeMode="cover"
        />
        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 18,
            fontFamily: "Montserrat-bold",
            marginVertical: 25,
          }}
        >
          XXI зуун мэдээллийн ил тод байдал, өрсөлдөөнийг шинэ шатанд гаргалаа.
        </Text>
        <Text style={styles.text}>
          Нэг талаас, мэдээллийн тасралтгүй урсгал эрх чөлөөг мэдрүүлж, суралцах
          төдийгүй хөгжих боломжийг харамгүй олгож буй мэт боловч мэдээллийн их
          шуурга, далай дунд тэнцвэртэй, үнэн, үнэ цэнтэй мэдээллийг шүүн авахад
          цаг хугацаа, хүчин чармайлт шаардаж байна. Тийм ч учраас карьертаа
          анхаардаг, карьераа дөнгөж эхлүүлж байгаа болон эхлүүлэх гээд суралцаж
          буй монгол залууст зөвхөн зорилтот, чанартай бөгөөд цаг зав хэмнэсэн,
          үнэ цэнтэй, уншингаа суралцах боломжтой сэтгүүл та бүхний өмнө цоо
          шинээр хуудсаа дэлгэж байна. Энэ сэдвийн малгай дор анх удаа медиа зах
          зээлд эрхлэн гаргаж буй, бидний сэтгэл, хичээл зүтгэлээ шингээн
          бэлтгэсэн энэхүү сэтгүүл цаашид сар бүр та бүхэнд хэвлэмэл болон
          дижитал хувилбараар хүрэх юм. Дижитал хувилбар үнэ төлбөргүй бөгөөд
          залууст бидний зүгээс чадан ядан хийж буй хөрөнгө оруулалт болохыг та
          бүгд ойлгох биз ээ. ihelp төслийн хүрээнд эрхлэн гаргаж буй CAREER
          DEVELOPER сэтгүүлтэй хамт байгаа хэн бүхэн чухал, хэрэгцээт, өөрийгөө
          хөгжүүлэх мэдээллийг хамгийн сайн шүүн тунгаагдсан хувилбараар тогтмол
          авч байх боломжийг нээж байна.
        </Text>
        <Text
          style={{ fontFamily: "Montserrat-bold", margin: 20, fontSize: 18 }}
        >
          МЭДЛЭГ, ҮНЭ ЦЭН, БОЛОМЖ
        </Text>
        <Text style={styles.text}>
          Анхны дугаартаа бид хөдөлмөрийн зах зээлийн бодлого тодорхойлогч,
          салбарын сайд хатагтай А.Ариунзаяаг онцолж байна. Тэрчлэн Монголын
          бизнесийн экосистемд олон стартап байгуулж, тэр чинээгээрээ богино
          хугацаанд амжилтад хүргэж буй В.Баярсайханы зүгээс залууст хандан
          хэлэх зөвлөгөө, Цахим Монгол буюу E-Mongolia төслийн удирдагч,
          Харилцаа холбоо, мэдээллийн технологийн газрын дарга Б.Болор-Эрдэнийн
          ажил хэрэгтээ баримталдаг зарчим, мөн хөдөлмөрийн зах зээл, түүнийг
          дагасан тоо, бодлого, статистик мэдээллийг Үндэсний Статистикийн
          Хорооны дарга Б.Батдаваагийн ярилцлага зэргээр дамжуулан хүргэж байна.
          Career Developer сэтгүүлийн анхны дугаартай хамт байж, үнэ цэнтэй
          мэдлэг, мэдээлэл, туршлагаа хуваалцсан бүх эрхэмд гүн талархал
          илэрхийлье.
        </Text>
        <Text style={styles.text}>
          Тэрчлэн 180 хоногт дэлхийд хүлээн зөвшөөрөгдсөн Binance, Төрийн банкны
          чадварлаг менежер Б.Одбаясал, Монголын санхүүгийн зах зээлд шинэ
          давлагаа үүсгэж буй топ гүйцэтгэлтэй дижитал ассетууд, 2022 онд дэлхий
          дахины хөгжлийг эрчимжүүлэх шинэ технологиуд зэрэг мэдээллийг та
          бүхэнд онцлон хүргэж байна.
        </Text>
        <Text style={styles.text}>
          Та бүхнийг бидэнтэй ямагт хамт байж, оюунаа цэнэглэн, цэгцтэй, үнэн
          зөв мэдээллийг баталгаатайгаар тогтмол хүлээн авч байгаарай хэмээн
          хүсье. Амжилтад тань үргэлж тус дэм болох CAREER DEVELOPER сэтгүүлийн
          хамт олноос амжилт ерөөе!
        </Text>
      </View>
      <View>
        <View style={{ borderWidth: 1, marginTop: 20, marginHorizontal: 20 }} />
        <Animatable.Image
          animation="slideInRight"
          iterationCount={1}
          direction="alternate"
          source={require("../../../assets/mag1/careerdeveloper.png")}
          style={{ width: windowWidth / 1.1, height: 100, alignSelf: "center" }}
          resizeMode="contain"
        />
        <View style={{ borderWidth: 1, marginTop: 5, marginHorizontal: 20 }} />
        <Animatable.Text
          style={{
            fontFamily: "Montserrat-regular",
            fontSize: 16,
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          2022/03 сар | Дугаар №001
        </Animatable.Text>
        <View style={{ borderWidth: 1, marginHorizontal: 20 }} />
        <Text style={styles.textWork}>Ерөнхий эрхлэгч</Text>
        <Text style={styles.textName}>Г.НАМХАЙДОРЖ</Text>
        <Text style={styles.textWork}>Зөвлөх</Text>
        <Text style={styles.textName}>Т.БЯМБАЖАРГАЛ</Text>
        <Text style={styles.textWork}>Контентын хэлтэс</Text>
        <Text style={styles.textName}>Г.ИЧИНХОРОЛ</Text>
        <Text style={styles.textWork}>Бизнесийн хэлтэс</Text>
        <Text style={styles.textName}>Б.БАЯРМАА</Text>
        <View style={{ borderWidth: 1, margin: 20 }} />
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
          }}
        >
          Зар сурталчилгаа
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          Бидэнтэй хамтран ажиллах, зар сурталчилгаа байршуулахыг хүсвэл та
          бүхэн 7755-5255 дугаарын утсаар болон magazine@ihelp.mn хаягаар холбоо
          барина уу.
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
            marginTop: 30,
          }}
        >
          Холбоо барих
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, UBH төв, 9-р давхар,
          930Б
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
            marginTop: 30,
          }}
        >
          Эрхлэн гаргагч
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          “Новелист Тайм” ХХК
        </Text>
        <View style={{ borderWidth: 1, margin: 20 }} />
        <Image
          source={require("../../../assets/mag1/magazinelogo.png")}
          style={{ width: windowWidth, height: 100 }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/companylogo.png")}
          style={{ width: windowWidth, height: 200 }}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

export default Page2;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,
    // textAlign: "justify",
    fontFamily: "Montserrat-regular",
    fontSize: 16,
  },
  textWork: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-bold",
    marginTop: 20,
  },
  textName: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat-regular",
    marginVertical: 5,
  },
});
