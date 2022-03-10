import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
} from "@expo/vector-icons";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page10 = () => {
  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "black" }}
      showsVerticalScrollIndicator={false}
    >
      {/* binance nuur */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        source={require("../../../assets/mag1/bitcoin.jpg")}
      >
        <Text
          style={{
            backgroundColor: "#ffc20e",
            fontFamily: "Montserrat-bold",
            fontSize: 20,
            alignSelf: "flex-start",
            paddingLeft: 15,
            paddingRight: 10,
            paddingVertical: 10,
            marginTop: 80,
          }}
        >
          ОНЦЛОХ КОМПАНИ
        </Text>

        <View
          style={{
            alignSelf: "center",
            marginVertical: 150,
          }}
        >
          <Text
            style={{
              fontFamily: "Oswald-bold",
              fontSize: 35,
              backgroundColor: "#ffc20e",
              padding: 5,
            }}
          >
            180 ХОНОГИЙН ДОТОР
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            ДЭЛХИЙД ХҮЛЭЭН ЗӨВШӨӨРӨГДСӨН
          </Text>
        </View>
        <Image
          source={require("../../../assets/mag1/BinanceLogo.png")}
          style={{
            width: windowWidth / 1.5,
            height: 150,
            alignSelf: "center",
          }}
        />
      </ImageBackground>
      {/* binance aguulga */}
      <View
        style={{ marginTop: 50, width: windowWidth / 1.1, alignSelf: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>42-52 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#ffc20e",
                fontSize: 10,
              }}
            >
              ОНЦЛОХ КОМПАНИ
            </Text>
          </View>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "white", marginVertical: 10 }}
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
              color: "#ffc20e",
              flex: 0.1,
            }}
          >
            Д
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              color: "white",
              flex: 0.9,
              top: 30,
            }}
          >
            элхийн тэрбумтнуудын жагсаалтыг шинэ онтой зэрэгцэн нэгэн эрхэм
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
            color: "white",
          }}
        >
          өнгөлсөн нь дэлхийн криптовалютын хамгийн том биржийн үүсгэн
          байгуулагч, гүйцэтгэх захирал, олноо “CZ” хэмээн алдаршсан Чанпэн Жао
          юм. Түүний цэвэр хөрөнгө 96 тэрбум ам.долларт хүрч дэлхийн хамгийн
          чинээлэг эрхмүүдийн жагсаалтын арваннэгдүгээрт бичигдэж эхэлснийг
          “Bloomberg” зарлажээ.
        </Text>
        <Text style={styles.textStatus}>
          1977 онд Хятадын Жянсу аймагт нэгэн их сургуулийн багшийн гэр бүлд
          мэндэлсэн тэрбээр 12 насандаа Канадад суурьшихаар иржээ. Түүнийг 13
          настай байхад нь аав нь 7,000 канад.доллараар компьютер авч өгсөн нь
          түүний мэргэжил сонголтод чухал нөлөө үзүүлжээ. Улмаар МакГилл Их
          Сургуулийг комьютерийн ухааны ангийг төгссөний дараа Токиогийн
          хөрөнгийн биржид арилжааны захиалга тохируулах хөгжүүлэлтийн ажилд
          туслах дадлагажигчаар орох урилга авчээ. Улмаар Bloomberg Tradebook-д
          хөгжүүлэгчээр дөрвөн жил ажилласны дараа 2005 онд Шанхайд амьдрахаар
          ирж “брокеруудад зориулсан хамгийн хурдан өндөр давтамжийн арилжааны
          системүүд” гэдгээрээ алдартай “Fusion Systems” компанийг үүсгэн
          байгуулжээ. Карьерынхаа эхэн үед санхүүгийн салбарт тасралтгүй
          ажилласан тэрээр 2013 онд покер тоглож яваад биткойны талаар олж
          мэдсэн нь түүний сонирхлыг ихэд татсанаар энэ салбарлуу эргэлт
          буцалтгүйгээр орох эхлэл болов.
        </Text>
        <Image
          source={require("../../../assets/mag1/Cnboi.png")}
          style={{ width: windowWidth / 1.1, height: 300, alignSelf: "center" }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-semibold-italic",
            fontSize: 16,
            color: "#ffc20e",
            textAlign: "center",
          }}
        >
          “Би санхүүгийн хувьд хангалттай эрх чөлөөнд хүрсэн. Надад их мөнгө
          хэрэггүй. Миний хувьд бусад энтрепенерийн адил хөрөнгийнхөө ихэнх
          хувийг хандивлах төлөвлөгөөтэй байгаа. Магадгүй 90-95 хувь…Бүр 99 хувь
          ч байж болох юм”
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Montserrat-bold",
            fontSize: 15,
            textAlign: "right",
            marginTop: 20,
            marginRight: 20,
          }}
        >
          - Changpeng Zhao -
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Montserrat-regular",
            fontSize: 15,
            textAlign: "right",
            marginBottom: 20,
            marginRight: 20,
          }}
        >
          Founder and CEO
        </Text>
        <Text style={styles.textStatus}>
          Ихэнх хүмүүс түүнийг дэлхийн хамгийн том криптовалютын биржийг
          эзэмшдэгийн хувьд энэ салбарт хөрөнгө оруулалт ихээхэн хийдэг гэж
          бодож байж магадгүй юм. Гэвч тэрээр хувьдаа хөрөнгө оруулалт төдийлөн
          хийдэггүй бөгөөд 2014 онд худалдаж авсан биткойныхоо багахан хувийг
          зарж, ихэнх хэсгийг нь хадгалж байгаа гэнэ.Тэрээр ашиг сонирхлын
          зөрчилгүй байх үүднээс крипто болон крипто бус төслүүдэд өөрийн
          хөрөнгөө биечлэн эзэмшдэггүй ажээ. Түүний ихэнх хөрөнгө binance coin
          хэлбэрээр хадгалагддаг бөгөөд 2018 онд “Forbes”-оос түүнийг дэлхийн
          гурав дахь криптовалютын тэрбумтан хэмээн зарласан юм.
        </Text>
      </View>
      {/* Binance zurag */}
      <ScrollView
        horizontal
        style={{ marginVertical: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={require("../../../assets/mag1/binancezurag.png")}
          style={{ height: windowHeight }}
          resizeMode="contain"
        />
      </ScrollView>
      {/* binance eco system */}
      <View
        style={{
          width: windowWidth,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontFamily: "Oswald-light",
            fontSize: 30,
            textAlign: "center",
            marginTop: 60,
          }}
        >
          THE{" "}
          <Text style={{ fontFamily: "Oswald-medium", color: "#ffc20e" }}>
            BINANCE
          </Text>{" "}
          ECOSYSTEM
        </Text>
        <View
          style={{
            borderWidth: 3,
            borderColor: "#ffc20e",
            alignSelf: "center",
            width: 100,
            marginVertical: 20,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            marginHorizontal: 20,
            fontFamily: "Montserrat-regular",
          }}
        >
          Аливаа бизнесийг хөгжүүлэхэд экосистем чухал үүрэгтэй. Тус компани
          экосистемээ дараах байдлаар хөгжүүлжээ.
        </Text>
        <Image
          source={require("../../../assets/mag1/binanceeco.png")}
          style={{
            width: windowWidth,
            height: windowHeight / 2.5,
            marginVertical: 100,
          }}
        />
      </View>
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          backgroundColor: "#ffc20e",
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.surgaltTitle}>Charity</Text>
            <Text style={styles.surgalt}>
              Дэлхийн өнцөг булан бүрт чанартай эрүүл мэндийн үйлчилгээ, тусламж
              авч чадахгүй байгаа хүмүүст зориулан тусгай хандивын сан үүсгэж,
              төслөөр дамжуулан тэдэнд тусламж үзүүлэх зорилготой.
            </Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: "white" }} />
          <View style={{ flex: 0.5 }}>
            <Text style={styles.surgaltTitle}>Academy</Text>
            <Text style={styles.surgalt}>
              Binance Академи нь блокчэйн болон крипто сургалтын нөөцийг нэг
              дороос авах боломжийг олгодог нээлттэй сургалтын төв юм.
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 0.5 }}>
            <Text style={[styles.surgaltTitle, { marginTop: 20 }]}>
              TRUST WALLET
            </Text>
            <Text style={styles.surgalt}>
              Binance-ийн албан ёсны түрийвч болох Trust Wallet нь хэрэглэгчид
              дижитал хөрөнгөө илгээх, хүлээн авах, хадгалах боломжтой
              найдвартай, төвлөрсөн бус түрийвч юм.
            </Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: "white" }} />
          <View style={{ flex: 0.5 }}>
            <Text style={[styles.surgaltTitle, { marginTop: 20 }]}>
              RESEARCH
            </Text>
            <Text style={styles.surgalt}>
              Дижитал хөрөнгийн салбарын бүх оролцогчдод байгууллагын түвшний
              дүн шинжилгээ, гүнзгий ойлголт, цаг үеийн мэдээллийг өгдөг.
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.surgaltTitle}>LABS</Text>
            <Text style={styles.surgalt}>
              Блокчейн бизнес эрхлэгчид, гарааны бизнес эрхлэгчид,
              нийгэмлэгүүдийг тодорхойлох, хөрөнгө оруулалт хийх, хурдасгах
              блокчейн экосистемийг хөгжүүлэхэд туслах салбарын төслүүдэд
              санхүүжилт олгодог. Binance Labs нь крипто орон зайд эерэгээр
              нөлөөлж, төвлөрсөн бус вэбийг бий болгох хурдан гүйцэтгэлтэй,
              техникийн багийг дэмжих үүрэгтэй.
            </Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: "white" }} />
          <View style={{ flex: 0.5 }}>
            <Text style={styles.surgaltTitle}>CHAIN</Text>
            <Text style={styles.surgalt}>
              Олон нийтэд тулгуурласан блокчейн програм хангамжийн систем бөгөөд
              дэлхийн өнцөг булан бүрээс хөгжүүлэгчид болон хувь нэмэр
              оруулагчидтай. Binance DEX нь Binance Chain дээр бүтээгдсэн
              төвлөрсөн бус солилцооны функц юм.
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 0.5 }}>
            <Text style={[styles.surgaltTitle, { marginTop: 20 }]}>
              LAUNCHPAD
            </Text>
            <Text style={styles.surgalt}>
              Энтерпенеруудад өөрийн койноо гаргахад туслах платформ.
            </Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: "white" }} />
          <View style={{ flex: 0.5 }}>
            <Text style={[styles.surgaltTitle, { marginTop: 20 }]}>INFO</Text>
            <Text style={styles.surgalt}>
              Крипто нэвтэрхий толь бичиг юм; хэн ч хувь нэмрээ оруулах
              боломжтой нээлттэй, бодитой мэдээлэл нэгтгэх платформ.
            </Text>
          </View>
        </View>
      </View>
      {/* Binance graph */}
      <View
        style={{
          width: windowWidth,
          backgroundColor: "white",
          paddingVertical: 10,
        }}
      >
        <View style={{ margin: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            2021 онд хийгдсэн арилжааны дүн
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            $7.7
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            ИХ НАЯД АМ.ДОЛЛАР
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            2022 оны ашиг (хүлээгдэж буй гүйцэтгэлээр)
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            $800
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            САЯ АМ.ДОЛЛАР
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            2021 оны 12-р сарын байдлаар нийт хэрэглэгчийн тоо
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            $28.6
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            САЯ
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            24 цагийн арилжааны дээд хэмжээ
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            $76
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            ТЕРБУМ АМ.ДОЛЛАР
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-regular",
              marginTop: 50,
            }}
          >
            2021 жилийн спот арилжааны дүн өмнөх оныхоос
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              fontSize: 40,
              color: "#ffc20e",
            }}
          >
            Х7
          </Text>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 20 }}>
            ДАХИН ӨССӨН
          </Text>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 50 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-semibold",
              textAlign: "center",
            }}
          >
            ДЭЛХИЙН ХАМГИЙН ТОМ
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-bold",
              fontSize: 28,
              color: "#ffc20e",
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            КРИПТО АРИЛЖААНЫ БИРЖ
          </Text>
          <Text
            style={{ textAlign: "right", fontFamily: "Montserrat-regular" }}
          >
            Дижитал хөрөнгийн биржүүдийн жилийн арилжааны хэмжээ
          </Text>
          <Text
            style={{ textAlign: "right", fontFamily: "Montserrat-regular" }}
          >
            (тэрбум ам.доллараар)
          </Text>
          <Image
            source={require("../../../assets/mag1/binancegraph1.png")}
            resizeMode="contain"
            style={{
              width: windowWidth,
              height: 600,
              marginVertical: 50,
            }}
          />
        </View>
      </View>
      {/* binance aguulga */}
      <View
        style={{
          backgroundColor: "white",
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.binanceTitle}>
          Binance хэр хэмжээний ашиг олдог вэ?
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#939598",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              top: 8,
            }}
          >
            2017
          </Text>
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Oswald-regular",
              fontSize: 25,
            }}
          >
            $7.5
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#939598",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              top: 8,
            }}
          >
            2018
          </Text>
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Oswald-regular",
              fontSize: 25,
            }}
          >
            $850
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#939598",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              top: 8,
            }}
          >
            2019
          </Text>
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Oswald-regular",
              fontSize: 25,
            }}
          >
            $570
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#939598",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
              top: 8,
            }}
          >
            2020
          </Text>
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Oswald-regular",
              fontSize: 25,
            }}
          >
            $900
          </Text>
        </View>

        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 20 }}
        />
        <Text style={{ fontFamily: "Montserrat-regular", textAlign: "right" }}>
          (сая ам.доллараар){" "}
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "grey", marginVertical: 40 }}
        />
        <Text style={styles.binanceTitle}>
          КОМПАНИЙН АЖИЛЧДАДАА ӨГДӨГ БОЛОМЖУУД
        </Text>
        <Text style={styles.binanceStatus}>
          Бинансчуудыг нэг өгүүлбэрээр тодорхойл гэвэл тэд бол үргэлж шинийг
          сурах, өөрсдийгөө хөгжүүлэх гал эрмэлзэлтэй хүмүүс юм. Компанийн
          зүгээс ч ажилчдадаа тэрхүү боломжийг хангаж өгдөг.
        </Text>
        <Text style={styles.binanceStatus}>
          2020 оны ажилчдадаа санал болгосон нэгэн боломж нь 1:1 гадаад хэл
          сурах анги юм. Маркетингийн хэлтсийн унаган турк хэлтэй нэгэн ажилчин
          долоо хоногийн гурван удаа хичээллэх хятад хэлний ангийг сонгосон
          бөгөөд өдгөө хятад хэлээр ахисан түвшинд ярьж, бичиж, унших сурчээ.
          Бусад ажилчдын хувьд сурахаар шийдсэн хамгийн түгээмэл хэлэнд Араб,
          Хятад, Япон, Англи хэлүүд орсон ажээ.
        </Text>
        <Text style={styles.binanceStatus}>
          Мөн тэдний хийх хамгийн дуртай зүйл бол ном унших, сонсох. Компанийн
          номын клубууд сонирхлоос шалтгаалан 100 хүртэлх гишүүдтэй бөгөөд 1-2
          долоо хоногт нэг ном уншина гэвэл тэдний санал болгосон номыг уншихад
          588 хоног шаардлагатай гэнэ. Санал болгох номын жагсаалтыг санхүү,
          технологийн сэдэвтэй номууд тэргүүлэх бөгөөд “Хүн төрөлхтний товч
          түүх”, “Fallen Dragon” зэрэг шинжлэх ухаан, уран зөгнөлт номууд ч
          багтжээ.
        </Text>
        <Text style={styles.binanceStatus}>
          Хувь хүний хөгжил, боловсролоос гадна Binance нь ажилчдад эрүүл мэнд,
          ажил амьдралын тэнцвэрийг бий болгох, хувийн ажлын хуваарийг удирдах
          чадварыг дэмжих зорилгоор теннис, йогийн сургалтуудыг явуулдаг.
        </Text>
        <Text style={styles.binanceTitle}>
          Дэлхийн хамгийн том криптовалютын биржид ажиллах ямар байдаг вэ?
        </Text>
        <View style={{ flexDirection: "row", flex: 1, paddingVertical: 20 }}>
          <View style={{ flex: 0.5 }}>
            <MaterialCommunityIcons
              name="human-male-female"
              size={100}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{
                fontFamily: "Oswald-regular",
                fontSize: 30,
                textAlign: "center",
                color: "#ffc20e",
              }}
            >
              4,115
            </Text>
            <Text
              style={{ textAlign: "center", fontFamily: "Montserrat-regular" }}
            >
              Ажилтнуудын тоо
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Foundation
              name="map"
              size={100}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 0.5 }}>
                <Text
                  style={{
                    fontFamily: "Oswald-regular",
                    fontSize: 30,
                    color: "#ffc20e",
                    alignSelf: "center",
                  }}
                >
                  50
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat-regular",
                    alignSelf: "center",
                  }}
                >
                  Дэлхийн оронд
                </Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text
                  style={{
                    fontFamily: "Oswald-regular",
                    fontSize: 30,
                    color: "#ffc20e",
                    alignSelf: "center",
                  }}
                >
                  40
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat-regular",
                    alignSelf: "center",
                  }}
                >
                  Оффис
                </Text>
              </View>
            </View>
          </View>
        </View>
        <MaterialCommunityIcons
          name="human-female-girl"
          size={100}
          color="black"
          style={{ alignSelf: "center" }}
        />
        <Text
          style={{
            fontFamily: "Oswald-regular",
            fontSize: 30,
            textAlign: "center",
            color: "#ffc20e",
          }}
        >
          28
        </Text>
        <Text style={{ fontFamily: "Montserrat-regular", textAlign: "center" }}>
          Ажилтнуудын дундаж нас{" "}
        </Text>
        <Text style={[styles.binanceTitle, { marginTop: 20 }]}>
          {" "}
          АСУУДЛЫГ ХЭРХЭН ШИЙДДЭГ ВЭ?
        </Text>
        <Text style={styles.binanceStatus}>
          Тус компанийн үнэт зүйлс нь ажилчдынхаа дунд нь орж, эрх чөлөө, хүсэл
          эрмэлзэл, эрхэм зорилгыг бий болгоход хувь нэмрээ оруулах ба энэ соёл
          нь Binance-ийг өнөөдрийн түвшинд хүргэжээ. Тэд ажил дээрээ төдийгүй
          хувийн амьдрал дээрээ ч сайн хамтрагчид, дотно найзууд байхыг зорьдог.
          Бинансчуудын хамтын хобби бол цанаар гулгах бөгөөд баг бүрдүүлж
          уралдаан явуулах тогтсон уламжлалтай ажээ.
        </Text>
        <Text style={styles.binanceStatus}>
          Binance байгууллагын дотоод ил тод байдлыг өндөр түвшинд байлгадаг.
          Гүйцэтгэх захирал “CZ” 1-2 сар тутамд бага хурал хийх замаар компанийн
          хэмжээнд уулзалт зохион байгуулдаг бөгөөд Binance-ийн стратегийн
          зорилтууд, тэр дундаа компанид тулгарч буй бэрхшээл, асуудлуудыг
          багийн гишүүдтэй хуваалцдаг. Мөн төгсгөлд гүйцэтгэх захирал CZ-ээс
          ажилчид хүссэн асуултаа асуух нэмэлт цаг бий. Хэрэв та тэдний ажилчин
          бол амралтын урамшуулал яагаад цагтаа буугаагүй талаар дэлгэрэнгүй
          тайлбар хүсэж, компанийнхаа соёлд дасаж чадахгүй байгаа талаараа
          учирлаж болно. CZ хариуд нь урамшуулал цагтаа буугаагүй талаар
          дэлгэрэнгүй тайлбар тавин дахин ийм асуудал гарахгүй гэж уучлалт гуйж,
          эсвэл таныг компанийнхаа соёлд дасгахад туслахын тулд хувийн зүгээс
          ямар тусламж үзүүлэх талаар асуух болно.
        </Text>
        <Text style={styles.binanceStatus}>
          Мөн Binance-ийн нэгэн соёл бол хүн бүр “Надад нэг санаа байна” гэдгээ
          хэнээс ч айхгүйгээр чөлөөтэй хэлэх боломжтой. Тэдний үйлчилгээнүүд,
          экосистем эндээс л гарсан шүү дээ. Тэд нэгнийхээ санааг нухацтайгаар
          хүлээн авч нээлттэй ярилцаж хэрэгжүүлдэг. Нэг үгээр хэлбэл компани
          тодорхой дүрэм журамд баригддаггүй, нээлттэй органик бүтэцтэй юм.
        </Text>
        <Image
          source={require("../../../assets/mag1/binanceteam1.png")}
          style={{
            width: windowWidth / 1.1,
            height: windowHeight / 4,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
        <Text style={styles.binanceTitle}>
          Компанийн соёлд тулгарч буй сорилтууд
        </Text>
        <Text style={styles.binanceStatus}>
          Компани бүтцийн хувьд органик, нээлттэй байх нь нөгөө талаар тэдний
          хувьд маш том сорилт болж байгаа юм. Тогтсон, тодорхой дүрэм журамд
          баригдахгүй ажиллах нь нэг талаар шинэхэн ажилчид асуудал гарвал хэнд
          хандахаа мэдэхгүй байх, зарим асуудлууд шийдэгдэхэд урт хугацаа
          зарцуулах зэрэг асуудлууд гарч эхэлжээ.
        </Text>
        <Text style={styles.binanceStatus}>
          Ажилчдын тоо өсөхийн хэрээр тэд үйл ажиллагааг нээлттэй, ил тод,
          хурдан шуурхай явуулах үйл ажиллагааны бүтэц бий болгох шаардлагатай
          байна. Дэлхийн 50 гаруй орноос ажиллаж буй 3000 ажилчдын ажиллах
          хэвийн нөхцөлийг бүрдүүлэхийн тулд тэд менежментийн мэргэшсэн
          хүмүүсээс тусгай сургалтуудыг авч байгаа аж. Мөн тэдний цаашид зорьж
          буй нэгэн зорилго нь өсөн нэмэгдэж буй өрсөлдөөнтэй зах зээлд хүчтэй
          өрсөлдөгч байхын тулд аз жаргалтайгаар ажлаа хийдэг ажилчныг бүтээх
          юм.
        </Text>
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <Image
            source={require("../../../assets/mag1/binanceteam3.png")}
            style={{ width: windowWidth / 2.5, height: 150, marginRight: 3 }}
          />
          <Image
            source={require("../../../assets/mag1/binanceteam2.png")}
            style={{ width: windowWidth / 2, height: 150, marginLeft: 3 }}
          />
        </View>
        <Text style={styles.binanceTitle}>Тэд хэнийг ажилд авдаг вэ?</Text>
        <Image
          source={require("../../../assets/mag1/binancedonut.png")}
          style={{
            width: windowWidth / 1.5,
            height: 300,
            alignSelf: "center",
            marginVertical: 20,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            paddingBottom: 20,
          }}
        >
          <View style={{ marginRight: 5 }}>
            <Text style={styles.graphText}>
              <Text style={{ color: "#f15623" }}> ♦︎</Text> Operation{" "}
              <Text style={styles.graphPercent}> /6.8%/</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#ffc20e" }}> ♦︎</Text> Sales & BD{" "}
              <Text style={styles.graphPercent}> /21.5%/</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#55b8ae" }}> ♦︎</Text> Administrative{" "}
              <Text style={styles.graphPercent}> /2.3%/</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#0066a6" }}> ♦︎</Text> Technology{" "}
              <Text style={styles.graphPercent}> /40.7%/</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#00aeef" }}> ♦︎</Text> Retail{" "}
              <Text style={styles.graphPercent}>/1.1%/</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#97daf8" }}> ♦︎</Text> Finance{" "}
              <Text style={styles.graphPercent}>/7.3%/</Text>
            </Text>
          </View>
          <View style={{ marginLeft: 5 }}>
            <Text style={styles.graphText}>
              <Text style={{ color: "#7b95cc" }}> ♦︎</Text> Creative{" "}
              <Text style={styles.graphPercent}> /2.9%/</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#746c9b" }}> ♦︎</Text> HR{" "}
              <Text style={styles.graphPercent}> /3.9%/</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#784785" }}> ♦︎</Text> Support{" "}
              <Text style={styles.graphPercent}> /6.1%/</Text>
            </Text>

            <Text style={styles.graphText}>
              <Text style={{ color: "#a93b91" }}> ♦︎</Text> Legal{" "}
              <Text style={styles.graphPercent}> /1%/</Text>
            </Text>
            <Text style={styles.graphText}>
              <Text style={{ color: "#ef58a0" }}> ♦︎</Text> Marketing & PR{" "}
              <Text style={styles.graphPercent}> /6.4%/</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.binanceTitle}>Нийтлэг шаардлага:</Text>
        <Text style={styles.binanceStatus}>
          3-8 жилийн ажлын туршлагатай (Тухайн ажлын байраас шалтгаалж ажлын
          туршлагын хугацаа хэлбэлздэг)
        </Text>
        <Text style={styles.binanceStatus}>
          Ярих, илтгэх, мэтгэлцэх болон харилцааны бусад ур чадвар өндөр байх
        </Text>
        <Text style={styles.binanceStatus}>
          Криптовалютын салбарт ажиллаж байсан бол давуу тал
        </Text>
        <Text style={styles.binanceStatus}>
          Бие даан ажиллах өндөр чадвартай
        </Text>
        <Text style={styles.binanceStatus}>
          Ажлыг сайн төлөвлөж хийхээс гадна хурдтай ажилладаг
        </Text>
        <Text style={styles.binanceStatus}>Багаар ажиллах чадвар өндөр</Text>
        <Text style={styles.binanceStatus}>
          Мэргэжлийн бусад ур чадварууд (мэргэжил бүрээс хамаарч шаардлагатай ур
          чадваруудыг тодорхойлдог)
        </Text>
        <Text style={styles.binanceStatus}>
          Ямар улс орон, ямар байгууллага байгаагаас үйл хамааран ажил олгогчдын
          ажилчдад тавьдаг шаардлагуудад ажиглагддаг нийтлэг талууд Binance-ийн
          хүний нөөцийн бодлогод ч ижил байдаг аж. Эдгээр нийтлэг чадваруудаас
          гадна мэргэжлийн ур чадвараа онцгой хөгжүүлж чадвал дэлхийн хаана,
          ямар цалинтай ажиллах нь хэн бүхэнд нээлттэй ажээ.
        </Text>
        <Text style={styles.binanceTitle}>ЦАЛИНГИЙН ХЭМЖЭЭ / Төгрөгөөр / </Text>
      </View>
      {/* tsalingiin hemjee */}
      {/* 1 */}
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#ffc20e",
            flexDirection: "row",
            marginVertical: 20,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              flex: 0.5,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Стратеги үйл ажиллагаа хариуцсан захирал{" "}
            <Text style={{ fontFamily: "Montserrat-regular" }}> (жилд)</Text>
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              color: "white",
              flex: 0.5,
              textAlign: "right",
              fontSize: 26,
              marginRight: 20,
            }}
          >
            605,225,924
          </Text>
        </View>
      </View>
      {/* 2 */}
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#ffc20e",
            flexDirection: "row",
            marginVertical: 20,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              flex: 0.5,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Software инженер
            <Text style={{ fontFamily: "Montserrat-regular" }}> (жилд)</Text>
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              color: "white",
              flex: 0.5,
              textAlign: "right",
              fontSize: 26,
              marginRight: 20,
            }}
          >
            427,429,500
          </Text>
        </View>
      </View>
      {/* 3 */}
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#ffc20e",
            flexDirection: "row",
            marginVertical: 20,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              flex: 0.5,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Хөгжүүлэгч
            <Text style={{ fontFamily: "Montserrat-regular" }}> (жилд)</Text>
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-regular",
              color: "white",
              flex: 0.5,
              textAlign: "right",
              fontSize: 26,
              marginRight: 20,
            }}
          >
            341,943,600
          </Text>
        </View>
      </View>
      {/* binance rating */}
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <FontAwesome name="star" size={50} color="#ffc20e" />
          <FontAwesome name="star" size={50} color="#ffc20e" />
          <FontAwesome name="star" size={50} color="#ffc20e" />
          <FontAwesome name="star-half-empty" size={50} color="#ffc20e" />
          <FontAwesome name="star-o" size={50} color="#ffc20e" />
        </View>
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Ажилчдын Binance-ийг үнэлэх үнэлгээ
        </Text>
      </View>
      {/* binance rating 3 */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View style={{ flex: 0.33 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            4.0
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            Карьерийн өсөлт
          </Text>
        </View>
        <View style={{ flex: 0.33 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            2.6
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-half-empty" size={24} color="#ffc20e" />

            <FontAwesome name="star-o" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            Ажил, амьдралын тэнцвэр
          </Text>
        </View>
        <View style={{ flex: 0.33 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            4.0
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            Карьерийн өсөлт
          </Text>
        </View>
      </View>
      {/* Binance rating 2 */}
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 0.5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            4.0
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            Карьерийн өсөлт
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 20,
            }}
          >
            4.0
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star" size={24} color="#ffc20e" />
            <FontAwesome name="star-o" size={24} color="#ffc20e" />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat-semibold",
              fontSize: 16,
            }}
          >
            Карьерийн өсөлт
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <Text style={styles.binanceStatus}>
          Ковид-19 цар тахал дэлхийн даяар тархаж түүхэнд анх удаа дэлхий бүх
          улс орны засгийн газар төдийгүй иргэд, албан байгууллага нэг асуудал
          дээр шийдвэр гаргах хүндхэн сорилттой тулсан билээ. Тэгвэл энэхүү
          нөхцөл байдлыг Binance хэрхэн даван туулсантай танилцая.
        </Text>
        <Text style={styles.binanceStatus}>
          Binance-ийн хувьд дэлхийн 50 гаруй орноос 800 гаруй багийг алсын
          зайнаас ажиллуулах нь байгууллагын нэгэн чухал соёл байсаар ирсэн.
          Өөрөөр хэлбэл ажилчид хүссэн цагтаа, боломжтой байршлаасаа ажлаа
          гүйцэтгэх нь энэхүү байгууллагад цар тахлаас өмнө тогтсон хэв маяг
          ажээ.
        </Text>
        <Text style={styles.binanceStatus}>
          Энэхүү соёл нь Binance-ийн үйл ажиллагааг дэлхий даяар хурдацтай
          өргөжүүлэх боломжийг олгосон боловч нөгөө талаар сорилтуудыг
          дагуулдаг. Жишээлбэл, дэлхий даяар тархсан багийн уулзалтын цагийг хэн
          бүхэнд тохируулахад хүндрэлтэй байдаг тул ажилчид нь шөнийн цагаар
          ажиллаж, өдрийн цагаар амрах шаардлагатай нүүр тулах үе ч байх нь бий.
        </Text>
        <Text style={styles.binanceTitle}>
          Аль хэдийн гэрээсээ ажиллаж хэвшсэн Бинансчууд гэрээр ажиллаж буй
          хүмүүст дараах зөвлөгөөг өгчээ.
        </Text>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Эрүүл мэнддээ анхаараарай
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "white",
              paddingVertical: 5,
            }}
          >
            Өдөржин ширээний ард сууж ажиллах нь бие болоод сэтгэлзүйн эрүүл
            мэндэд сөрөг нөлөөтэй байдаг тул дасгал хөдөлгөөн, бясалгалыг
            тогтмол хийгээрэй.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Надъяа{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Африк/
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Хийх ёстой ажлынхаа нарийн дэс дарааллыг гаргах
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "#ffffff",
              paddingVertical: 5,
            }}
          >
            (үүнд завсарлага авч амрах цаг ч хамаарна). Тэгээд тэрхүү жагсаалтаа
            сахилга баттайгаар мөрдвөл үр бүтээмж илүү сайжирна.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Майра{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Өмнөд Америк/
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Өөрийн компьютер болон компанийнхаа мэдээллийг хамгаалаарай
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "white",
              paddingVertical: 5,
            }}
          >
            Хүчтэй нууц үг ашиглаж, комьтерийнхээ хамгаалалтын программыг
            шинэчлээрэй.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Айлир{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Европ/
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Өөртөө цаг гаргаарай
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "white",
              paddingVertical: 5,
            }}
          >
            Зөвхөн ажлаа хийхээс гадна шинээр сурах ур чадвар, хийх дуртай
            зүйлсдээ болон инээж хөгжилдөх цагийг заавал гаргаарай. Мөн өдөрт
            нэг удаа гадаа гарч агаар амьсгалаарай.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Жейми{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Өмнөд Америк/
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={{ backgroundColor: "#ffc20e", padding: 20 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Ажилдаа зарцуулсан цагаасаа илүү бүтээмжид анхаарлаа хандуул
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              color: "white",
              paddingVertical: 5,
            }}
          >
            Технологийн дэвшлүүдийг ашиглан хийх ажлаа хөнгөвчилж, бүтээмжээ
            нэмэгдүүлэхэд анхаараарай.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 14,
              textAlign: "right",
            }}
          >
            Мартин{" "}
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              /Ази/
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Page10;

const styles = StyleSheet.create({
  textStatus: {
    fontSize: 16,
    fontFamily: "Montserrat-regular",
    color: "white",
    marginVertical: 15,
  },
  surgalt: {
    fontFamily: "Montserrat-regular",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  surgaltTitle: {
    fontFamily: "Oswald-medium",
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
  binanceTitle: {
    fontFamily: "Montserrat-bold",
    fontSize: 18,
  },
  binanceStatus: {
    marginVertical: 15,
    fontSize: 16,
    fontFamily: "Montserrat-regular",
  },
  graphText: {
    fontFamily: "Montserrat-regular",
    fontSize: 16,
  },
  graphPercent: {
    fontFamily: "Montserrat-bold",
    fontSize: 16,
  },
});
