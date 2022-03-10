import React from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import useMagazines from "../../hooks/useMagazines";
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
import Ads8 from "./Ads8";
import Ads12 from "./Ads12";
import Ads9 from "./Ads9";
import Ads10 from "./Ads10";

const MainPage = () => {
  const [magazines] = useMagazines();
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      <Page />
      <Ads1 />

      <Page1 />
      <Page2 />
      <Ads2 />

      <Page3 />
      {/* Swisse reclam */}
      <Page4 />
      <Ads3 />

      <Page5 />
      <Ads4 />

      <Page6 />
      <Ads5 />

      <Page7 />
      <Ads6 />

      <Page8 />
      <Ads8 />
      <Page9 />
      <Ads9 />
      <Page10 />
      <Page11 />
      <Page12 />
      <Page13 />
      <Page14 />
      <Ads12 />
      <Ads10 />
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
