import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import HighlightDetail from "../screens/HighlightDetail";
import WorkDetail from "../screens/WorkDetail";
import MainPage from "../screens/Magazine/MainPage";
import AnotherHighlightDetail from "../screens/AnotherHighlightDetail";
import BestPersonDetail from "../screens/BestPersonDetail";
import UserContext from "../contexts/UserContex";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen2 from "../screens/LoginScreen2";
import RegisterScreen2 from "../screens/RegisterScreen2";
import Terms from "../components/Terms";
import Notification from "../screens/NotificationScreen";
import ForgetPassword from "../screens/ForgetPassword";
import ResetPassword from "../screens/ResetPassword";
import SplashScreen from "../screens/SplashScreen";
import NotificationDetailScreen from "../screens/NotificationDetailScreen";
import Page3 from "../screens/Magazine/Page3";
import Page4 from "../screens/Magazine/Page4";
import Page10 from "../screens/Magazine/Page10";
import Page9 from "../screens/Magazine/Page9";
import Page5 from "../screens/Magazine/Page5";
import Page7 from "../screens/Magazine/Page7";
import Page11 from "../screens/Magazine/Page11";
import Page12 from "../screens/Magazine/Page12";
import Page13 from "../screens/Magazine/Page13";
import Page14 from "../screens/Magazine/Page14";
import useMagazine from "../hooks/useMagazine";
import Ariunzaya from "../components/Ariunzaya";
import Binance from "../components/Binance";
import Odko from "../components/Odko";
import Bolor from "../components/Bolor";
import Top from "../components/Top";
import TopTech from "../components/TopTech";
import Coin from "../components/Coin";
import Bayka from "../components/Bayka";
import Bataa from "../components/Bataa";
import Deegii from "../components/Deegii";
const Stack = createNativeStackNavigator();

const MyStackNavigator = () => {
  const state = useContext(UserContext);
  if (state.isLoading === true) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      {state.isLoggedIn ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HighlightDetail"
            component={HighlightDetail}
            options={{ headerShown: false }}
            sharedElementsConfig={(route, otherRoute, showing) => {
              const { item } = route.params;
              return [`item.${item.id}.photo`];
            }}
          />
          <Stack.Screen
            name="WorkDetail"
            component={WorkDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MagazineDetail"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AnotherHighlightDetail"
            component={AnotherHighlightDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BestPersonDetail"
            component={BestPersonDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotifacationScreen"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotificationDetailScreen"
            component={NotificationDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ariuk"
            component={Ariunzaya}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bolor"
            component={Bolor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ceos"
            component={Top}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Binance"
            component={Binance}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Toptech"
            component={TopTech}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Odko"
            component={Odko}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Topcoin"
            component={Coin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bayka"
            component={Bayka}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Davaa"
            component={Bataa}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Deegii"
            component={Deegii}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Terms"
            component={Terms}
            // options={{ headerShown: false }}
            options={() => ({
              title: "Үйлчилгээний нөхцөл",
            })}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MyStackNavigator;
