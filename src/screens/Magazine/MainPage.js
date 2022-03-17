import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import Page from "./Page";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page10 from "./Page10";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Page13 from "./Page13";
import Page14 from "./Page14";
import Ads1 from "./Ads1";
import Ads2 from "./Ads2";
import Ads3 from "./Ads3";
import Ads4 from "./Ads4";
import Ads5 from "./Ads5";
import Ads6 from "./Ads6";
import Ads7 from "./Ads7.js";
import Ads8 from "./Ads8";
import Ads9 from "./Ads9";
import Ads10 from "./Ads10";
import Ads12 from "./Ads12";
import Ads11 from "./Ads11";
import useMagazine from "../../hooks/useMagazine";
import Loading from "../../components/Loading";

const MainPage = (props) => {
  const { id } = props.route.params;
  const [magazine, error, loading] = useMagazine(id);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!magazine) {
    return null;
  }
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Page data={magazine.face} loading={loading} />
          <Page1 data={magazine.page1} />
          <Page2 data={magazine.page2} />
          <Ads2 data={magazine.ads} />
          <Page3 data={magazine.page3} />
          <Ads11 data={magazine.ads} />
          <Ads3 data={magazine.ads} />
          <Page4 data={magazine.page4} />
          <Ads4 data={magazine.ads} />

          <Ads1 data={magazine.ads} />
          <Page5 data={magazine.page5} />

          <Page6 data={magazine.page6} />

          <Page7 data={magazine.page7} />
          <Ads5 data={magazine.ads} />

          <Page8 data={magazine.page8} />
          <Ads9 data={magazine.ads} />
          <Ads6 data={magazine.ads} />

          <Page9 data={magazine.page9} />

          <Page10 data={magazine.page10} />
          <Ads7 data={magazine.ads} />
          <Page11 data={magazine.page11} />
          <Ads8 data={magazine.ads} />

          <Page12 data={magazine.page12} />
          <Page13 data={magazine.page13} />
          <Page14 data={magazine.page14} />
          <Ads12 data={magazine.ads} />
          <Ads10 data={magazine.ads} />
        </>
      )}
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
