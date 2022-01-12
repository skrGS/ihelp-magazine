import React, { useContext } from "react";
import HomeScreen from "../screens/HomeScreen";
import HighlightDetail from "../screens/HighlightDetail";
import WorkDetail from "../screens/WorkDetail";
import MainPage from "../screens/Magazine.js/MainPage";
import AnotherHighlightDetail from "../screens/AnotherHighlightDetail";
import BestPersonDetail from "../screens/BestPersonDetail";
import UserContext from "../contexts/UserContex";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen2 from "../screens/LoginScreen2";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen2 from "../screens/RegisterScreen2";
import Terms from "../components/Terms";
import Notification from "../screens/NotificationScreen";
import PushNotification from "../screens/PushNotificatoin";
import ForgetPassword from "../screens/ForgetPassword";
import ResetPassword from "../screens/ResetPassword";
import SplashScreen from "../screens/SplashScreen";

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
          {state.userRole === "admin" && (
            <Stack.Screen
              name="PushNotification"
              component={PushNotification}
            />
          )}
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
