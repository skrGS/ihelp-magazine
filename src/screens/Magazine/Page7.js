import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page7 = () => {
  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "#000000" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 50 }}>
        <Text style={{ fontWeight: "bold", color: "white" }}>30-31 | </Text>
        <Text
          style={{
            color: "grey",
            fontFamily: "Montserrat-regular",
            color: "white",
          }}
        >
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "white",
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginVertical: 10,
        }}
      />

      <View>
        <Fontisto
          name="quote-a-right"
          size={32}
          color="#ffc20e"
          style={{ marginLeft: 20 }}
        />
        <Text
          style={{
            fontFamily: "Oswald-bold",
            color: "white",
            textAlign: "center",
            fontSize: 80,
          }}
        >
          ТОP 10
        </Text>
        <View
          style={{
            borderWidth: 3,
            alignSelf: "center",
            borderColor: "#00aeef",
            width: 100,
            marginVertical: 20,
          }}
        />
        <Text
          style={{
            fontFamily: "Playfair-bold",
            color: "white",
            textAlign: "center",
            fontSize: 30,
          }}
        >
          Гүйцэтгэх захирлуудын зөвлөгөө
        </Text>
        <Fontisto
          name="quote-a-left"
          size={32}
          color="#ffc20e"
          style={{ alignSelf: "flex-end", marginRight: 20 }}
        />
      </View>
      {/* 10 захиралууд */}
      {/* 1 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/1.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Лхагва гарагт бид ямар нэгэн хурал, уулзалт хийдэггүй. Хурал,
            уулзалтуудын хооронд цагаа үрэлгүй, өмнөх ажилдаа төвлөрөх
            хангалттай цаг гаргахын тулд энэ аргыг ашигладаг. Манай компанийн
            соёлын магадгүй хамгийн үнэ цэнтэй арга барил нь энэ болов уу. Бусад
            компани ч мөн адил энэ аргыг ашиглаасай гэж би хүсдэг.
          </Text>
        </View>
        <Text style={styles.ceoName}>- ДАСТИН МОСКОВИЦ - </Text>
        <Text style={styles.workName}>Asan - CEO</Text>
      </View>
      {/* 2 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/2.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Би үргэлж өөрөө бэлэн биш зүйлийг хийдэг. Ингэж л хүн өсөж хөгждөг.
            Толгойд нь эргэлзээ төрж буй тэр цаг мөчид өөрийгөө шахаж байж
            амжилтад хүрнэ.
          </Text>
        </View>
        <Text style={styles.ceoName}>- МАРИСА МАЙЕР - </Text>
        <Text style={styles.workName}>Yahoo - Former CEO</Text>
      </View>
      {/* 3 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/3.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Бүтэлгүйтэл бол сонголт. Хэрвээ чи бүтэлгүйтэхгүй л байвал
            хангалттай хэмжээний инновац хийхгүй байна гэсэн үг.
          </Text>
        </View>
        <Text style={styles.ceoName}>- ИЛОН МАСК -</Text>
        <Text style={styles.workName}>Tesla, Paypal & SpaceX - Founder</Text>
      </View>
      {/* 4 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/4.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Өөрийнхөө итгэж буй тэр зүйлийг хийх зориг зүрхтэй бай” гэж ээж минь
            надад нэг удаа зөвлөж байсан юм. Ихэнх хүн аливааг олж харж чаддаг ч
            түүнийгээ хийх, турших зориггүй байдаг.
          </Text>
        </View>
        <Text style={styles.ceoName}>- УОЛТЕР РОББ -</Text>
        <Text style={styles.workName}>Whole Foods Market - CEO</Text>
      </View>
      {/* 5 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/5.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Үргэлж өөрийгөө сорьж бай. Бэлэн эсэхдээ эргэлзэж байсан ч өөрийгөө
            сориод үз.
          </Text>
        </View>
        <Text style={styles.ceoName}>- ШЕРИЛ СЕНДБЕРГ -</Text>
        <Text style={styles.workName}>Facebook - COO</Text>
      </View>
      {/* 6 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/6.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Зөв чигтээ алхаж буйгаа ойлгох үед ажил чиний хувьд огт өөр зүйлийг
            илэрхийлэх болно. Харин бусад тохиолдолд зүгээр л ажил. Амьдрал үүнд
            хэтэрхий богинодоно.
          </Text>
        </View>
        <Text style={styles.ceoName}>- ТИМ КҮҮК -</Text>
        <Text style={styles.workName}>Apple Inc - CEO</Text>
      </View>
      {/* 7 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/7.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Зүгээр л боломжийг атга. Эрчүүд нүдээ аниад орж, аливааг хийнгээ
            суралцдаг байхад эмэгтэйчүүд өөртөө итгэх итгэл дутмаг байдаг.
            Зүгээр л боломжийг атга.
          </Text>
        </View>
        <Text style={styles.ceoName}>- КЕТЛИН МЕРФИ -</Text>
        <Text style={styles.workName}>Fidelity Investment - President</Text>
      </View>
      {/* 8 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/8.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Номер нэг, номер хоёрын хоорондох зай үргэлж тогтмол байдаг. Хэрвээ
            чи байгууллагаа сайжруулахыг хүсвэл өөрийгөө эхлээд хөгжүүл.
            Байгууллага чинь, компани чинь чамтай хамт ахиж дээшлэх болно.
          </Text>
        </View>
        <Text style={styles.ceoName}>- ИНДРА НУЙМ -</Text>
        <Text style={styles.workName}>PepsiCo - CEO</Text>
      </View>
      {/* 9 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/9.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Үргэлж зөв шийдвэр гаргахгүй гэдгээ бид хүлээн зөвшөөрөх хэрэгтэй.
            Бүтэлгүйтэл бол амжилтын эсрэг тал гэж харахаас илүүтэй, энэ бол
            амжилтын нэг хэсэг гэж үзэх нь зүйтэй.
          </Text>
        </View>
        <Text style={styles.ceoName}>- АРИАНА ХАФФИНГТОН -</Text>
        <Text style={styles.workName}>The Huffington Post - Founder</Text>
      </View>
      {/* 10 */}
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/mag1/10.png")}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "center",
            }}
          />
          <Text style={styles.textStatus}>
            Амьдрал ямагт төгс цаг хугацаандаа төгс боломжийг чамд бэлэглэхгүй.
            Амьдралд хааяа чиний санаанд огт оромгүй үед, бэлэн биш байх үед
            чинь боломж гарч ирдэг. Сайхан боломжууд замбараагүй, эргэлзмээр,
            олж харахад, танихад хэцүү байдаг. Боломж эрсдэлтэй. Боломж чамайг
            сорих болно.
          </Text>
        </View>
        <Text style={styles.ceoName}>- СьЮЗАН ВОЖИЦКИ -</Text>
        <Text style={styles.workName}>YouTube - CEO</Text>
      </View>
      <View style={{ marginVertical: 20 }} />
    </ScrollView>
  );
};

export default Page7;

const styles = StyleSheet.create({
  textStatus: {
    color: "white",
    fontFamily: "Montserrat-regular",
    marginRight: 150,
    marginLeft: 10,
    fontSize: 14,
  },
  ceoName: {
    color: "#00aeef",
    fontFamily: "Montserrat-regular",
    fontSize: 18,
    marginVertical: 10,
  },
  workName: {
    color: "#fff",
    fontFamily: "Montserrat-bold",
  },
});
