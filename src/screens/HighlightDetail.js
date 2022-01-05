import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { api } from "../../Constants";
import useHighlight from "../hooks/useHighlight";

const fullWidth = Dimensions.get("window").width;
const fullHeight = Dimensions.get("window").height;
const HighlightDetail = (props) => {
  let { item } = props.route.params;
  const [highlight, error] = useHighlight(item.id);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!highlight) {
    return null;
  }
  return (
    <View>
      <Image
        style={{ height: 300, width: fullWidth }}
        source={{ uri: api + "/upload/" + highlight.photo }}
      />
    </View>
  );
};

HighlightDetail.sharedElements = (route, otherRoute, showing) => {
  const { e } = route.params;
  return [
    {
      id: `item.${e.key}.image`,
    },
  ];
};

export default HighlightDetail;
