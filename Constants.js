import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const api = "http://192.168.1.67:4040";

export const fullWidth = { windowWidth };
export const fullHeight = { windowHeight };
