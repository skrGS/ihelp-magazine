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
const Page9 = () => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* Bayarsaihanii zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        resizeMode="cover"
        source={require("../../../assets/mag1/odbaysal.jpeg")}
      >
        <View
          style={{
            backgroundColor: "#0066a6",
            marginTop: 70,
            padding: 15,
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              textAlign: "right",
              fontSize: 16,
              color: "white",
            }}
          >
            ОНЦЛОХ МЕНЕЖЕР
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>38-40 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#0066a6",
                fontSize: 10,
              }}
            >
              ОНЦЛОХ МЕНЕЖЕР
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
          Төрийн банкны бүтээгдэхүүн хөгжүүлэлт, судалгааны хэлтсийн захирал
        </Text>
        <Text
          style={{
            color: "#0066a6",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          Б.ОДБАЯСАЛ
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "Playfair-bold",
          }}
        >
          ХҮЛЭЭЛТЭЭС ДАВЖ АЖИЛЛАЖ ЧАДДАГ ХҮНД КАРЬЕР АХИУЛАХ ХЭЦҮҮ БИШ
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#0066a6",
            borderColor: "#0066a6",
            padding: 2,
            width: 80,
            alignSelf: "center",
            marginVertical: 20,
            marginBottom: 30,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            // marginHorizontal: 20,
            fontFamily: "Montserrat-medium",
            fontSize: 15,
            marginBottom: 30,
          }}
        >
          Өсөн дэвших хүсэл тэмүүлэлтэй, идэвхтэй иргэн байхыг хүсдэг залуус
          карьераа ахиулах, ажлынхаа хажуугаар сайн дурын ажил хийн өөрийгөө
          хөгжүүлэх цагийг хэрхэн гаргах вэ? гэдэг асуултыг түгээмэл тавьдаг.
        </Text>
        <View style={{ flexDirection: "row", flex: 1, marginBottom: 30 }}>
          <Text
            style={{
              flex: 0.5,
              marginRight: 10,
              fontFamily: "Cambria-italic",
              fontSize: 15,
            }}
          >
            Тэгвэл уншигч залуустаа энэ асуултын хариултыг өгөхөөр Төрийн банкны
            бүтээгдэхүүн хөгжүүлэлт, судалгааны хэлтсийн захирал Б.Одбаясалтай
            ярилцлаа. Тэрээр 2005 онд их сургуулиа төгссөнөөс хойш 2-3 жил тутам
            карьераа ахиулсан төдийгүй Төрийн{" "}
          </Text>
          <Text
            style={{
              flex: 0.5,
              marginLeft: 10,
              fontFamily: "Cambria-italic",
              fontSize: 15,
            }}
          >
            банкны дотоод нийгэмд чиглэсэн ажлуудыг манлайлахаас гадна{" "}
            <Text style={{ fontFamily: "Cambria-bold-italic" }}>
              “Mars-V”, “Цагаан доктор”, “Эртэч Монгол”{" "}
            </Text>
            төслүүд зэрэг 10 гаруй сонгуульт болон сайн дурын үйл ажиллагааны
            удирдлагын багт ажиллаж байна.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
          }}
        >
          <Text
            style={{ fontSize: 50, fontFamily: "Playfair-regular", bottom: 10 }}
          >
            T
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Cambria-bold",
              marginHorizontal: 8,
            }}
          >
            аны ажлын түүхийг харахад хоёр жил тутам карьераа ахиулж иржээ.
            Карьераа ахиулахад хамгийн чухал зүйл таны бодлоор юу вэ?
          </Text>
        </View>

        <Text style={styles.textStatus}>
          Залуу мэргэжилтнүүд тасралтгүй өөрийгөө хөгжүүлэх, бэрхшээлд өөрийгөө
          сорих эрмэлзэлтэй байх хэрэгтэй. Танд үүрэг хүлээлгэх үед хариуцлага
          хүлээхэд бэлэн байх нь их чухал. Одоо хийж байгаа ажлаа илүү шаргуу,
          хичээл зүтгэлтэйгээр гүйцэтгэж, мэдлэгээ тэлэн, туршлага хуримтлуулж
          ажиллавал танд байгаа нөөц боломжийг хамт олон болон удирдлагууд тань
          үнэлэх болно. Өөрөөр хэлбэл хариуцсан ажлаа удирдлагынхаа хүлээлтээс
          давуулан биелүүлж чаддаг хүнд карьер ахиулах гэдэг тийм ч хэцүү зүйл
          биш гэж боддог.
        </Text>

        <Text style={styles.textTitle}>
          Хувь хүний карьер хөгжлийг та юу гэж ойлгодог вэ?
        </Text>
        <Text style={styles.textStatus}>
          “Карьер” гэдэг үгийг морин тойруулгын уралдаанд амжилттай оролцох
          гэсэн утгатай франц үг гэж сонсож байсан. Миний хувьд мэргэжлийн
          чадвар, мэдлэгээ дээшлүүлэх, шинэ туршлага хуримтлуулах, ажилдаа ахиц,
          дэвшил гаргах, амьдралын чанараа ахиулж, хүсэл мөрөөдөлдөө хүрэх
          тэмүүлэл, төлөвлөгөөг хувь хүний карьер гэж ойлгодог доо.
        </Text>

        <Image
          source={require("../../../assets/mag1/baysaawork.png")}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-medium",
            backgroundColor: "#0066a6",
            color: "white",
            paddingVertical: 15,
            marginBottom: 15,
            paddingLeft: 10,
          }}
        >
          "Танд үүрэг хүлээлгэх үед хариуцлага хүлээхэд бэлэн байх нь их чухал."
        </Text>

        <Text style={styles.textTitle}>
          Банк, санхүүгийн салбарын залууст тогтвортой, урт хугацаанд, амжилттай
          ажиллахад юу зөвлөх вэ?
        </Text>
        <Text style={styles.textStatus}>
          Манай улсад орчин цагийн банк, санхүүгийн систем үүсэж хөгжөөд 98 жил,
          хоёр шатлалт банкны тогтолцоо үүсэж хөгжөөд 31 жил болж байгаа. Энэ
          салбар технологийн дэвшлүүд, инновацийг үйл ажиллагаандаа хамгийн
          хурдан нэвтрүүлдэг, цаг минут бүрт өөрчлөгдөн хөгжиж буй өрсөлдөөн
          ихтэй салбар. Мөн харилцагчийн итгэл, олон талт харилцааны үндсэн дээр
          тогтдог, заавал биелүүлэх хууль дүрэм, журам ихтэй, хариуцлагатай
          салбар.
        </Text>
        <Text style={styles.textStatus}>
          Тиймээс өөрийгөө тасралтгүй хөгжүүлдэг, ёс зүйтэй, харилцааны болон
          багаар ажиллах арга барилыг эзэмшсэн, эерэг хандлагатай хүмүүс банк,
          санхүүгийн салбарт амжилттай ажиллаж байна гэж харж байна.
        </Text>

        <Text style={styles.textTitle}>
          Монголд залуучууд амжилттай ажиллахад хамгийн том бэрхшээл нь юу
          байдаг вэ?
        </Text>
        <Text style={styles.textStatus}>
          Манай улсын нийт ажилгүй залуусын 58 хувь нь дээд сургуульд мэргэжил
          эзэмшсэн байдаг гэсэн судалгааг 2020 онд Үндэсний статистикийн
          хорооноос гаргасан байсан. Хэдийгээр ажилгүйдэлд хувь хүнээс үл
          хамаарах олон хүчин зүйл нөлөөлдөг ч мэргэжилдээ дуртай байх, ажилдаа
          дуртай байх хоёрын хооронд зөрүү гараад байгаа юм болов уу гэж
          таамаглаж байна. Тиймээс дуртай зүйлдээ мэргэшээд ажиллах нь салбартаа
          манлайлахын үндэс гэж хардаг.
        </Text>

        <Text style={styles.textTitle}>
          Үүрэгт ажлаас гадна сонгууль, сайн дурын бусад олон ажлыг зэрэг
          амжуулахдаа та ямар зарчим баримталдаг вэ?
        </Text>
        <Text style={styles.textStatus}>
          Миний хувьд үндсэн ажлынхаа хажуугаар MARS-V төсөл болон MARSA
          /Монголын сансрын судалгаа хөгжүүлэлтийн төв/-ийн маркетинг, Пи-Арын
          багийн ахлагчийн үүрэг гүйцэтгэхээс гадна “Жаргалын” гэгээ ТББ,
          “Санхүүгийн боловсрол олгох хөтөлбөр”, “Хуримтлалын аян”, “Эртэч
          Монгол” төсөлд хувь хүний санхүүгийн боловсрол сэдвээр сургагч багш
          хийдэг. Олон ажлыг зэрэг амжуулахын тулд нэг ажлын дундуур өөр ажил
          хийдэггүй “цагийн юмыг цагт нь” гэсэн зарчим баримталдаг. Би ажлын
          цагаар зөвхөн ажлаа хийх ёстой гэдэг дүрэмтэй учир сонгуульт болон
          сайн дурын ажлаа ажлын цаг эхлэхээс өмнө эсвэл дараа болон амралтын
          өдрүүдэд хийдэг. Хийж байгаа ажлууд маань бие биедээ сенержи үүсгэн
          бүтээмж сайжруулж байгаа болов уу гэж бодож байна.
        </Text>
        <Image
          source={require("../../../assets/mag1/baysaasiting.png")}
          style={{ width: windowWidth / 1.1, height: 400 }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#0066a6",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          "Дуртай зүйлдээ мэргэшээд ажиллах нь салбартаа манлайлахын үндэс гэж
          хардаг."
        </Text>
        <Text style={styles.textTitle}>
          Залуус гадагшаа явах сонирхол өндөртэй болсон нь анзаарагддаг.
          Монголдоо ажиллахын давуу тал нь юу вэ?
        </Text>
        <Text style={styles.textStatus}>
          Намайг БНСУ-д сурч, ажиллаж байх үед Монгол Улсын Засгийн газраас
          гадаадад эзэмшсэн мэдлэг, туршлагаа эх орныхоо төлөө зориулах уриалга
          гаргаж байсан. Тэгээд 2012 онд сургуулиа төгсөн Монголдоо ирээд
          маргааш нь “Хадгаламж” банканд ажилд орж, банкны салбарт ажиллах
          гараагаа эхэлсэн.
        </Text>

        <Text style={styles.textStatus}>
          Гадаадад ажиллах нь мэдээж хувь хүний сонголт. Надад гадаадад тодорхой
          хугацаанд мэдлэг, туршлага хуримтлуулж ирээд гэр бүл, найз нөхөдтэйгөө
          ойрхон эх орныхоо хөгжлийн төлөө мэдлэг, чадвараа зориулан амьдрах нь
          сайхан санагддаг. Мэдээж Монголд ажиллаж, амьдрахын бэрхшээлтэй талыг
          харахыг хүсвэл зөндөө байлгүй яахав. Гэхдээ давуу тал ч олон. Өнөөдөр
          чиний нийгэмдээ, салбартаа оруулж буй хувь нэмэр, хичээл зүтгэл
          гаргасан цаг хугацааны үнэ цэн ирээдүйд үр хойчид тань баялаг болж
          үлдэж байгааг сайн бодож эргэцүүлэх хэрэгтэй болов уу. Ер нь өнөөдөр
          чиний хийж байгаа зүйл хожим ямар үр дагаварт хүрэхийг тооцох нь хүн
          хаана ажиллах, хэн болохоо сонгоход маш чухал санагддаг даа. Залуус
          маань ч гэсэн энэ талаар эргэцүүлдэг байгаасай гэж хүсдэг.
        </Text>
        <Image
          source={require("../../../assets/icon.png")}
          style={{
            width: 14,
            height: 14,
            bottom: 32,
            left: 5,
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

export default Page9;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-bold",
    // marginBottom: 15
  },
  textStatus: {
    fontSize: 16,
    marginVertical: 15,
    fontFamily: "Montserrat-regular",
  },
});
