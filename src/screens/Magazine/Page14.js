import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page14 = () => {
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../../assets/mag1/001.png")}
        style={{ width: windowWidth, height: windowHeight }}
      >
        <Text
          style={{
            marginTop: 80,
            fontFamily: "Montserrat-bold",
            color: "white",
            textAlign: "center",
            fontSize: 18,
          }}
        >
          ХӨРӨНГӨ ОРУУЛАЛТ
        </Text>
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text
            style={{
              marginTop: 80,
              fontFamily: "Montserrat-bold",
              color: "white",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Зах зээлд тэргүүлж буй
          </Text>
          <Text
            style={{
              fontFamily: "Oswald-medium",
              color: "white",
              textAlign: "center",
              fontSize: 45,
            }}
          >
            ТОП КОЙНУУД
          </Text>
          <View
            style={{
              borderWidth: 5,
              alignSelf: "center",
              borderColor: "#55b8ae",
              width: 100,
              marginTop: 20,
            }}
          />
        </View>
      </ImageBackground>
      <ImageBackground
        source={require("../../../assets/mag1/coinbg.jpg")}
        style={{
          width: windowWidth / 1.1,
          height: 300,
          marginVertical: 20,
          alignSelf: "center",
        }}
      >
        <View style={{ marginTop: 230, alignSelf: "center" }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Montserrat-bold",
              fontSize: 18,
            }}
          >
            ДИЖИТАЛ ХӨРӨНГИЙН ЗАХ
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "Montserrat-bold",
              fontSize: 18,
            }}
          >
            ЗЭЭЛИЙГ ТОДОРХОЙЛОГЧИД
          </Text>
        </View>
      </ImageBackground>
      <Image
        source={require("../../../assets/mag1/tables.png")}
        style={{ width: windowWidth / 1.1, height: 200, marginHorizontal: 20 }}
        resizeMode="contain"
      />
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontFamily: "Montserrat-regular", marginVertical: 5 }}>
          Дижитал хөрөнгүүдийн
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            www.coinhub.mn
          </Text>{" "}
          бирж дээрх ханш (2022.02.22-ны өдрийн байдлаар)
        </Text>
        <Text style={{ fontFamily: "Montserrat-regular", marginVertical: 5 }}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            Зах зээлийн үнэлгээ:
          </Text>{" "}
          Тухайн цагийн койны үнэлгээг нийт нийлүүлсэн койны тоогоор үржүүлж
          тооцов.
        </Text>
        <Text style={{ fontFamily: "Montserrat-regular", marginVertical: 5 }}>
          <Text style={{ fontFamily: "Montserrat-bold" }}> Эрэмбэ:</Text>{" "}
          Ханшаар
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={styles.coinTitle}>1. CHB</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Энэхүү койн нь
          COINHUB биржийн үндсэн койн бөгөөд биржийн арилжааны орлогоос 70%-ийг
          сар бүр ногдол ашиг болгон хэрэглэгчдэдээ тараах юм. Мөн цаашид олон
          улсын Coinlist, Profit, Bitrexx зэрэг бирж дээр гарах зорилготой.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text> “Койн
          Хаб” ХХК нь Cody, UBcab, Shoppy.mn-ий толгой компани “Интелмайнд”
          ХХК-ийн хөрөнгө оруулалттай компани бөгөөд энэхүү экосистемийн хүрээнд
          урамшууллыг койноор хэрэгжүүлэх, койноор баталгаажсан кредит картуудыг
          гаргах төлөвлөгөөтэй байгаа аж.
        </Text>
        <Text style={styles.coinTitle}>2. ARDX</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Урамшууллын оноо.
          Блокчейн технологид суурилсан Монголын анхдагч бүтээгдэхүүний нэг
          бөгөөд зах зээлд тэргүүлэх байр суурьтай койнуудын нэг. Ард санхүүгийн
          нэгдлийн бүтээгдэхүүн, үйлчилгээг авсны дүнд ард койн нь урамшуулал
          болон хэрэглэгчийн дансанд ордог.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text> “Ард
          Санхүүгийн Нэгдэл” (Ард) нь санхүү ба технологийн компаниудад хөрөнгө
          оруулалт хийж, зах зээл дэх байр суурь, өрсөлдөх чадвар, үнэ цэнийг нь
          дээшлүүлэх замаар хувьцаа эзэмшигчдийнхээ хөрөнгийн өгөөжийг өсгөх
          зорилт тавин ажилладаг үндэсний санхүүгийн нэгдэл компани юм. Ардын
          бүрэлдэхүүнд Ард Даатгал, Ард Кредит, Ард Секюритиз, Ардын Тэтгэврийн
          Данс, Ард Актив, Ард Менежмент, Ард Бит, ТэнГэр Системс, Монгол
          Шуудан, ЭмИСи Партнерс (ardshop.mn), Ард Холдингс Интернэшнл, Ард
          Лизинг, Ард Пропертиз, Ард Реалти зэрэг компани багтаж байна.
        </Text>
        <Text style={styles.coinTitle}>3. ZESC</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Хэрэглэгчдэд
          сурталчилгаа үзэх бүртээ орлого олох боломжийг бүрдүүлэхээр, Ethereum
          блокчэйн дээр суурилсан, ERC-20 стандартын крипто токен юм. Улмаар
          хэрэглэгчид онлайн сурталчилгааг түгээх систем болох Zes Ad Network
          платформын орлогын 70 хувийг зэскойноор авч түүнийгээ бусад биржүүд
          дээр зарж орлого олох боломжтой.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text>{" "}
          “СекЛаб” ХХК нь веб хөгжүүлэлт, aпп хөгжүүлэлт, аюулгүй байдлын
          чиглэлээр үйл ажиллагаа явуулдаг.
        </Text>
        <Text style={styles.coinTitle}>4. IHC</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Инфляцийн эсрэг
          гарч буй койн. IEO хийхдээ 30 секундын дотор 30 тэрбумын хөрөнгийг
          босгож чадсан Монголын анхны койн. ApeSwap дээрх топ таван койны нэг
          болсон.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text> Энэхүү
          койныг Монголын крипто, форекс санхүүгийн салбарт олон жилийн
          туршлагатай эрхмүүд болох Б.Гантиг, Б.Эрхэмбаяр О.Мөнхжин, Б.Идэр-Од
          хэмээх залуусаар ахлуулсан 40 хүний бүрэлдэхүүнтэй баг гаргасан.
        </Text>
        <Text style={styles.coinTitle}>5. WPL</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Binance Smart
          Chain-ий BEP-20 токены стандартын дагуу хийгдсэн. Хэрэглэгчид
          WorldPlus-ийг хэрэглээд сарын хэрэглээний 10%-тай тэнцэх хэмжээний
          WPL-ийг урамшуулал болгон авна.
        </Text>
        <Text style={styles.coinStatus}>
          {" "}
          Хэвлэмэл сэтгүүлүүдтэй харьцуулахад дижитал сэтгүүлийн орлого дэлхий
          дахинд тогтмол өсөж байгаа бөгөөд 2023 онд олон улсад төвлөрсөн бус
          интерактив сэтгүүл гаргах зорилготой.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text> “Ворлд
          Плас Дижитал” ХХК нь Монголын анхны цахим ном, аудио ном, подкастын
          платформ MPlus, дуу хөгжмийн платформ Mmusic, интерактив сэтгүүлийн
          платформ WorldPlus гэх мэт бидний мэдэх бүтээгдэхүүнийг хөгжүүлсэн.
          Байгуулагдсан цагаасаа бүтээгдэхүүн үйлчилгээгээрээ олон улсын зах
          зээлд амжилттай танигдаж, Зүүн Өмнөд Азийн тэргүүлэх медиа компаниудын
          нэг Singapore Press Holding, Японы Z Holdings Group (Sina Weibo),
          Дэлхийн тэргүүлэх медиа PR компаниудын нэг Hakuhodo DY Holdings зэрэг
          компаниудтай хамтран ажилладаг. WorldPlus платформ дээр Harper's
          Bazaar, Top Gear, Marie Claire, Cosmopolitan, Esquire, Vogue, GQ
          тэргүүтэй дэлхийн 7 хэлээрх 150 гаруй шилдэг хэвлэн нийтлэгч,
          сэтгүүлүүдийг унших боломжтой.
        </Text>
        <Text style={styles.coinTitle}>6. MNFT</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Энэхүү койн нь
          бусад криптовалютуудын үндсэн шинж чанарыг агуулахаас гадна Mongol NFT
          платформуудаас NFT худалдан авах шууд хэрэглээ болох юм. Мөн цаашлаад
          дэлхийн Metaverse платформууд дээр хөрөнгө оруулж Монголынхоо уран
          бүтээлчдийг дэлхийд таниулах гүүр болох зорилготой.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text> “Монгол
          NFT” ХХК. Дижитал шилжилтийн эрин үед хүмүүс төрөл бүрийн цуглуулгыг
          цахим хэлбэрээр хадгалах шинэ соёл бий болжээ. Уран бүтээлчид өөрийн
          бүтээсэн дуу хөгжим, зураг, бичлэгийг дижитал хэлбэрээр зарж болох
          бөгөөд үл хөдлөх хөрөнгийн гэрчилгээ, их сургуулийн дипломыг ч онлайн
          орчинд найдвартай хадгалах боломж блокчэйн технологийн тусламжтай
          бүрдсэн нь NFT юм. Монголынхоо уран бүтээлчдийг технологийн хөгжилтэй
          хөл нийлүүлэн алхуулахаар хамгийн анхны NFT арилжааны платформыг тус
          компани нээжээ.
        </Text>
        <Text style={styles.coinTitle}>7. SPC</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Хэрэглэгчдийн хувьд
          Storepay үйлчилгээг ашиглан хийсэн худалдан авалтаа амжилттай төлж
          дуусах бүрдээ үнийн дүнгийн 1%-тай тэнцэх үнэлгээтэй SPC буцаан олголт
          авах (SPC ашигласан тохиолдолд 2%), түүнчлэн мерчант байгууллагаас
          зарлаж буй буцаан олголтын нэмэлт урамшууллаас авах боломжууд бүрдэнэ.
          SPC койны эрэлт Storepay хэрэглэгчдийн тоог даган шууд хамааралтай
          байдлаар нэмэгдэх бөгөөд SPC койны IEO (Initial Exchange Offering)
          хийгдсэнээс хойш хэрэглэгчид SPC койныг Монголд үйл ажиллагаа явуулж
          буй крипто биржүүдээс худалдан авч Storepay үйлчилгээнд ашиглана.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text>{" "}
          Storepay нь Монголын хамгийн олон хэрэглэгч, харилцагчтай Buy Now, Pay
          Later буюу “Одоо аваад, дараа төл” финтекийн хуваан төлөх шийдлийн
          үйлчилгээ үзүүлэгч компани юм. Байгуулагдсан эхний жил хагаст 21
          тэрбумын борлуулалтаар зах зээлд амжилт үзүүлсэн юм. Хэтэвч,
          хадгаламж, mining буюу буцаан олголт зэрэг SPC-ийн цогц экосистемийг
          бий болгохоор хөгжүүлэлтийн замналаа төлөвлөж, Монголын зах зээлээс
          цар хүрээгээ Зүүн Өмнөд Азийн 676 сая хэрэглэгчтэй зах зээл рүү
          өөрсдийн үйлчилгээг тэлж, түүнийгээ даган SPC-г хөгжүүлээд байгаа юм.
        </Text>
        <Text style={styles.coinTitle}>8. DAC</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Үл хөдлөх хөрөнгийн
          салбарт гарч буй анхдагч койн. Үл хөдлөхийн салбарын ажилд хамгийн их
          цаг зарцуулдаг ажил болох гэрээний үйл явцыг илүү хөнгөвчлөх DAC
          платформыг хөгжүүлэх зорилготой.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text>{" "}
          Тодорхойгүй.
        </Text>
        <Text style={styles.coinTitle}>9. ELF</Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Онцлог:</Text> Энэхүү койны онцлог
          нь ElfVerse-ийн дижитал хөрөнгөнд суурилсан үйлчилгээнүүд буюу TINY
          Social Learn App, MAP, TINY Games дээрх токены гүйлгээний шимтгэлээс
          цугларах сангаас ногдол ашиг хуваарилах юм. Мөн үйлчилгээнүүдийг
          онцгой эрхтэй ашиглах, хөнгөлөлт, урамшуулал эдлэх эрхтэй.
        </Text>
        <Text style={styles.coinStatus}>
          <Text style={styles.coinStatusBold}>Гаргаж буй компани:</Text> Elf
          Verse - Боловсролын хүртээмжийг нэмэгдүүлж, элит түвшний эзэмших
          боломжтой боловсролыг энтертайнмент аргаар нийтэд хүртээлтэй болгох
          шийдлийг олгохоор зорьж буй компани.
        </Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: "#55b8ae",
          marginBottom: 50,
          paddingVertical: 20,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={require("../../../assets/mag1/1coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/2coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/3coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/4coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/5coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/6coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/7coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/8coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/mag1/9coin.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: "white",
            marginRight: 10,
          }}
          resizeMode="contain"
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Page14;

const styles = StyleSheet.create({
  coinStatus: {
    fontFamily: "Montserrat-regular",
    fontSize: 16,
    marginVertical: 10,
  },
  coinStatusBold: {
    fontFamily: "Montserrat-bold",
  },
  coinTitle: {
    fontFamily: "Montserrat-bold",
    fontSize: 18,
    color: "#55b8ae",
  },
});
