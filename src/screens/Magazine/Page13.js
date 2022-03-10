import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page13 = () => {
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../../assets/mag1/backgroundImage.jpg")}
        style={{
          width: windowWidth,
          height: windowHeight,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            textAlign: "center",
            color: "white",
            marginTop: 80,
            fontSize: 20,
            flex: 1,
          }}
        >
          ТЕХНОЛОГИ
        </Text>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 50,
            }}
          >
            2022
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 35,
            }}
          >
            ОНД ШИНЭЭР ГАРЧ ИРЖ БУЙ
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#55b8ae",
              alignSelf: "center",
              width: 60,
              marginVertical: 20,
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",

              fontSize: 35,
            }}
          >
            {/* шилдэг 10 технологи{" "} */}
            ШИЛДЭГ
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",

              fontSize: 50,
            }}
          >
            10
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",

              fontSize: 35,
            }}
          >
            ТЕХНОЛОГИ
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>64-66 | </Text>
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
          }}
        >
          <Text
            style={{ fontSize: 50, fontFamily: "Playfair-regular", bottom: 10 }}
          >
            Д
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Montserrat-regular",
              marginHorizontal: 5,
              top: 5,
            }}
          >
            элхийн Эдийн Засгийн Чуулганаас оны шилдэг, шинэ технологиудыг 10
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Montserrat-regular",
            marginHorizontal: 5,
            bottom: 15,
          }}
        >
          дахь жилдээ танилцуулж байна. өдгөө уур амьсгалын өөрчлөлтийг
          шийдвэрлэх, эрчим хүчний хэрэглээг бууруулах, хүнсний тогтвортой
          үйлдвэрлэл, хүн төрөлхтний эрүүл мэндийг дээшлүүлэх гэсэн томоохон
          сорилтууд тулгараад байгаа билээ. Тиймээс ДЭЗЧ эдгээр том асуудлыг
          шийдвэрлэхэд түлхэц болохуйц шилдэг 10 технологийг энэ удаа нэрлээд
          буй юм.
        </Text>
        <Text style={[styles.textTitle, { marginVertical: 20 }]}>
          1. Нүүрстөрөгчийг бууруулах нь
        </Text>
        <Image
          source={require("../../../assets/mag1/techno1.png")}
          style={{ width: windowWidth / 1.1, alignSelf: "center", height: 300 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
            marginTop: 15,
          }}
        >
          Уур амьсгалын асуудлыг шийдвэрлэх талаарх өргөн хүрээтэй амлалтууд
          шинэ технологиудыг илүү ихээр "төрүүлнэ".
        </Text>
        <Text style={styles.textStatus}>
          Улс орнууд хүлэмжийн хийн ялгарлаа бууруулахын тулд бүх хүчин чадлаа
          дайчлахад бэлэн болсон. Хүлэмжийн хийн ялгарлын хоёр дахь том
          үйлдвэрлэгч болох АНУ л гэхэд 2030 он гэхэд нүүрстөрөгчийн хэмжээг
          хоёр дахин бууруулж, 2005 оны түвшинд хүргэх зорилт тавьсан. Их
          Британи 1990 оны түвшнээсээ 68 хувь бууруулахаа мэдэгдсэн. Энэ
          мэтчилэн Парисын хэлэлцээрийн хүрээнд амласан амлалтаа биелүүлэх улс
          орнуудын чармайлтад технологийн дэвшил хамгийн чухал үүрэгтэй болж.
          Үүний тулд машин унах, хоол хийхээс авахуулаад өдөр тутмын амьдралын
          алхам бүрийг нүүрстөрөгч багатай, бүр огт ялгаруулдаггүй технологиор
          шийдэж, орлуулах шаардлага байгаа. Иймд Засгийн газрууд энэ чиглэлийн
          хөрөнгө оруулалтыг нэмэгдүүлэх хэрэгцээ үүсэж байгааг онцолжээ.
        </Text>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image
            source={require("../../../assets/mag1/techno3.jpg")}
            style={{ width: windowWidth / 2.2, height: 400 }}
          />
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text style={styles.textTitle}>
              2. Үр тариа өөрөө бордоогоо “үйлдвэрлэдэг” байвал ямар вэ?
            </Text>
            <Text style={styles.textStatus}>
              Газар тариалангийн үйлдвэрлэлийг нэмэгдүүлэхийн тулд өнөөдөр
              дэлхий дээр жил бүр 110 сая гаруй тонн азотын бордоо ашиглаж буй.
            </Text>
            <Text style={styles.textStatus}>
              Хэрэв үр тариа буурцагт ургамал шиг азотыг аммиак хэлбэрт
              "хөрвүүлэх" замаар газар тариалан өөрөө азотыг тогтоон барьж
              чадвал яах вэ?
            </Text>
          </View>
        </View>
        <Text style={styles.textStatus}>
          Шинээр гарч ирж буй шилдэг технологиудын жагсаалтад багтахын тулд
          судлаачид бусад үр тариаг эрдэнэ шиш шиг болгохыг зорьж байна. Шошны
          төрлийн ургамлын бордоо “үйлдвэрлэх” байгалийн чанарыг буурцагт
          ургамалд "хуулбарлахдаа" нянгийн хоорондох симбиотик молекулын
          холбоосыг ашиглахаар судлаачид ажиллаж байгаа юм.
        </Text>
        <Text style={[styles.textTitle, { marginBottom: 15 }]}>
          3. Амьсгалаар нь өвчнийг оношлох нь
        </Text>
        <Image
          source={require("../../../assets/mag1/techno5.png")}
          style={{ width: windowWidth / 1.1, alignSelf: "center", height: 200 }}
        />
        <Text style={styles.textStatus}>
          Өвчтөнүүдийг шинжилж, оношлох нь удахгүй амьсгаа аваад гаргахтай адил
          хялбархан болно. Амьсгал мэдрэгч шинэ төхөөрөмжийн тусламжтайгаар,
          хүний амьсгалд агуулагддаг 800 гаруй төрлийн найрлагыг ашиглан өвчнийг
          оношилдог болно. Тухайлбал, хүний амьсгал дахь ацетон өсөх нь чихрийн
          шижин өвчнийг илтгэдэг.
        </Text>
        <Text style={styles.textTitle}>
          4. Эмийн бүтээгдэхүүнийг эрэлтэд нийцүүлэх нь
        </Text>
        <Text style={styles.textStatus}>
          Өнөөдөр эмүүдийг ихэвчлэн олон үе шатаар, массаар нь үйлдвэрлэдэг
          бөгөөд үйлдвэрлэлийн зарим дамжлага дэлхий даяар тархсан байдаг.
          Үүнтэй холбоотойгоор маш их хэмжээний түүхий эд ордгоос гадна
          үйлдвэрлэл бүрэн дуусахад хэдэн сарын хугацаа шаарддаг тул тогтвортой
          байдал, найдвартай нийлүүлэлтэд зарим талаар бэрхшээл үүсдэг.
        </Text>
        <Image
          source={require("../../../assets/mag1/techno6.jpg")}
          style={{ width: windowWidth / 1.1, height: 200 }}
        />
        <Text style={styles.textStatus}>
          Микро шингэн болон эрэлт хэрэгцээнд нийцсэн эмийн үйлдвэрлэлийн дэвшил
          нь өсөн нэмэгдэж буй хэрэгцээг бага үйлдвэрлэлээр хангах боломжийг
          олгож байна. Товчхондоо алслагдсан байршилд эсвэл хээрийн эмнэлгүүдэд
          эмийг зөөврийн төхөөрөмжөөр хүргэх ба тунг нь өвчтөн бүрд тохируулан
          хийх боломжтой болсон. Мөн энэ нь өртгийг бууруулж байгаагаараа давуу
          талтай.
        </Text>
        <Text style={styles.textTitle}>5. Утасгүй дохионоос эрчим хүч </Text>
        <Image
          source={require("../../../assets/mag1/techno7.jpg")}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>
          Юмсын интернэт(IoT)-ийн ажиллагааны зарчим нь интернэт холболт
          ашигладаг олон тэрбум электрон төхөөрөмжөөс бүрдэх тал бий. IoT
          мэдрэгч нь бидний өдөр тутмын амьдралд чухал ач холбогдолтой өгөгдлийг
          мэдээлдэг, маш бага чадалтай төхөөрөмж. Батарей ашиглалтын хугацаа
          хязгаарлагдмал тул орон нутгийн орчинд цэнэглэхэд хүндрэлтэй болдог.
        </Text>
        <Text style={styles.textStatus}>
          Тэгвэл 5G технологи нь хангалттай хүчтэй утасгүй дохиог өгч байгаа тул
          IoT мэдрэгч дэх жижиг антенн нь ийм дохионоос эрчим хүч "цуглуулах”
          боломжтой болсон.
        </Text>
        <Text style={styles.textTitle}>
          6. Илүү урт, эрүүл амьдралыг инженерчлэх нь{" "}
        </Text>
        <Image
          source={require("../../../assets/mag1/techno8.jpeg")}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>
          ДЭМБ-ын мэдээлснээр 2015-2050 оны хооронд 60 ба түүнээс дээш настай
          дэлхийн хүн ам 12 хувиас 22 хувь болж, хоёр дахин өсөх тооцоолол бий.
          Хөгшрөлт нь хорт хавдар, хоёрдугаар хэлбэрийн чихрийн шижин, сэтгэцийн
          хомсдол, зүрхний өвчин зэрэг цочмог болон архаг өвчинтэй холбогддог.
        </Text>
        <Text style={styles.textStatus}>
          Судлаачид хүнийг зөвхөн урт наслах төдийгүй эрүүлээр удаан амьдрахад
          тус болох молекулын зарчмын талаар эртнээс ойлголттой болсон. Омик
          технологи (жишээлбэл, бүх генийн үйл ажиллагааны концентрацийг эсвэл
          эс дэх бүх уургийн концентрацийг нэгэн зэрэг хэмжих боломжтой) болон
          эпигенетикийн ойлголтыг ашиглан судлаачид идэвхтэй эмчилгээний
          зорилтуудыг санал болгодог өвчний гол таамаглал болох биомаркеруудыг
          тодорхойлох боломжтой.
        </Text>
        <Text style={styles.textTitle}>7. Аммиак ногоон өнгөтэй болох нь</Text>
        <Image
          source={require("../../../assets/mag1/techno9.jpg")}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>
          Дэлхийн хүн амыг хүнсээр хангахын тулд их хэмжээний үйлдвэрлэлд
          аммиакийн бордоо ашигладаг. Аммиакийн бордооны нийлэгжилт буюу
          Хабер-Бошийн процесс гэж нэрлэгддэг энэхүү ажиллагаа нь эрчим хүч
          болон маш их хэмжээний устөрөгч шаарддаг.
        </Text>
        <Text style={styles.textStatus}>
          Өнөөдөр устөрөгчийн ихэнх хэсгийг электролиз, усны молекулуудыг
          цахилгаан ашиглан задлах, эсвэл нүүрсустөрөгчийг өндөр температурт
          хагалах замаар үйлдвэрлэдэг.
        </Text>
        <Text style={styles.textStatus}>
          Энэ хоёр аргад шаардагдах эрчим хүч аль алиных нь хувьд хүлэмжийн хийг
          ихээр ялгаруулдаг. Сэргээгдэх эрчим хүч улам бүр түгээмэл болж байгаа
          тул устөрөгчийн "ногоон" хувилбарыг хүлэмжийн хий ялгаруулахгүйгээр
          гарган авах боломж бүрдсэн. Агаар мандлын илүүдэл нүүрстөрөгчийг
          арилгахаас гадна ногоон устөрөгч нь чулуужсан түлшийг эх үүсвэр болгон
          ашиглахад агуулагдах бохирдуулагч химийн бодис агуулаагүй зэргээрээ
          цэвэр технологид орж буй юм.
        </Text>
        <Text style={styles.textTitle}>
          8. Утасгүй ажиллах биомаркерын төхөөрөмжүүд{" "}
        </Text>
        <Image
          source={require("../../../assets/mag1/techno10.jpg")}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>
          Зүүнд дуртай хүн гэж байхгүй. Гэвч нийтлэг тохиолддог цочмог болон
          архаг эмгэг, хорт хавдар, чихрийн шижин болон бусад өвчний явцыг
          тодорхойлоход чухал ач холбогдол бүхий биомаркеруудыг хянахын тулд их,
          бага хэмжээгээр цусны дээж авах шаардлагатай байдаг.
        </Text>
        <Text style={styles.textStatus}>
          Бага чадлын утасгүй (wireless) холбооны дэвшил, түүнчлэн оптик болон
          электрон мэдрэгчийг ашигладаг химийн мэдрэгч бүхий шинэ техникүүд нь
          эрүүл мэндийн чухал мэдээллийг тасралтгүй бөгөөд аюулгүй хянах
          боломжийг олгох болов.
        </Text>
        <Text style={styles.textStatus}>
          100 гаруй компани дэлхийн хэмжээнд тархаж буй чихрийн шижин өвчнийг
          голлон төрөл бүрийн хэрэглээнд утасгүй биомаркер мэдрэгч төхөөрөмж
          суурилуулсан ба хөгжүүлж байна. Утасгүй холболт нь алслагдсан
          эмнэлгийн мэргэжилтэнд шаардлагатай үед хэрэгтэй мэдээллийг шууд
          ашиглах боломжтой болгодог.
        </Text>
        <Text style={styles.textTitle}>
          9. Орон нутгийн материал ашиглан байшин хэвлэх нь
        </Text>
        <Image
          source={require("../../../assets/mag1/techno11.jpg")}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>
          Том хэмжээний 3D принтер ашиглан байшин барих нь АНУ болон бусад өндөр
          хөгжилтэй орнуудад хязгаарлагдмал тархалттай байгааг харуулж байна.
        </Text>
        <Text style={styles.textStatus}>
          Дэд бүтэц хязгаарламгдмал байдлаас үүдэн бараа материал тээвэрлэж
          хүргэхэд хүндрэлтэй байдаг хөгжиж буй орнуудад 3D принтер ашиглан
          хийсэн сүүлийн үеийн үзүүлэнгүүдийг хүргэхээс илүүтэй дотоодоос
          гаралтай материал, шавар, элс, орон нутгийн утас зэргийг ашигласнаар
          тээвэрлэлтийг 95 орчим хувь бууруулах боломжтой.
        </Text>
        <Text style={styles.textStatus}>
          Энэхүү шинээр гарч ирж буй технологи нь орон сууцны хэрэгцээ маш хүнд,
          тээврийн сүлжээ байхгүй алслагдсан бүс нутгуудыг бат бөх орон байраар
          хангах боломжийг бүрдүүлнэ. Үр дүн нь хойно хоцорсон орнуудад
          тоглоомын дүрмийг өөрчлөх юм.
        </Text>
        <Text style={styles.textTitle}>
          10. Дэлхийг сансар огторгуй холбодог
        </Text>
        <Image
          source={require("../../../assets/mag1/techno12.jpg")}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textStatus}>
          Юмсын интернэт(IoT)-ийн мэдрэгчээр дамжуулан цаг агаар, хөрсний
          нөхцөл, чийгийн түвшин, газар тариалангийн эрүүл байдал, нийгмийн үйл
          ажиллагаа болон үнэ цэнэтэй бусад тоо томшгүй олон чухал багц
          мэдээллийг бүртгэж, мэдээлэх боломжтой.
        </Text>
        <Text style={styles.textStatus}>
          Сүүлийн үед дэлхийн өнцөг булан бүрээс ийм мэдээллийг цуглуулж,
          боловсруулах, төвлөрүүлэх чадвартай, хямд өртөг бүхий тоо томшгүй
          бичил хиймэл дагуулууд манай гарагийн нам дор тойрог замд гарч ирснээр
          Юмсын интернэт (IoT) нь уламжлалт интернэтгүй, урьд өмнө хэзээ ч хүрч
          байгаагүй хөгжиж буй бүс нутгийг хамарсан, дэлхийн хэмжээний ойлголтыг
          бий болгоно.
        </Text>
        <Text style={styles.textStatus}>
          Эрчим хүч багатай аюулгүй мэдээллийн холболт, богино хугацаанд дэлхийг
          тойрон эргэдэг хиймэл дагуулын асуудал сорилт хэвээр байгаа боловч
          тогтвортой ахиц дэвшлийн үр дүнд ойрын 3-5 жилдээ дэлхий даяар энэ
          боломж бий болно гэсэн хүлээлттэй байна.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Page13;

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
