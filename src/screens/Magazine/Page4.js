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

const Page4 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* ariunzaya zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight, flex: 1 }}
        resizeMode="cover"
        source={require("../../../assets/mag1/ariunzayap1.jpg")}
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
            ОНЦЛОХ ЗОЧИН
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
            Xөдөлмөрийн зах зээлийн өнөөгийн нөхцөл болон ирээдүйг угтан хийж
            буй шинэчлэлийн талаар Хөдөлмөр, нийгмийн хамгааллын сайд
            А.Ариунзаяатай ярилцлаа.
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
          Хөдөлмөр, нийгмийн хамгааллын сайд
        </Text>
        <Text
          style={{
            color: "#55b8ae",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          А.АРИУНЗАЯА
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
          Эрэлт нь ханасан мэргэжлээр олон залуучууд бэлтгэгдэж байна
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
            }}
          >
            онгол Улсын бүртгэлтэй ажилгүй иргэдийн 30% нь дээд
          </Text>
        </View>
        <Text
          style={{ fontSize: 18, fontFamily: "Montserrat-bold", bottom: 20 }}
        >
          боловсролтой байгаа нь манай улсын хөдөлмөрийн зах зээл хэрхэн
          гажуудсаныг илтгэж байгаа үзүүлэлт болов уу. Хөдөлмөрийн зах зээлийн
          энэ том зааг үүссэн шалтгаан нь юу вэ?
        </Text>

        <Text style={{ fontSize: 16, fontFamily: "Montserrat-regular" }}>
          Тийм ээ, манай улсад 2021 оны II улирлын байдлаар нийт 15.5 мянган
          бүртгэлтэй ажилгүй хүн байгаагийн 29.7 хувь нь их, дээд сургууль
          төгссөн хүмүүс байна. Харин 58.5 хувь нь бүрэн дунд болон түүнээс доош
          боловсролтой, 11.7 хувь нь техникийн болон мэргэжлийн түвшний
          боловсролтой хүн байна.
        </Text>
        <Text style={styles.textStatus}>
          Зах зээл өндөр хөгжсөн орнуудын хувьд ажилгүй иргэдийн дийлэнх олонх
          нь боловсролын түвшин доогуур байх нь түгээмэл байдаг. Харин манайд
          ажилгүй иргэдийн олонх нь дээд боловсролтой байгаа нь:
        </Text>
        <Text style={styles.textStatus}>
          Нэгдүгээрт, мэргэжлийн ажилтан хүний эрэлт дээд боловсролтой хүнээс
          илүү байгаатай
        </Text>
        <Text style={styles.textStatus}>
          Хоёрдугаарт, хөдөлмөрийн зах зээлийн ирээдүйн эрэлтэд нийцүүлж ажиллах
          хүчнийг бэлтгэх бодлого хангалтгүй байгаатай холбоотой.
        </Text>
        <Text style={styles.textStatus}>
          Эрэлт нь ханасан мэргэжлээр олон залуучууд бэлтгэгдэж байгаа нь дээд
          боловсролтой ажилгүйчүүдийн тоо өсөхөд нөлөөлж байна.
        </Text>
        <Text style={styles.textTitle}>
          Энэ асуудлыг сүүлийн жилүүдэд ярьсаар ирсэн. Үүнийг өөрчлөх талаар яам
          ямар шинэчлэл хийж байна вэ?
        </Text>
        <Text style={styles.textStatus}>
          -Ер нь хөдөлмөрийн асуудал эрхэлсэн яам хөдөлмөрийн зах зээлийн эрэлт,
          ирээдүйд ямар байхыг тодорхойлж, боловсрол, сургалтын асуудал эрхэлсэн
          яам, сургуулиудад захиалга өгдөг. Харин боловсролын яам, сургуулиуд
          орчин үеийн эрэлт хэрэгцээ, техник тоног төхөөрөмжийн үсрэнгүй хөгжилд
          нийцсэн сургалтын хөтөлбөр, агуулгыг боловсруулж, ажиллах хүчийг
          бэлтгэдэг байх ёстой юм.
        </Text>
        <Text style={styles.textStatus}>
          Энэ утгаараа манай яам залуучуудын мэргэжил сонголтыг зөв чиглүүлэх,
          мэргэжлээ зөв сонгоход шаардагдах судалгаа, мэдээллээр хангах тал дээр
          хичээн ажиллаж байгаа. Тухайлбал, бид иргэд, залуучуудын ажил,
          мэргэж­лээ зөв сонгоход шаардагдах мэдлэг, мэдээллийг олгоход чиглэсэн
          судалгааны ажлуудыг яамны дэргэдэх судалгааны институтээрээ хийлгэж,
          олон нийтэд түгээн ажилладаг. Энэ хүрээнд “Хөдөлмөрийн зах зээлийн
          эрэлтийн барометрийн судалгаа”, “Ажил олгогчийн эрэлт, хэрэгцээний
          судалгаа, “Цалин хөлсний бүтцийн судалгаа”, “Төгсөгчдийн хөдөлмөр
          эрхлэлтийн судалгаа” гэх мэт ажил, мэргэжил, ажил олгогчтой холбоотой
          мэдээлэл бүхий судалгаануудыг хийж байна. Цаашид хөдөлмөрийн зах
          зээлийн урт, дунд хугацааны эрэлтийг салбар бүрээр тодорхойлж, мэдээ,
          мэдээллийг нийтэд түгээх болно. Энэ чиглэлээр холбогдох аргачлалыг
          хөгжүүлэн ажиллаж байгаа.
        </Text>
        <Text style={styles.textStatus}>
          Түүнчлэн манай яамнаас хөдөлмөр эрхлэлтийг дэмжих бодлогыг төлөвлөх
          динамик загварыг боловсруулж, ашиглаж эхэлсэн. Энэ динамик загвар нь
          бодлогын аливаа шийдвэрийн үр дүн, нөлөөллийг түүнтэй холбогдох бүхий
          л дата, мэдээллийн тусламжтайгаар урьдчилан тооцоолох загвар бөгөөд
          хөдөлмөр эрхлэлтийг дэмжих бодлогын шийдвэрийг алдаа багатайгаар
          гаргаж, хэрэгжүүлэхэд чухал үүрэг гүйцэтгэнэ гэж бид үзэж байна. Мөн
          энэ загвараар сүүлийн 10-20 жилийн тоон мэдээлэл, датаг үндэслэн
          хөдөлмөрийн зах зээлийн эрэлтийг урт, дунд, богино хугацаанд нь гаргах
          боломжтой болно.
        </Text>
        <Text style={styles.textStatus}>
          Мэдээж эдгээр урт, дунд хугацааны төсөөлөл тооцооллууд 100 хувь үнэн
          байх боломжгүй ч бид аль болох бодит төсөөлөлтэй байж, түүнд чиглүүлж
          ажиллах хүчнээ бэлтгэх шаардлагатай.
        </Text>

        <Image
          source={require("../../../assets/mag1/ariunzayap2.jpg")}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-semibold-italic",
            marginVertical: 15,
          }}
        >
          Цаашид хөдөлмөрийн зах зээлийн урт, дунд хугацааны эрэлтийг салбар
          бүрээр тодорхойлж, мэдээ, мэдээллийг нийтэд түгээх болно.
        </Text>
        <View style={{ borderWidth: 2, borderColor: "#55b8ae" }} />
        <Text style={styles.textTitle}>
          Манай улсын хөдөлмөрийн зах зээлийн бодит хэрэгцээ шаардлага нь ямар
          дүр зурагтай байгаа вэ?
        </Text>
        <Text style={styles.textStatus}>
          Хэдийгээр Монгол Улс бусад улс оронтой харьцуулахад хүн ам цөөтэй
          боловч байгалийн баялаг ихтэй, газар нутаг томтой учраас ирээдүйд
          манай улсад том эдийн засаг, том зах зээл бий болох бүрэн боломжтой
          гэж хардаг. Энэ үед хөдөлмөрийн зах зээл ч өргөжин томорч, хүн хүчний
          хэрэгцээ нөөц маш чухал болно. Иймээс бид ирээдүйг харсан боловсон
          хүчний бодлогыг хэрэгжүүлж, нарийн мэргэжлийн, өндөр ур чадвартай,
          өндөр бүтээмжтэй ажиллах мэргэжлийн боловсон хүчнийг бэлтгэх хэрэгтэй.
          Энэ ажлыг бид урт хугацаандаа шинэ үеийн залуучуудын сэтгэлгээ
          хандлагыг бага ахуй цагаас нь хөгжүүлж, сайжруулахаас эхлэх нь чухал.
        </Text>
        <Text style={styles.textStatus}>
          Хөдөлмөрийн зах зээлд богино хугацаанд ур чадвартай боловсон хүчнийг
          бэлдэх хэрэгцээ шаардлага байгаа учраас энэ тал дээр анхаарах нь бас
          нэг асуудал. Тухайлбал, МСҮТ, Политехникийн коллежийн сургалтын чанар,
          орчин нөхцөл дадлагын баазаа сайжруулах гээд олон талаас нь
          байгууллагуудтай хамтран ажиллаж байгаа. Саяхан АХБ-ны санхүүжилтээр
          орчин үеийн тоног төхөөрөмж бүхий гурван Чадамжийн төв байгуулсан.
          Үүнээс гадна бид цахим эринд ажиллаж, амьдарч байна. Ирээдүйн ажлын
          байр ч энэ зүгт түлхүү байх болов уу.
        </Text>

        <Text style={styles.textTitle}>
          Мэргэжил сонгохдоо юуг хамгийн түрүүнд харах шаардлагатай гэж Та
          зөвлөх вэ. Дөрвөн жилийн дараа сургуулиа төгсөхөд тухайн үеийн
          хөдөлмөрийн зах зээлийн чиг хандлагыг өнөөдөр хэрхэн үнэлж урагш алхах
          вэ?
        </Text>
        <Text style={styles.textStatus}>
          Мэргэжил сонгохдоо мэдээж хамгийн түрүүнд өөрийнхөө хүсэл сонирхол,
          боломж, чадварыг харах хэрэгтэй. Дараагийн хамгийн чухал асуудлууд нь
        </Text>
        <Text style={styles.textStatus}>
          Тухайн мэргэжил ирээдүйд хэр эрэлттэй байх вэ?
        </Text>
        <Text style={styles.textStatus}>
          Тухайн мэргэжлийг эзэмшиж хөдөлмөрийн зах зээлд орсноор би хэдий
          хэмжээний цалин орлого олох вэ?
        </Text>
        <Text style={styles.textStatus}>
          Суралцаад төгссөн залуучуудын хөдөлмөр эрхлэлтийн байдал ямар байгаа
          вэ?
        </Text>
        <Text style={styles.textStatus}>
          гэх мэт олон талын мэдээллийг нээлттэй харах боломжтой болсон цаг үе.
        </Text>
        <Text style={styles.textStatus}>
          Тиймээс бүхий л талаас нь мэдээлэл, судалгаатай, ирээдүйгээ харсан
          сонголт нь чухал шүү дээ. Бид ч энэ бүх мэдээллийг залуучуудад
          хангалттай өгөхүйц тооцоолол, судалгааг чанартай сайн хийж гүйцэтгэн
          иргэд олон нийт, боловсролын байгууллагуудад түгээж ажиллах болно.
        </Text>
        <Text
          style={{
            backgroundColor: "#55b8ae",
            fontFamily: "Montserrat-bold",
            fontSize: 18,
            padding: 18,
            color: "white",
          }}
        >
          Зах зээл өндөр хөгжсөн орнуудын хувьд ажилгүй иргэдийн дийлэнх нь
          боловсролын түвшин доогуур байх нь түгээмэл байдаг. Харин манайд
          ажилгүй иргэдийн олонх нь дээд боловсролтой.
        </Text>
        <Text style={styles.textTitle}>
          Тухайн мэргэжилдээ карьераа ахиулах боломж, мэргэжлээрээ тууштай
          ажиллах боломж манайд хэр байдаг вэ?
        </Text>
        <Text style={styles.textStatus}>
          Мэдээж энэ бүхэн хувь хүн ажилтны өөрийнх нь ур чадвар, хандлага болон
          ажил олгогчийн хандлага, сэтгэлгээнээс ихээхэн хамаарах асуудал юм.
          Гэхдээ хууль эрх зүйн орчин мөн тодорхой зайлшгүй зохицуулалтыг хийж
          байх ёстой.
        </Text>
        <Text style={styles.textStatus}>
          Ажил олгогч аль болох бага зардлаар их ашиг олохыг хүсдэг. Ажилтан мөн
          их цалин авахыг хүсдэг. Энэ хоёр хүсэл сонирхол тэнцвэрт цэг дээр
          очвол тэнд хэн хэндээ ашигтай, хамгийн боломжит нөхцөл бий болно. Нэг
          талаасаа үүнийг бий болгох, нөгөө талаасаа ажилтан, ажил олгогчийн
          эрхийг тэгш хамгаалахад чиглэсэн олон улсын хөдөлмөрийн харилцааны
          суурь хэм хэмжээг төлөвшүүлэх хууль эрх зүйн орчин маш чухал. Үүний
          төлөө бид хичээн ажиллаж байна.
        </Text>
        <Text style={styles.textStatus}>
          Манай яамнаас хөдөлмөр эрхлэх суурь нөхцөл боломжийг бүрдүүлэх,
          хөдөлмөрийн харилцааг хөгжүүлэх хүрээнд Хөдөлмөрийн тухай хуулийн
          шинэчилсэн найруулгыг боловсруулж, саяхан УИХ-аар батлуулаад байна.
          Хуулийн шинэчлэлийн хүрээнд бид хуулийн хамрах хүрээг өргөжүүлж,
          хөдөлмөрийн харилцааг өмнө нь нарийвчлан зохицуулж чаддаггүй байсан
          ажлын байрны шинэ хэлбэр, шинэ нөхцөл байдалд нийцсэн зохицуулалтыг
          тодорхойлж хуульд тусгасан. Энэ хүрээнд хөдөлмөр эрхлэлтийн гурвалсан
          харилцаа, бүтэн бус цагаар ажиллах, зайнаас ажиллах, хувь хүн
          хоорондын хөдөлмөрийн гэрээгээр ажиллах, уртын ээлжээр ажил, үүргээ
          гүйцэтгэх зэрэг хөдөлмөрийн харилцааны шинэ хэлбэрүүдийг
          зохицуулалтаар хангасан.
        </Text>
        <Image
          source={require("../../../assets/mag1/ariunzayap3.jpg")}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-semibold-italic",
            marginVertical: 15,
          }}
        >
          Ажил олгогч аль болох бага зардлаар их ашиг олохыг хүсдэг. Ажилтан мөн
          их цалин авахыг хүсдэг. Энэ хоёр хүсэл сонирхол тэнцвэрт цэг дээр
          очвол тэнд хэн хэндээ ашигтай, хамгийн боломжит нөхцөл бий болно.
        </Text>
        <View
          style={{ borderWidth: 2, borderColor: "#55b8ae", marginBottom: 15 }}
        />
        <Text style={styles.textTitle}>
          Өнөөдөр цаг үе, технологийн хөгжил, хувь хүний сонирхол гээд олон
          шалтгаанаас үүдээд нэг хүн нэг мэргэжлээр насаараа ажилладаг үе
          хоцрогдсон байна. Энэ хандлагын талаар та ямар байр суурьтай байна вэ.
          Хөдөлмөрийн зах зээлд энэ хандлага сөрөг талтай юу?
        </Text>
        <Text style={styles.textStatus}>
          -Нэг мэргэжилтэй хүн ажлаа олон солих, олон мэргэжил эзэмшсэн хүн
          мэргэжлийнхээ дагуу хэд хэдэн ажил солих хоёр ялгаатай байх. Ер нь
          ажлаа олон солиод байх нь хөдөлмөрийн зах зээлд эерэг өөрчлөлт
          авчрахгүй гэж боддог. Ажил олгогчдын зүгээс ч энэ байдал нь
          байгууллагынх нь үйл ажиллагаанд шууд сөргөөр нөлөөлдөг гэдгийг
          хэлдэг. Япон зэрэг хөдөлмөрийн соёл өндөр хөгжсөн оронд ажил олгогч
          хүнийг ажилд авахдаа хэр олон ажлаа сольсноор нь үнэлэлт, дүгнэлт
          өгдөг тал ч бий. Бидний хувьд ч гэсэн энэ чиглэл, зарчмаар явбал илүү
          үр дүнд хүрэх боломжтой гэж хардаг. Энэ нөхцөлийг бүрдүүлэхэд чиглэсэн
          бодлого, аргачлал ч олон байдаг. Тухайлбал, ажилтан хүнээ ажилдаа
          үнэнчээр сайн ажиллуулахын тулд компанийн хувьцааны тодорхой хэсгээ
          ажилчдадаа урамшуулал болгон өгдөг туршлага ч байна.
        </Text>

        <Text style={styles.textTitle}>
          Техник технологи хөгжихийн хэрээр хөдөлмөрийн зах зээлд өөрчлөлт өрнөж
          байна. Энэ тал дээр та юу хэлэх вэ?
        </Text>
        <Text style={styles.textStatus}>
          Дэлхий нийтийн бүхий л юмс үзэгдэл, тэр дундаа хөдөлмөрийн зах зээлд
          маш олон өөрчлөлтүүд богино хугацаанд гарч байна. Ялангуяа ажил,
          мэргэжлийн эрэлт хэрэгцээ, ажлын байрны хэлбэр, нөхцөл технологийн
          хөгжил дэвшлийн хурдыг дагаад маш хурдацтайгаар өөрчлөгдөн хөгжиж
          байна.
        </Text>
        <Text style={styles.textStatus}>
          Бид ч дэлхий нийтэд бий болж байгаа энэ хөгжлийн хурдаас хоцрохгүйг
          хичээн ажиллаж байна. Яамны зүгээс хөдөлмөр, нийгмийн хамгааллын
          салбарын бүхий л төрийн үйлчилгээ, арга хэмжээг цахимжуулах зорилт
          тавин ажиллаж байгаа. Эхнээсээ нийгмийн даатгал, нийгмийн халамжийн
          үйлчилгээнүүд маань цахимжиж эхэлсэн. Хөдөлмөр эрхлэлтийн үйлчилгээ,
          арга хэмжээг цахимжуулах ажил эхлээд явж байна. Бид бүх цахим
          үйлчилгээгээ e-mongolia-д холбож байгаа. Ингэснээр иргэдэд ил тод,
          нээлттэй, түргэн шуурхай төрийн үйлчилгээг үзүүлэх боломжтой болж
          байгаа юм.
        </Text>
        <Image
          source={require("../../../assets/icon.png")}
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

export default Page4;

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
