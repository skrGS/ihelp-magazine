import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { api } from "../../Constants";
import useAnotherHighlight from "../hooks/useAnotherHighlight";

const AnotherHighlightDetail = (props) => {
  const { id } = props.route.params;
  const [ahighlight, error] = useAnotherHighlight(id);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!ahighlight) {
    return null;
  }
  return (
    <View>
      <Image
        style={{ height: 300, width: 300 }}
        source={{ uri: api + "/upload/" + ahighlight.photo }}
      />
    </View>
  );
};

export default AnotherHighlightDetail;

const styles = StyleSheet.create({});
