import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page1 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      {/* <AntDesign
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
      /> */}
      <View
        style={{ flexDirection: "row", marginTop: 50, marginHorizontal: 20 }}
      >
        <Text style={{ fontWeight: "bold" }}>4-5 | </Text>
        <Text
          style={{
            color: "grey",
            fontWeight: "200",
            fontFamily: "Montserrat-regular",
          }}
        >
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
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          fontFamily: "Montserrat-black",
          fontSize: 40,
          textAlign: "center",
        }}
      >
        АГУУЛГА
      </Animatable.Text>
      {/* bayka */}
      <ImageBackground
        source={require("../../../assets/mag1/baykapage4.png")}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 400,
          justifyContent: "space-between",
          marginVertical: 20,
        }}
        resizeMode="cover"
      >
        <View>
          <Text
            style={{
              backgroundColor: "#ffc20e",
              color: "white",
              fontSize: 20,
              fontFamily: "Montserrat-bold",
              alignSelf: "flex-start",
              padding: 20,
            }}
          >
            ОНЦЛОХ ЗОЧИН
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              fontSize: 14,
              width: windowWidth / 2.1,
              marginTop: 20,
              marginLeft: 10,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            TomYo Edtech технологийн компанийг үүсгэн байгуулагч, захирал
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 20,
              marginLeft: 10,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            В.Баярсайхан
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              color: "#ffc20e",
              fontFamily: "Montserrat-semibold",
              fontSize: 60,
              flex: 0.2,
              marginTop: 58,
            }}
          >
            8.
          </Text>
          <Text
            style={{
              flex: 0.8,
              fontFamily: "Montserrat-bold",
              fontSize: 30,
              top: 20,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            Залуус олдож буй боломжоо тултал ашиглаасай
          </Text>
        </View>
      </ImageBackground>
      {/*ariunzaya */}
      <ImageBackground
        source={require("../../../assets/mag1/ariunzayapage4.jpg")}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 350,
          justifyContent: "space-between",
        }}
      >
        <View />
        <View
          style={{
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "#ffc20e",
              fontFamily: "Montserrat-semibold",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            16.
          </Text>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Montserrat-medium",
                color: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
              }}
            >
              {" "}
              ХНХ-ЫН САЙД
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Montserrat-bold",
                color: "white",
              }}
            >
              {" "}
              А.АРИУНЗАЯА
            </Text>
          </View>
        </View>
      </ImageBackground>
      <Text
        style={{
          backgroundColor: "#55b8ae",
          marginHorizontal: 19,
          textAlign: "center",
          paddingVertical: 20,
          fontFamily: "Montserrat-bold",
          color: "white",
          fontSize: 15,
        }}
      >
        ОНЦЛОХ ЗОЧИН
      </Text>
      <Text style={styles.textTitle}>
        Эрэлт нь ханасан мэргэжлээр олон залуучууд бэлтгэгдэж байна
      </Text>
      <Text style={styles.textStatus}>
        "Ажил олгогч, ажилтан хоёр хүсэл сонирхол тэнцвэрт цэг дээр очвол тэнд
        хэн хэндээ ашигтай, хамгийн боломжит нөхцөл бий болно."
      </Text>
      {/* bolorerdene */}
      <ImageBackground
        source={require("../../../assets/mag1/bolorerdenep4.jpg")}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 350,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View />
        <View
          style={{
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "#ffc20e",
              fontFamily: "Montserrat-semibold",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            23.
          </Text>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Montserrat-medium",
                color: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
              }}
            >
              ХХМТГ-ын дарга
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Montserrat-bold",
                color: "white",
              }}
            >
              Б.БОЛОРЭРДЭНЭ
            </Text>
          </View>
        </View>
      </ImageBackground>
      <Text
        style={{
          backgroundColor: "#f15623",
          marginHorizontal: 19,
          textAlign: "center",
          paddingVertical: 20,
          fontFamily: "Montserrat-bold",
          color: "white",
          fontSize: 15,
        }}
      >
        МАНЛАЙЛАГЧ
      </Text>
      <Text style={styles.textTitle}>
        Чадварлаг залуус олон улсад хүч сориосой гэж хүсдэг
      </Text>
      <Text style={styles.textStatus}>
        "Чин сэтгэлээсээ хүсэж буйгаа мэдсэн учраас түүнийхээ төлөө тууштай
        хөдөлмөрлөсөн."
      </Text>
      {/* 28 career hogjil */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 10,
        }}
      >
        <Text style={styles.textNumber}>28.</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Карьер төлөвлөлтийн тухай топ CEO зөвлөгөө
          </Text>

          <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
            Тэрбум ам.долларын үнэлгээнд хүрсэн старт ап компанийг Америкт "ганц
            эвэрт" хэмээн нэрийддэг. Гараанаас гараад үсрэнгүй хөгжсөн компанийг
            олох нь яг л Ганц эвэртийн эрэлд гарахтай ижил хэмээн зүйрлэжээ.
          </Text>
        </View>
      </View>
      {/* 30 career hogjil */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>30.</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            TOP 10 гүйцэтгэх захирлуудын зөвлөгөө
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
            }}
          >
            Дэлхийн бизнес, эдийн засгийн хөгжлийг тодорхойлж буй олон улсын
            үндэстэн дамнасан компаниудын гүйцэтгэх захирлууд карьерынхаа ТОП
            зөвлөгөөг хуваалцаж байна.
          </Text>
        </View>
      </View>
      {/* 32 career hogjil */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>32.</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            карьераа хөгжүүлэx төлөвлөгөө гаргах 7 энгийн арга
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
            }}
          >
            Та ирээдүйд чухал албан тушаал хаших нэгэн болно гэж өөрийгөө
            төсөөлдөг үү? Хэрэв тийм төсөөлөл бодлын тань хаа нэгтээ байгаа бол
            бодлуудаа цэгцэлж, карьер хөгжлийн төлөвлөгөөгөө эхлүүлэхгүй бол
            эдгээр төсөөллүүд тань хүсэл төдий болж замхарна.
          </Text>
        </View>
      </View>
      {/* 37 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>37.</Text>
        <View style={{ flex: 0.8, flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                backgroundColor: "#0066a6",
                fontFamily: "Montserrat-bold",
                color: "white",
                paddingVertical: 20,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              ОНЦЛОХ МЕНЕЖЕР
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 14,
                marginVertical: 15,
              }}
            >
              ХҮЛЭЭЛТЭЭС ДАВЖ АЖИЛЛАЖ ЧАДДАГ ХҮНД КАРЬЕР АХИУЛАХ ХЭЦҮҮ БИШ
            </Text>
            <Text style={{ fontFamily: "Montserrat-medium", fontSize: 12 }}>
              Төрийн банкны Бүтээгдэхүүн хөгжүүлэлт, судалгааны хэлтсийн захирал
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 15,
                marginVertical: 15,
              }}
            >
              Б.Одбаясал
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Image
              source={require("../../../assets/mag1/odbaysal.jpeg")}
              style={{ width: windowWidth / 3, height: 320 }}
            />
          </View>
        </View>
      </View>
      {/* 42 */}
      <Text
        style={{
          fontFamily: "Montserrat-bold",
          backgroundColor: "#ffc20e",
          textAlign: "center",
          marginHorizontal: 20,
          paddingVertical: 20,
          fontSize: 22,
        }}
      >
        ОНЦЛОХ КОМПАНИ
      </Text>
      <ImageBackground
        source={require("../../../assets/mag1/bitcoin.jpg")}
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginBottom: 20,
        }}
      >
        <Text style={styles.textNumber}>42.</Text>
        <View style={{ flex: 0.8, marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 16,
              color: "white",
            }}
          >
            180 ХОНОГИЙН ДОТОР ДЭЛХИЙД ХҮЛЭЭН ЗӨВШӨӨРӨГДСӨН
          </Text>

          <Image
            source={require("../../../assets/mag1/BinanceLogo.png")}
            style={{ width: 200, height: 110, marginVertical: 40 }}
          />

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "white",
            }}
          >
            Дэлхийн тэрбумтнуудын жагсаалтыг шинэ онтой зэрэгцэн нэгэн эрхэм
            өнгөлсөн нь дэлхийн криптовалютын хамгийн том биржийн үүсгэн
            байгуулагч, гүйцэтгэх захирал, олноо “CZ” хэмээн алдаршсан Чанпэн
            Жао юм. Түүний цэвэр хөрөнгө 96 тэрбум ам.долларт хүрч дэлхийн
            хамгийн чинээлэг эрхмүүдийн жагсаалтын арваннэгдүгээрт бичигдэв.
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "white",
            }}
          >
            <Text style={{ color: "white" }}>♦︎</Text> The Binance Ecosystem{" "}
            <Text style={{ fontFamily: "Montserrat-bold", color: "#ffc20e" }}>
              /46
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "white",
            }}
          >
            <Text style={{ color: "white" }}>♦︎</Text> Дэлхийн крипто арилжааны
            хамгийн том бирж{" "}
            <Text style={{ fontFamily: "Montserrat-bold", color: "#ffc20e" }}>
              /48
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "white",
            }}
          >
            <Text style={{ color: "white" }}>♦︎</Text> Компанийн соёлд тулгарч
            буй сорилт{" "}
            <Text style={{ fontFamily: "Montserrat-bold", color: "#ffc20e" }}>
              /50
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginTop: 10,
              color: "white",
              paddingBottom: 20,
            }}
          >
            <Text style={{ color: "white" }}>♦︎</Text> Тэд хэнийг ажилд авдаг вэ{" "}
            <Text style={{ fontFamily: "Montserrat-bold", color: "#ffc20e" }}>
              /51
            </Text>
          </Text>
        </View>
      </ImageBackground>
      <Image
        source={require("../../../assets/mag1/binanceTeam.jpg")}
        style={{
          width: windowWidth / 1.11,
          height: 300,
          alignSelf: "center",
          bottom: 20,
        }}
      />
      {/* 54 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>54.</Text>
        <View style={{ flex: 0.8 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              source={require("../../../assets/mag1/delgermend.jpeg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: "#0066a6",
                alignSelf: "center",
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  color: "#0066a6",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Ажилтан бүрийнхээ ажлаа хийдэг шалтгааныг сонирхоорой
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  marginVertical: 10,
                  marginLeft: 5,
                }}
              >
                Сэтгэл зүйч
              </Text>
              <Text style={{ fontFamily: "Montserrat-bold", marginLeft: 5 }}>
                Ц.Дэлгэрмэнд
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontFamily: "Cambria-italic",
          fontSize: 14,
          color: "#0066a6",
        }}
      >
        "Юуны төлөө ажиллаж, хөдөлмөрлөх вэ, юуг хийчихсэн байвал таны сэтгэлд
        аз жаргал авчрах вэ гэдэг шинэ зорилгоо олж чадвал Та халшралаас
        өөрийгөө эмчилж чадлаа гэсэн үг юм."
      </Text>
      {/* 58 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>58.</Text>
        <View style={{ flex: 0.8 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              source={require("../../../assets/mag1/batdavaa.jpg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: "#0066a6",
                alignSelf: "center",
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  color: "#0066a6",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                ӨРХИЙН ОРЛОГО БУУРСНЫГ ХАЛАМЖ ОРЛОЖ БАЙНА
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  marginVertical: 10,
                  marginLeft: 5,
                }}
              >
                Үндэсний статистикийн хорооны дарга
              </Text>
              <Text style={{ fontFamily: "Montserrat-bold", marginLeft: 5 }}>
                Б.БАТДАВАА
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontFamily: "Cambria-italic",
          fontSize: 14,
          color: "#0066a6",
        }}
      >
        "Цар тахлын үед ажилгүй болсон 80 гаруй мянган хүний дийлэнх нь
        үйлчилгээний салбарынхан. Түүнээс худалдааны салбарынх 23 мянга орчим."
      </Text>
      {/* 63 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 20,
        }}
      >
        <Text style={styles.textNumber}>63.</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            2022 онд шинээр гарч ирж буй шилдэг 10 технологи
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 16,
              marginVertical: 10,
            }}
          >
            Дэлхийн Эдийн Засгийн Форумаас оны шилдэг, шинэ технологиудыг 10
            дахь жилдээ танилцуулж байна.
          </Text>
        </View>
      </View>
      <Image
        source={require("../../../assets/mag1/technol.png")}
        style={{
          width: windowWidth / 1.35,
          height: 200,
          alignSelf: "flex-end",
          marginRight: 20,
        }}
      />
      {/* 63 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 20,
        }}
      >
        <Text style={styles.textNumber}>67.</Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            Зах зээлд тэргүүлж буй топ койнууд
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 16,
              marginVertical: 10,
            }}
          >
            Улам бүр хүчээ аван хөгжиж буй дижитал хөрөнгийн зах зээлийг
            тодорхойлж буй топ койнуудыг "Carer Developer" тоймлож байна.
          </Text>
        </View>
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

export default Page1;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    fontFamily: "Montserrat-bold",
    marginHorizontal: 20,
    marginVertical: 10,
    // marginBottom: 15,
  },
  textStatus: {
    fontSize: 14,
    marginVertical: 10,
    fontFamily: "Montserrat-regular",
    // textAlign: "justify",
    marginHorizontal: 20,
  },
  textNumber: {
    fontFamily: "Montserrat-semibold",
    color: "#ffc20e",
    fontSize: 30,
    flex: 0.2,
    marginTop: 20,
  },
});
