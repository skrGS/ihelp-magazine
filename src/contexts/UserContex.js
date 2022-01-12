import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { api } from "../../Constants";
const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    await axios.get(`${api}/api/v1/users/logout`);
    setIsLoggedIn(false);
    setToken(null);
    setEmail(null);
    setPhone(null);
    setUserRole(null);
  };

  const login = (phone, password) => {
    axios
      .post(`${api}/api/v1/users/login`, {
        phone: phone,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        loginUserSuccessful(
          result.data.token,
          phone,
          email,
          result.data.user.role
        );
      })
      .catch((err) => {
        loginFailed(err.message);
      });
  };

  const signUp = (phone, email, password) => {
    axios
      .post(`${api}/api/v1/users/register`, {
        phone: phone,
        email: email,
        password: password,
        role: "admin",
      })
      .then((result) => {
        console.log(result.data);
        loginUserSuccessful(result.data.token, email, phone, "admin");
      })
      .catch((err) => {
        loginFailed(err.message);
      });
  };

  const loginFailed = (error) => {
    console.log(error);
    setIsLoggedIn(false);
    setEmail(null);
    setPhone(null);
    setUserRole(null);
  };

  const loginUserSuccessful = async (token, email, phone, userRole) => {
    setToken(token);
    setEmail(email);
    setPhone(phone);
    setUserRole(userRole);
    setIsLoggedIn(true);
    try {
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({ token, phone, email, userRole })
      );
    } catch (err) {
      console.log("Утас руу хадгалж чадсангүй...");
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        login,
        userRole,
        phone,
        email,
        signUp,
        logout,
        isLoading,
        setIsLoading,
        setEmail,
        setPhone,
        setUserRole,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
