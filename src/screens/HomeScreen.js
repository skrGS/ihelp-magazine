import React from "react";
import { ScrollView, Text } from "react-native";
import useBanner from "../hooks/useBanner";
import useWorks from "../hooks/useWorks";
import useHighlightCat from "../hooks/useHighlightCat";
import Banner from "../components/Banner";
import Magazines from "../components/Magazines";
import HomeHeader from "../components/HomeHeader";
import HighCategory from "../components/HighCategory";
import BestPerson from "../components/BestPerson";
import AnotherHiglight from "../components/AnotherHiglight";
import Works from "../components/Works";
import useAnotherHighlights from "../hooks/useAnotherHighlights";
import useSpecials from "../hooks/useSpecials";
import Footer from "../components/Footer";
import useMagazines from "../hooks/useMagazines";
const HomeScreen = () => {
  const [banner, bannerError] = useBanner();
  const [magazines] = useMagazines();
  const [highlightCats] = useHighlightCat();
  const [works] = useWorks();
  const [ahighlights] = useAnotherHighlights();
  const [specials] = useSpecials();
  const message = "Request failed with status code 404";
  return (
    <>
      <HomeHeader />
      <ScrollView style={{ backgroundColor: "grey" }}>
        <Banner data={banner} />

        <Magazines data={magazines} />
        {highlightCats.map((cat, index) => (
          <HighCategory data={cat} key={index} />
        ))}
        <AnotherHiglight data={ahighlights} />
        <BestPerson data={specials} />
        <Works data={works} />
        <Footer />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
