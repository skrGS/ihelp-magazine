import React, { useRef } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { View, Dimensions, StyleSheet, Platform } from "react-native";
import { api } from "../../Constants";
const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = ({ data }) => {
  const carouselRef = useRef(null);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: api + "/upload/" + item.photo }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={data}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041C32",
    marginVertical: 1,
    paddingVertical: 38,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth + 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
});
