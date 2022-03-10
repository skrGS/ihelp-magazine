import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page8 = () => {
  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 50 }}>
        <Text style={{ fontWeight: "bold", color: "black" }}>31-34 | </Text>
        <Text style={{ color: "grey", fontWeight: "200" }}>
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: windowWidth / 1.1,
          alignSelf: "center",
          marginVertical: 10,
        }}
      />
      <View>
        <Text style={styles.textTitle}>КАРЬЕРАА ХӨГЖҮҮЛЭХ </Text>
      </View>
      <Text style={styles.textTitle}>ТӨЛӨВЛӨГӨӨ ГАРГАХ </Text>
      <Image
        source={require("../../../assets/mag1/00.png")}
        style={{
          width: windowWidth / 1.1,
          height: 200,
          alignSelf: "center",
          marginVertical: 40,
          marginRight: 40,
        }}
        resizeMode="contain"
      />
      <View style={{ width: windowWidth / 1.1, alignSelf: "center" }}>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontFamily: "MinionPro-black",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            ЭНГИЙН 7 АРГА
          </Text>
        </View>
        <Text style={styles.textTitle}>
          Карьер хөгжлийн төлөвлөгөө гэж юу вэ?
        </Text>
        <Text style={styles.textStatus}>
          Та ирээдүйд чухал албан тушаал хаших нэгэн болно гэсэн төсөөлөлтэй
          багаа юу? Дараагийн албаны дарга, маркетингийн ерөнхий менежер,
          магадгүй CEO ч юм уу? Хэрэв тийм төсөөлөл бодлын тань хаа нэгтээ
          байгаа бол бодлуудаа цэгцэлж, карьер хөглийн төлөвлөгөөгөө эхлүүлэхгүй
          бол эдгээ төсөөллүүд тань хүсэл төдий болж замхарна. Харин түүндээ
          хүрэх хамгийн сайн арга бол карьер хөгжлийн төлөвлөгөө зохиох юм.
        </Text>
        <Text style={styles.textStatus}>
          Карьер хөгжлийн төлөвлөгөө нь хүний мэргэжлийн амьдралыг бүтээх үйл
          явц билээ. Энэ нь мэргэжилтнүүдэд өөрийн зорилтод хүрэхэд стратегиа
          өөрчлөх боломжийг олгодог. Энэ бол хүний хөгжлийн чухал хэсэг бөгөөд
          ажил мэргэжилтэй болох шийдвэр гаргаснаар хүний бүхий л амьдралд
          өөрчлөлтийг бий болгодог. Энэ бол хувь хүний боловсрол, ажил
          мэргэжлийн чиглэлээрх менежмент бөгөөд мэргэжлийн хувьд ч тэр, хувь
          хүний хувьд ч тэр ирээдүйд хүссэндээ хүрэх оролдлогоо чөлөөт цагаараа
          эхлүүлж байгаа томоохон алхам юм.
        </Text>
        <Text style={styles.textStatus}>
          Карьер хөгжил нь компани болон ажилтны хоорондын харилцаанд томоохон
          нөлөө үзүүлдэг. Компанийн зүгээс бүтээмжийг өсгөхийг хүсдэг. Тэгвэл
          ажилтнаа мэргэжлийн хувьд зорилгодоо хүрэхэд хэмжээнд нь хөгжүүлснээр
          уг зорилтоо хэрэгжүүлэх боломжтой.
        </Text>
        <Text style={styles.textStatus}>
          Ажилтнууд нь өөрийн карьер хөгжлийг зохицуулж байгаад байгууллага
          баярлах хэрэгтэй бөгөөд сонгосон мэргэжлийнхээ чиглэлээр өсөж дэвжихэд
          нь туслах хэрэгтэй юм.
        </Text>
        <Text style={styles.textTitle}>
          Карьер хөгжлийн төлөвлөгөө гаргах үе шатууд
        </Text>
        <Text style={styles.textStatus}>
          Карьер хөгжлийн төлөвлөгөө нь Та яг одоо хаана байна, тэндээс эхэлнэ.
          Улмаар амьдралынхаа явцад хаана хүрэхийг зорьж байна, түүндээ алхам
          алхмаар ойртох шат дамжлага болох юм. Энэ нь таныг зорилгоо илүү
          тодорхой болгоход туслах бөгөөд карьераа ахиулах замыг тань чиглүүлнэ.
          Уг зорилтдоо хүрэхийн тулд ямар төрлийн боловсрол эзэмшиж, мэргэжлийн
          туршлага хуримтлуулахаа жагсааж бичих тухай асуудал билээ.
        </Text>
        <View>
          <Text style={styles.textTitle}>
            Энэхүү төлөвлөгөө нь дараах 7 үе шатуудад хуваагддаг
          </Text>
        </View>
        {/* 1arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <Image
              source={require("../../../assets/mag1/1career.png")}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>Нэг.</Text>
              <Text style={styles.careerTitle}>
                Ямар салбарт байхыг хүсэж байгаагаа тодорхойлох
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.textStatus}>
              Энэ нь таныг төөрөгдлөөс ангижруулж, ямар төрлийн ажилд дуртай
              болохоо таньж мэдэхэд тустай юм. Хэрэв ирээдүйд баймаар байгаа
              салбараа одоо та тодорхойлчихвол өөрийгөө аль чиглэлээр
              хөгжүүлэхээ ойлгож мэдэхэд тус болно. Мөн та аль компанид ажиллаж
              байхыг хүсэж байгаагаа бичихээс гадна яагаад энэ төрлийн ажлыг
              хийхийн юунд нь дуртай болохохоо бичих ч боломжтой. Энэ нь карьер
              хөгжлийн төлөвлөгөөгөө бичих нэн тэргүүний шаардлагад тооцогддог.
            </Text>
          </View>
        </View>
        {/* 2arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>ХОЁР.</Text>
              <Text style={styles.careerTitle}>Зорилгоо тодорхойл</Text>
            </View>
            <Image
              source={require("../../../assets/mag1/2career.png")}
              style={{ width: 200, height: 200, flex: 0.4 }}
            />
          </View>
          <View>
            <Text style={styles.textStatus}>
              Таны туйлын зорилго юу гэдгээ тодорхойлж, чиглэлээ гаргаж,
              зорил­туудаа энэхүү төлөвлөгөөндөө тусгаарай. Зөв зорилго тавих нь
              зөв алхам хийж, зөв үр дүнд хүрэх гол үндсэн болно.
            </Text>
            <Text style={styles.textStatus}>
              Энэ нь таны байхыг хүсэж байгаа газар, хүсэл сонирхлоо бичихээс
              өөр зүйл учраас үүнтэй холихгүй байхыг хичээгээрэй. Зорилго бол
              таны сонгосон ажил мэргэжлээрээ очихыг хүсэж байгаа эцсийн цэг.
            </Text>
            <Text style={styles.textStatus}>
              Тиймээс зорилгоо аль болох маш тодорхой нарийн бичих хэрэгтэй.
              Карьерийнхаа зорилгыг нарийвчлан бичихдээ ямар албан тушаалд
              очихоо тодорхой гаргахын зэрэгцээ тухайн салбар таны авьяас,
              туршлагад нийцэж байгаа эсэхийг сайтар бодолцоорой. Ийнхүү
              нарийвчилж бичих нь таныг зорилгодоо хүрэх шат бүрийг тодорхой
              болгоход дөхөм болно.
            </Text>
            <Text style={styles.textStatus}>
              Ингэхдээ урт болон богино хугацааны гэж зорилгоо тодорхойлох
              хэрэгтэй. Тэгээд яагаад энэ зорилгыг биелүүлэхийг хүсэж байгаа,
              яагаад таны хувьд зайлшгүй болохыг өөрөөсөө мөн асууж үзээрэй.
            </Text>
            <Text style={styles.textStatus}>
              Зорилго тань нарийн, хэмжиж болохуйц, хүчин чармайлт шаардсан,
              бодитой байхаас гадна бүгд цаг хугацаатай байх хэрэгтэй.
            </Text>
          </View>
        </View>

        {/* 3arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>ГУРАВ.</Text>
              <Text style={styles.careerTitle}>Байр сууриа үнэл</Text>
            </View>
            <Image
              source={require("../../../assets/mag1/3career.png")}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
          </View>
          <View>
            <Text style={styles.textStatus}>
              Та карьерийнхуу хувьд яг одоо ямар байр суурьтай байгаагаа эргэн
              нэг хараарай. Зорилгынхоо хаах нь явааг дахин тодорхойлж, зөв байр
              суурин дээр байгаа эсэхээ өөрөөсөө асуугаарай. Удирдах албан
              тушаалыг онилж байгаа юу? Зорилгодоо хүрэхэд тань хангалттай бүх
              мэдлэг, чадвар таньд байна уу? Эдгээрийг нэг эргэцүүлээрэй.
            </Text>
            <Text style={styles.textStatus}>
              Үүний тулд бүхий л туршлага, ур чадвар, мэдлэгээ тодорхойлон
              бичиж, тэр бүхэн таны карьерын хөгжилтэй холбогдож чадаж байгаа
              эсэхийг бодолцох нь. Ингэснээр одоо хаана байгаагаа тодорхойлж,
              дараагийн зорилгодоо хүрэх алхмаа тодорхойлж чадна гэсэн үг.
            </Text>
          </View>
        </View>
        {/* 4arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <Image
              source={require("../../../assets/mag1/4career.png")}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>ДӨРӨВ.</Text>
              <Text style={styles.careerTitle}>
                SMART зорилгууддаа хүрэх цагалбар гарга
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Montserrat-regular" }}>
              Дээрх бүхэнд дүгнэлт хийсний үндсэн дээр ухаалаг төлөвлөгөөнүүдээ
              гаргах нь.
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginVertical: 10,
              }}
            >
              SMART гэдэг нь
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
              }}
            >
              • Specific - нарийвчилсан
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
                marginVertical: 5,
              }}
            >
              • Measurable - хэмжиж болохуйц
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
              }}
            >
              • Achievable - хүчин чармайлт гаргах хэмжээний
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
                marginVertical: 5,
              }}
            >
              • Realistic - бодитой
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
                marginLeft: 30,
              }}
            >
              • Timely - цаг хугацаатай зорилтуудыг хэлж байгаа хэрэг.
            </Text>
            <Text style={styles.textStatus}>
              Цаг хугацаатай, бодитой төлөвлөлт гаргах нь дээрх зорилтууддаа
              хүрэхэд өөрийгөө хөшүүрэгдэх маш сайн арга юм.
            </Text>
            <Text style={styles.textStatus}>
              Ингэснээр та дараагийн шат ахихад юу шаардлагатай байгаагаа бүрэн
              мэдэж, гартаа оруулснаар түүндээ системтэй хүрэх боломжтой болно.
            </Text>
          </View>
        </View>
        {/* 5arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>ТАВ.</Text>
              <Text style={styles.careerTitle}>
                Өөрт тулгарч байгаа саад бэрхшээлүүдээ тодорхойл
              </Text>
            </View>
            <Image
              source={require("../../../assets/mag1/5career.png")}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
          </View>
          <View>
            <Text style={styles.textStatus}>
              Энэ бол карьер хөгжлийн төлөвлөгөө гаргахын хамгийн хэцүү хэсэг
              байх болно. Энэхүү асуудлуудаа тодорхойлохын тулд та хоёр хэсэгт
              хуваан авч үзэх боломжтой. Эхний хэсэгт та өөрийн зан төлөв,
              зуршил зэрэг өөрт байдаг бэрхшээлээ бичиж болно. Харин дараагийн
              хэсэгт өөрийн богино болон урт хугацааны зорилтдоо хүрэхэд саад
              болдог гадаад хүчин зүйлсийг нэрлэж болох юм.
            </Text>
            <Text style={styles.textStatus}>
              Ийнхүү жагсаан бичсэн бэрхшээ­лүү­дээсээ нэг нэгээр нь ангижрах
              хэрэгтэй.
            </Text>
          </View>
        </View>
        {/* 6arga */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <Image
              source={require("../../../assets/mag1/6career.png")}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>ЗУРГАА.</Text>
              <Text style={styles.careerTitle}>Төлөвлөгөөгөө бич</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textStatus}>
              Ингээд зорилгодоо хүрэх шат болгоноо тодорхойлсноор төлөвлөгөөгөө
              бичих боломжтой болно.
            </Text>
            <Text style={styles.textStatus}>
              Өөрийнхөө юу хүсэж байгаа, юу хийж болох төлөвлөгөөгөө гаргана.
            </Text>
            <Text style={styles.textStatus}>
              Ийнхүү амжилтаа ахиулах төлөв­лөгөөнийхөө талаар мэргэжлийн санал
              авахын тулд зөвлөгч эсвэл менежертэй ярилцахад буруудах зүйлгүй.
              Алхам бүрийг хүснэгт хэлбэрээр танилцуулж, үйлдэл бүрийг хэрхэн,
              хэзээ хийх тухайгаа зөвлөгчтэйгөө хуваалцаарай. Танд мөн давхар
              төлөвлөгөө, уян хатан цагийн хуваарь болон зорилго байх хэрэгтэй
              тул үүнийг төлөвлөгөөндөө тусгаарай.
            </Text>
            <Text style={styles.textStatus}>
              Ингээд төлөвлөгөөгөө хагас жил тутам шалгах хэрэгтэй. Ингэснээр
              өөртөө дүгнэлт хийж, тухай бүрд нь үйлдлээ засаад, сайжруулаад
              явах боломжтой болох юм.
            </Text>
          </View>
        </View>
        {/* 7 */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 30, flex: 1 }}>
            <Image
              source={require("../../../assets/mag1/7career.png")}
              style={{ width: 200, height: 200, flex: 0.5 }}
            />
            <View
              style={{ alignSelf: "center", flex: 0.5, marginHorizontal: 20 }}
            >
              <Text style={styles.careerNumber}>ДОЛОО.</Text>
              <Text style={styles.careerTitle}>
                Цагаас цагт үүнийгээ үнэлж, жижиг хэдий ч чухал үе шат бүрийн
                үнэ цэнийг тодорхойл
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.textStatus}>
              Таны амжилтын төлөвлөгөө нь хэн нэг итгэгчийн дагаж мөрддөг судар
              биш. Та зорилгодоо тууштай тэмүүлж, өөрийгөө хэт дарамтад оруулах
              шаардлагагүй.
            </Text>
            <Text style={styles.textStatus}>
              Бяцхан амжилтанд хүрэх бүрдээ богино хугацаанд өөртөө амралт өгч,
              богино хугацааны амжилтаа үнэлээрэй. Ингэснээр та урам зоригтой,
              баяр хөөртэйгөөр урагшилж, өдөр бүр бүтээмжээ өсгөх боломжтой
              болох юм.
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={require("../../../assets/mag1/careerbg1.png")}
        style={{ width: windowWidth, height: windowHeight }}
      >
        <View
          style={
            {
              // alignContent: "flex-end",
              // alignItems: "flex-end",
              // alignSelf: "flex-end",
            }
          }
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 20,
              textAlign: "right",
              marginTop: 90,
              marginRight: 10,
            }}
          >
            ЯАГААД КАРЬЕР ХӨГЖЛИЙН ТӨЛӨВЛӨГӨӨ
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              textAlign: "right",
              marginBottom: 50,
              marginRight: 10,
            }}
          >
            БИЧИХ ШААРДЛАГАТАЙ ВЭ?
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            Энэхүү төлөвлөгөөг бичсэнээр{" "}
            <Text style={{ fontFamily: "Montserrat-bold" }}>А</Text> цэгээс{" "}
            <Text style={{ fontFamily: "Montserrat-bold" }}>Б</Text> цэгт хүрэх
            таны замыг тодорхой болгож өгөх юм.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            Цаг хугацаа өнгөрөх тусам энэхүү төлөвлөгөө таныг хэрхэн урагшлуулж
            байсныг мэдрэх болно. Эргээд харахад өнөөдрийн өндөрлөгт ирэхийн
            тулд ямар зам туулсны тань гэрч болно.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            Ажил мэргэжлийнхээ замналд хүрэх цэгээ тодорхой болгоход маш том ач
            холбогдолтой. Түүндээ хэзээ, яаж хүрэх хөтөч тань болно.
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Page8;

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: "Montserrat-bold",
    textAlign: "center",
    fontSize: 22,
  },
  textTop: {
    fontSize: 20,
    fontFamily: "Cambria-bold-italic",
    // marginBottom: 15
  },
  textStatus: {
    fontSize: 16,
    marginVertical: 15,
    fontFamily: "Montserrat-regular",
  },
  careerNumber: {
    fontFamily: "Playfair-bold",
    fontSize: 25,
    color: "#55b8ae",
  },
  careerTitle: {
    fontFamily: "Montserrat-regular",
    fontSize: 18,
  },
});
