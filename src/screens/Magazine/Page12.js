import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page12 = () => {
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../../assets/mag1/batdavaa.jpg")}
        style={{ width: windowWidth, height: windowHeight, flex: 1 }}
        resizeMode="cover"
      >
        <View style={{ flex: 5 }} />
        <View
          style={{
            backgroundColor: "white",
            alignSelf: "flex-end",
            marginTop: 140,
            flex: 1.05,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Oswald-bold",
              color: "#f15623",
              alignSelf: "flex-end",
              fontSize: 25,
              marginTop: 1,
            }}
          >
            ӨРХИЙН ОРЛОГO буурсныг
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-bold",
              color: "#f15623",
              alignSelf: "flex-end",
              fontSize: 25,
            }}
          >
            ХАЛАМЖ ОРЛОЖ БАЙНА
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontFamily: "Cambria-italic",
              color: "white",
              alignSelf: "flex-end",
              marginTop: 50,
              paddingRight: 20,
            }}
          >
            Монгол Улсын хөдөлмөр эрхлэлт,
          </Text>
          <Text
            style={{
              fontFamily: "Cambria-italic",
              color: "white",
              alignSelf: "flex-end",
              paddingRight: 20,
            }}
          >
            түүний чиг хандлагын талаар{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Cambria-italic",
              color: "white",
              alignSelf: "flex-end",
              paddingRight: 20,
            }}
          >
            Үндэсний Статистикийн Хорооны{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Cambria-italic",
              color: "white",
              alignSelf: "flex-end",
              paddingRight: 20,
            }}
          >
            дарга Б.Батдаваатай ярилцлаа.{" "}
          </Text>
        </View>

        <View style={{ alignSelf: "flex-end", flex: 2, marginRight: 20 }}>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              color: "white",
              width: windowWidth / 2.3,
            }}
          >
            Үндэсний статистикийн хорооны дарга
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 20,
            }}
          >
            Б.БАТДАВАА
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>58-62 | </Text>
          <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
            CAREER DEVELOPER
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, marginVertical: 5, borderColor: "grey" }}
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
              flex: 0.1,
            }}
          >
            Ц
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-bold",
              flex: 0.9,
              top: 10,
              marginLeft: 10,
            }}
          >
            ар тахал хөдөлмөрийн зах зээлд хэрхэн нөлөөлж байна вэ?
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 15,
            fontFamily: "Montserrat-regular",
          }}
        >
          Цар тахлын өмнөх үе буюу 2019 онд Монгол Улсын хэмжээнд ажиллах хүч
          1.3 сая, ажил эрхлэлтийн оролцоо 60.7 хувьтай байсан. Өөрөөр хэлбэл,
          хөдөлмөрийн насны 1.3 сая хүнээс 60.7 хувь нь ажил хийж байжээ гэсэн
          үг. Харин энэ үзүүлэлт 2021 оны нэгдүгээр улиралд 54.9 хувь болж
          буурсан. Үүнийг тоогоор хэлбэл, 2020 оны хоёрдугаар улирлаас 2021 оны
          хоёрдугаар улирлын байдлаар цар тахлын нөлөөгөөр 80 гаруй мянган хүн
          ажилгүй болсон. Гуравдугаар сараас хөл хориог сулруулсан. Ингэхэд
          буцаад хөдөлмөр эрхлэлт 56 хувь болж, бага зэрэг өсөж байна. Хөдөлмөр
          эрхлэлт 2021 оны эхний гурван сар буурч байснаа хөл хорио суларснаар
          хоёрдугаар улирлаас эргээд сэргэсэн үзүүлэлттэй гарсан. Өнгөрсөн жил
          хэдийгээр бизнесийн үйл ажиллагаа хязгаарласан байсан ч хөдөлмөрийн
          зах зээлд гүнзгий нөлөө үзүүлээгүй. Харин цар тахлын бодит нөлөө өмнөх
          оны дөрөв, 2021 оны нэгдүгээр улиралд харагдсан.
        </Text>
        <Text style={styles.textTitle}>Аль салбар хамгийн их өртсөн бэ?</Text>
        <Text style={styles.textStatus}>
          Ажилгүй болсон 80 гаруй мянган хүний дийлэнх нь үйлчилгээний
          салбарынхан. Худалдааны салбар 23 мянга орчим. Мөн боловсролын
          салбарынхан байна. Сургалтын төвүүд жил орчим хугацаанд хаалттай
          байлаа шүү дээ.
        </Text>
        <Text style={styles.textTitle}>
          Ажилгүйдлийн түвшин сүүлийн жилүүдэд хэрхэн өөрчлөгдөж байна вэ. Хэдэн
          насныхны дунд ажилгүйдэл их байна вэ?
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
          }}
        >
          Залуучуудын дунд ажилгүйдэл дунджаас өндөр байна. Ажилгүйдлийн түвшин
          нийт 8.4 хувьтай гэхэд 15-19 насныхны дунд ажилгүйдэл 17.6 хувь, 20-24
          насныхан 17 хувь, 25-29 насныхан 12.4 хувьтай байна. Ерөнхийдөө 34-өөс
          дээш насныхны дунд ажилгүйдэл бага байна.
        </Text>
        <Text style={styles.textStatus}>
          Дэлхийн банк, Үндэсний Статистикийн Хорооноос хоёр жил тутамд ядуурлын
          түвшинг тооцдог. 2018 онд гаргахад улсын хэмжээнд ядуурал 28.4,
          ядууралд ойрхон хүн ам 14.9 хувьтай байсан. 2020 оны статиситкийн
          боловсруулалт дээр бид яг одоо ажиллаж байна. 2020 он бол цар тахлын
          онцгой нөхцөл байдлын үе байсан. Энэ үед Засгийн газраас өрх, иргэнд
          олгож байгаа халамжийн бодлого их байлаа. Тиймээс бид халамжийг яаж
          ядуурлын түвшинтэйгээ уях вэ гээд ажиллаж байна. Тооцоолол дээр бид
          няхуур хандахгүй бол болохгүй. Ядуурлыг бид хэрэглээнд суурилсан
          аргаар тооцдог. Гэтэл төрөөс халамж өгөхөөр өрхийн орлого нэмэгдсэн.
          Ялангуяа эмзэг бүлэг буюу орлого багатай өрх дээр энэ нь илүү
          ажиглагдаж байна. Орлого багатай буюу 300 мянган төгрөгийн орлоготой
          өрх 66 хувийг эзэлж байна. Тиймээс өрхүүд халамж авч орлогоо нэмсэн
          байхад ядуурал буурлаа гэж зарлаж болохгүй. Төр халамжаа зогсооно шүү
          дээ. Дэлхийн банк энэ тооцооллыг үр дүнтэй хийх гээд бусад улсын
          туршлагыг судалж байна.
        </Text>
        <Text style={styles.textTitle}>
          Өрхийн орлогын судалгаанд нэлээд төвлөрчээ. Сүүлийн хоёр жил өрхийн
          орлогод ямар өөрчлөлт гарсан бэ?
        </Text>
        <Text style={styles.textStatus}>
          Өрхийн цалин, хөлсний орлого өмнөх оноос 15 орчим хувиар буурсан. Энэ
          нь мэдээж цар тахлын нөлөө. Эсрэгээрээ үүнийг тогтворжуулж байгаа зүйл
          нь халамж, тэтгэвэр, тэтгэмж байна. Бүр 70 орчим хувийн өсөлттэй. 2019
          оны эцэст нэг өрх дунджаар 229 мянган төгрөгийн халамж авч байсан бол
          2021 оны хоёрдугаар улиралд 460 мянган төгрөгийн халамж авч байх
          жишээтэй. Нөгөө талаас өрхийн бизнесийн орлого байна. Үүнийг бид хөдөө
          аж ахуйн болон хөдөө аж ахуйн бус гэж ангилдаг. Цар тахал эхлээд хил
          хаагдснаас үүдэн ноолуур хийгээд хөдөө аж ахуйн бүтээгдэхүүний үнэ
          унаснаар өрхүүдийн хөдөө аж ахуйн орлого унасан бол энэ жил буцаад
          сэргэж байна. Өнгөрсөн онд гэхэд ноолуурын ханш 40 орчим мянган төгрөг
          байсан бол энэ жил дунджаар 110 мянган төгрөг байна. Харин өрхийн
          хөдөө аж ахуйн бус орлого төдийлөн сайн сэргэхгүй байна. Ингээд том
          зургаар нь аваад үзэхээр өрх дээр ирж байгаа цалин хөлс болон
          бизнесийн орлого сэргэж амжаагүй байна. Эдгээрийг тогтворжуулж байгаа
          зүйл нь бол халамжийн бодлого.
        </Text>
        <Text style={styles.textTitle}>
          Цар тахал ийнхүү нөлөө үзүүлж байгаа ч халамж хөдөлмөрийн зах зээлд
          халгаатай гэдэг. Энэ талаар судалгаа, тооцоо бий юу?
        </Text>
        <Text style={styles.textStatus}>
          Эдийн засагт алдагдсан боломж гэдэг ойлголт байдаг. “Халамж авснаас
          ажил хийсэн нь өөрт минь хэр ашигтай вэ” гэдгийг ямар ч хүн харна.
          Цалин авдаг буюу нийгмийн даатгал төлдөг 680 орчим мянган хүний 70
          орчим хувь нь 1.3 саяас доош цалин авдаг. Тэгвэл нөгөө талаас нэг өрх
          дунджаар 460 мянган төгрөгийн халамж авч байна. Сард авдаг халамж,
          өрхийн орлого хоёрын зөрүү бага гарч байвал хүмүүс хөдөлмөр эрхлэх
          сонирхолгүй болно. Гэхдээ манайд энэ харьцангуй гайгүй. Үүнийг тоогоор
          баталъя. Манай улсад хөдөлмөрийн насны атлаа ажилгүй 877.5 мянган хүн
          байна. Эдгээрийн 232 мянга нь суралцдаг, 304 нь тэтгэврийн насныхан.
          Харин сурдаггүй, тэтгэвэр авдаггүй хэрнээ ажил хийдэггүй буюу “цэвэр”
          ажилгүйчүүд гэж нэрлэж болохоор 15 мянга гаруй хүн байгаа юм.
        </Text>
        <View style={{ flexDirection: "row", flex: 1, marginBottom: 20 }}>
          <View style={{ flex: 0.5, marginRight: 10 }}>
            <Text
              style={{ fontFamily: "Montserrat-light", textAlign: "center" }}
            >
              Орлого багатай буюу
            </Text>
            <Text
              style={{
                color: "#f15623",
                fontFamily: "Oswald-bold",
                fontSize: 30,
                textAlign: "center",
              }}
            >
              300
            </Text>
            <Text
              style={{ fontFamily: "Montserrat-light", textAlign: "center" }}
            >
              мянган төгрөгийн орлоготой өрх
            </Text>
          </View>
          <View style={{ flex: 0.5, marginLeft: 10, justifyContent: "center" }}>
            <Text
              style={{
                color: "#f15623",
                fontFamily: "Oswald-bold",
                fontSize: 30,
                textAlign: "center",
              }}
            >
              66%
            </Text>
            <Text
              style={{ fontFamily: "Montserrat-light", textAlign: "center" }}
            >
              хувийг эзэлж байна.
            </Text>
          </View>
        </View>
        <Image
          source={require("../../../assets/mag1/batdavaa2.jpg")}
          style={{ width: windowWidth / 1.1, height: 200 }}
        />
        <Text style={[styles.textTitle, { marginTop: 20 }]}>
          Ойролцоо эдийн засагтай улс орнуудтай харьцуулахад манай хөдөлмөрийн
          хөлс ямар түвшинд байна вэ?
        </Text>
        <Text style={styles.textStatus}>
          Мэдээж бага л даа. Ажиллах хүчний оролцооны хувьд ч тэр. Ажиллах
          хүчний оролцооны түвшин дэлхийд дунджаар 60 орчим хувьтай байдаг.
          Манайхтай ижилхэн дунджаас доогуур орлоготой улс ажиллах хүчний
          оролцоо арай их буюу 64 хувь байдаг. Тэгэхээр манайд ажиллах хүчний
          оролцоо арай бага байна. Дундаж цалингийн тухайд улсын хэмжээнд 1.3
          сая төгрөг байдаг. Харин үйлчилгээний салбарынхан хамгийн бага буюу
          700 мянган төгрөгийн цалинтай. Хамгийн өндөр нь уул уурхай болон олон
          улсын байгууллага гурван сая төгрөгийн цалин авдаг. Ингээд харахаар
          700 мянгаас гурван саяыг дундажлахаар 1.3 сая болж байгаа юм. Гэтэл
          ажиллагсдын 50 гаруй хувь нь үйлчилгээний салбарт ажилладаг. Тэгээд
          хүмүүс ҮСХ-г дундаж цалинг буруу гаргалаа гэдэг. Мөн бид медиан цалин
          гэж боддог. Түүнийг нийгмийн даатгалын шимтгэл төлж байгаа хүмүүсийг
          ихээс нь бага руу нь жагсаахаар 900 мянган төгрөг гараад байгаа юм.
        </Text>
        <Text style={styles.textTitle}>
          Эмэгтэйчүүдийн манлайллыг сүүлийн үед дэлхийн улс орнууд хөндөх
          болсон. Манай улсад удирдах албан тушаалд ажиллаж байгаа эмэгтэйчүүд
          нэмэгдэж байна уу. Судалгаа хэрхэн гарч байна вэ?
        </Text>
        <Text style={styles.textStatus}>
          Эмэгтэйчүүдийн удирдах албан тушаалд орж байгаа манлайллыг ҮСХ 2009
          оноос хойш гаргасан. 2009 онд нийт удирдах албан тушаалын 40.7 хувь нь
          эмэгтэйчүүд байсан бол 2019 онд 43 хувь болсон. 2020 оноос эхлэн
          Иргэдийн төлөөлөгчдийн хурлын төлөөлөгчид эмэгтэйчүүдийн эзлэх хувийг
          гаргадаг болсон. Үүнээс үзэхэд ИТХТ-д оролцож байгаа эмэгтэйчүүд 30
          гаруй хувьтай байдаг. Гэхдээ тэргүүлэгчдийн дарга болох ч юм уу, албан
          тушаалын шат ахих тусам эмэгтэйүүдийн оролцоо буураад байна. Манай
          улсад 7300 орчим Иргэдийн хурлын төлөөлөгч байна. Түүний 2000 нь
          эмэгтэй. Гэхдээ ИТХ-ын тэргүүлэгчдийн дарга 338 хүн байгаагийн 50 нь
          эмэгтэй. Эмэгтэйчүүд хүүхэд төрүүлэх, гэрийн ажил гэх мэт арын ажил нь
          их тул карьер хөөх боломж хомс байдагтай энэ нь холбоотой. Хүүхэд
          гаргалаа гэхэд хамгийн багадаа хоёр жил ажлаа орхиж, хүүхдээ анхаарах
          хэрэг гарна гэх мэт зүйлээс шалтгаалаад эрэгтэйчүүдтэй хөдөлмөрийн зах
          зээл дээр өрсөлдөх боломж бага.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#f15623",
                fontSize: 30,
              }}
            >
              7,300
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 20,
                textAlign: "center",
                fontFamily: "Montserrat-light",
              }}
            >
              орчим Иргэдийн хурлын төлөөлөгч байгаагийн
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#f15623",
                fontSize: 30,
              }}
            >
              2,000
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 20,
                textAlign: "center",
                fontFamily: "Montserrat-light",
              }}
            >
              эмэгтэй
            </Text>
          </View>
        </View>
        <Text style={styles.textTitle}>
          Үндэсний статистикийн хороо үйл ажиллагаандаа их өгөгдөл, хиймэл оюун
          ухаан ашиглаж байгаа гэсэн. Энэ талаар тодруулахгүй юу?
        </Text>
        <Text style={styles.textStatus}>
          Аливаа улсын статистикийн хороо хоёр төрлийн мэдээлэлд тулгуурладаг.
          Албан ёсны статистик захиргааны мэдээ гэж бий. Энэ нь төрийн
          байгууллагаас авсан мэдээллийг нэгтгээд тодорхой арга, аргачлалын
          дагуу батлаад гаргахыг хэлдэг. ҮСХ өөрсдөө ажиллах хүч, өрхийн нийгэм,
          эдийн засгийн судалгаа хийдэг. Энэ мэдээллүүд нь өгөгдлийн хувьд
          нэгтгэсэн мэдээлэл байгаа. Харин орчин үед статистик үзүүлэлтийг аль
          болох нарийн дэлгэрэнгүй харж, бодлогын шийдвэр гаргах шаардлага
          гараад байна. Одоогийн бидний нэгтгээд байгаа мэдээлэл бол цаг
          хугацааны хувьд хоцрогдож, мэдээлэл нь нарийн задарч чадахгүй байна.
          Мөн мэдээллийг хооронд нь холбож болохгүй байна. Жишээлбэл, 30-35
          насныхны хэдэн хувь нь нийгмийн даатгал төлдөг вэ гэдгийг бид
          гаргахаас биш тэдний өрхийн орлого, банкны зээл нь хэд вэ гэдгийг
          холбож чадахгүй байна. Байршил, ажилладаг салбар гэх мэт нарийн холбох
          ямар ч боломжгүй. Харин статистикийн байгууллагуудын хөгжлийн
          дараагийн шат бол их өгөгдөл юм. Тэр дундаа төрийн байгууллагуудын
          мэдээллийг үүсгэх замаар иргэн, аж ахуй суурьтай эдийн засаг, нийгмийн
          үзүүлэлтийг илүү олон хэмжээст, илүү задаргаатай, давтамжийн хувьд
          хурдтайгаар харах нь чухал. Цаашдаа УИХ, Засгийн газар, бизнес
          эрхлэгчдийн гаргах шийдвэр, хөрөнгө оруулалтад ашиглахад үр дүнтэй
          болно. Зөвхөн манай улс ч санаачлаад байгаа юм биш. Бусад улсын
          статистикийн байгууллага ч үүнийг хэрэгжүүлж эхлээд байгаа. Жишээлбэл,
          Шинэ Зеланд, БНСУ хэрэгжүүлсэн. Мөн Швейцарийн статистикийн
          байгууллага шилжинэ гэдгээ зарласан. НҮБ-ын Статистикийн комисс ч энэ
          талын судалгаа, статистик гаргах арга зүйг хэлэлцүүлэг, хурал,
          бодлогын баримт бичигтээ илүү ашиглаж байгаа. Бид бол төр, бизнес
          эрхлэгчийг нотолгоонд суурилсан зөв шийдвэр гаргах, хөрөнгө оруулалт
          хийхэд нь шаардлагатай мэдээлэл өгөхийн тулд зайлшгүй ийшээ орох
          хэрэгтэй. Тиймээс УИХ-ын даргын санаачилгаар энэ их өгөгдлийн төслийг
          хэрэгжүүлэхээр ажиллаж байна. Эхлээд бид өгөгдлийн шинжлэлээ
          хөгжүүлчихээд хиймэл оюун ухаан руу шилжинэ.
        </Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <ImageBackground
          source={require("../../../assets/mag1/ajil.jpg")}
          style={{ width: windowWidth / 1.1, height: 300 }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 20,
              color: "white",
              textAlign: "right",
              marginTop: 250,
              marginRight: 20,
            }}
          >
            ХӨДӨЛМӨР ЭРХЭЛЭЛТИЙН СУДАЛГАА
          </Text>
        </ImageBackground>

        <View style={{ flexDirection: "row", flex: 1, marginTop: 20 }}>
          <View style={{ flex: 0.5, marginRight: 5 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-bold",
                textAlign: "center",
              }}
            >
              Хөдөлмөр эрхлэлтийн түвшин
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Montserrat-medium",
                marginTop: 20,
              }}
            >
              Нийт
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Oswald-bold",
                textAlign: "center",
                color: "#f15623",
              }}
            >
              56.4%
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <MaterialCommunityIcons
                  name="human-male"
                  size={80}
                  color="black"
                />
                <Text
                  style={{
                    fontFamily: "Montserrat-medium",
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  Эрэгтэй
                </Text>
                <Text
                  style={{
                    fontFamily: "Oswald-bold",
                    color: "#ffc20e",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  61.9%
                </Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="human-female"
                  size={80}
                  color="black"
                />
                <Text
                  style={{
                    fontFamily: "Montserrat-medium",
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  Эмэгтэй
                </Text>
                <Text
                  style={{
                    fontFamily: "Oswald-bold",
                    color: "#00aeef",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  48.3%
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.5, marginLeft: 5 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-bold",
                textAlign: "center",
              }}
            >
              Ажилгүйдлийн түвшин
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Montserrat-medium",
                marginTop: 20,
              }}
            >
              Нийт
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Oswald-bold",
                textAlign: "center",
                color: "#f15623",
              }}
            >
              8.4%
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <MaterialCommunityIcons
                  name="human-male"
                  size={80}
                  color="black"
                />
                <Text
                  style={{
                    fontFamily: "Montserrat-medium",
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  Эрэгтэй
                </Text>
                <Text
                  style={{
                    fontFamily: "Oswald-bold",
                    color: "#ffc20e",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  8.2%
                </Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="human-female"
                  size={80}
                  color="black"
                />
                <Text
                  style={{
                    fontFamily: "Montserrat-medium",
                    textAlign: "center",
                    marginVertical: 5,
                  }}
                >
                  Эмэгтэй
                </Text>
                <Text
                  style={{
                    fontFamily: "Oswald-bold",
                    color: "#00aeef",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  8.6%
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text
              style={{ fontFamily: "Montserrat-bold", fontSize: 16, flex: 0.6 }}
            >
              Итгэл алдарсан ажил хайгчид*
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-regular",
                fontSize: 16,
                flex: 0.4,
              }}
            >
              /2021.II улирал/
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              fontSize: 30,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Нийт
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-bold",
              fontSize: 50,
              textAlign: "center",
            }}
          >
            18,345
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <MaterialCommunityIcons name="human-male" size={80} color="black" />

            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Эрэгтэй{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Oswald-bold",
                  fontSize: 40,
                  textAlign: "center",
                  color: "#ffc20e",
                }}
              >
                7,924
              </Text>
            </View>
            <MaterialCommunityIcons
              name="human-female"
              size={80}
              color="black"
            />
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Эрэгтэй{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Oswald-bold",
                  fontSize: 40,
                  textAlign: "center",
                  color: "#00aeef",
                }}
              >
                10,121
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              textAlign: "justify",
            }}
          >
            *Ажил хийх боломжтой ч хөдөлмөрийн зах зээлтэй холбоотой ажил
            хайгаагүй байгаа, ажлын байр хайж олох найдвараа алдсан хөдөлмөрийн
            насны хүн ам.
          </Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1, marginTop: 20 }}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.staticText}>Хөдөлмөрийн насны хүн</Text>
            <Text style={styles.staticInfo}>2.1сая</Text>
            <Text style={styles.staticText}>Бүрэн бус хөдөлмөр эрхлэлт </Text>
            <Text style={styles.staticInfo}>5.1мян</Text>
            <Text style={styles.staticText}>Ажиллах хүчнээс гадуурх хүн </Text>
            <Text style={styles.staticInfo}>877.5мян</Text>
          </View>
          <View style={{ flex: 0.5, marginTop: 30 }}>
            <Text style={styles.staticText}>Хөдөлмөрийн насны хүн</Text>
            <Text style={styles.staticInfo}>2.1сая</Text>
            <Text style={styles.staticText}>Бүрэн бус хөдөлмөр эрхлэлт </Text>
            <Text style={styles.staticInfo}>5.1мян</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 0.4 }}>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 14,
              }}
            >
              Ажилгүйдлийн түвшин /нас, хүйсээр/
            </Text>
            <Text style={{ fontFamily: "Montserrat-medium", marginTop: 10 }}>
              Насны
            </Text>
            <Text style={{ fontFamily: "Montserrat-medium" }}>ангилал</Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 16,
                marginVertical: 10,
              }}
            >
              15-19 нас
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                marginVertical: 10,
              }}
            >
              20-24 нас
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                marginVertical: 10,
              }}
            >
              25-29 нас
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                marginVertical: 10,
              }}
            >
              30-34 нас
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                marginVertical: 10,
              }}
            >
              35-39 нас
            </Text>
          </View>
          <View style={{ flex: 0.3 }}>
            <MaterialCommunityIcons
              name="human-female"
              size={80}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ textAlign: "center", fontFamily: "Montserrat-medium" }}
            >
              Эмэгтэй
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              26.8%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              21.2%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              14.8%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              9.6%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#00aeef",
                fontSize: 25,
              }}
            >
              3.8%
            </Text>
          </View>
          <View style={{ flex: 0.3 }}>
            <MaterialCommunityIcons
              name="human-male"
              size={80}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ textAlign: "center", fontFamily: "Montserrat-medium" }}
            >
              Эрэгтэй
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              14.5%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              14.5%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              10.6%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              6.8%
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Oswald-bold",
                color: "#ffc20e",
                fontSize: 25,
              }}
            >
              6.8%
            </Text>
          </View>
        </View>
        <Image
          source={require("../../../assets/mag1/tse.png")}
          style={{ width: windowWidth / 1.1, height: 150 }}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

export default Page12;

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
  staticText: {
    fontFamily: "Montserrat-medium",
    marginRight: 10,
    textAlign: "center",
  },
  staticInfo: {
    color: "#f15623",
    fontFamily: "Oswald-bold",
    textAlign: "center",
    fontSize: 25,
  },
});
