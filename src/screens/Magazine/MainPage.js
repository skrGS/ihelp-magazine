import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
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
import Loading from "../../components/Loading";
import axios from "axios";
import { api } from "../../../Constants";

const MainPage = (props) => {
  const { id } = props.route.params;
  const [magazineFace, setMagazineFace] = useState(null);
  const [magazineAds, setMagazineAds] = useState(null);
  const [magazineP1, setMagazineP1] = useState(null);
  const [magazineP2, setMagazineP2] = useState(null);
  const [magazineP3, setMagazineP3] = useState(null);
  const [magazineP4, setMagazineP4] = useState(null);
  const [magazineP5, setMagazineP5] = useState(null);
  const [magazineP6, setMagazineP6] = useState(null);
  const [magazineP7, setMagazineP7] = useState(null);
  const [magazineP8, setMagazineP8] = useState(null);
  const [magazineP9, setMagazineP9] = useState(null);
  const [magazineP10, setMagazineP10] = useState(null);
  const [magazineP11, setMagazineP11] = useState(null);
  const [magazineP12, setMagazineP12] = useState(null);
  const [magazineP13, setMagazineP13] = useState(null);
  const [magazineP14, setMagazineP14] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadMagazine = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${api}/api/v1/magazines/${id}`);
      setMagazineFace(await result.data.data.face);
      setMagazineAds(await result.data.data.ads);
      setMagazineP1(await result.data.data.page1);
      setMagazineP2(await result.data.data.page2);
      setMagazineP3(await result.data.data.page3);
      setMagazineP4(await result.data.data.page4);
      setMagazineP5(await result.data.data.page5);
      setMagazineP6(await result.data.data.page6);
      setMagazineP7(await result.data.data.page7);
      setMagazineP8(await result.data.data.page8);
      setMagazineP9(await result.data.data.page9);
      setMagazineP10(await result.data.data.page10);
      setMagazineP11(await result.data.data.page11);
      setMagazineP12(await result.data.data.page12);
      setMagazineP13(await result.data.data.page13);
      setMagazineP14(await result.data.data.page14);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadMagazine();
  }, []);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!magazineFace) {
    return null;
  } else if (!magazineAds) {
    return null;
  }
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Page data={magazineFace} />
          <Ads1 data={magazineAds} />
          <Page1 data={magazineP1} />
          <Page2 data={magazineP2} />
          <Ads2 data={magazineAds} />
          <Page3 data={magazineP3} />
          <Ads11 data={magazineAds} />
          <Page4 data={magazineP4} />
          <Ads3 data={magazineAds} />
          <Page5 data={magazineP5} />
          <Ads4 data={magazineAds} />
          <Page6 data={magazineP6} />
          <Page7 data={magazineP7} />
          <Ads5 data={magazineAds} />
          <Page8 data={magazineP8} />
          <Ads9 data={magazineAds} />
          <Page9 data={magazineP9} />
          <Ads6 data={magazineAds} />
          <Page10 data={magazineP10} />
          <Ads7 data={magazineAds} />
          <Page11 data={magazineP11} />
          <Ads8 data={magazineAds} />
          <Page12 data={magazineP12} />
          <Page13 data={magazineP13} />
          <Ads12 data={magazineAds} />
          <Page14 data={magazineP14} />
          <Ads10 data={magazineAds} />
        </>
      )}
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
