import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      let token = response.data.token;
      setUserToken(token);
      AsyncStorage.setItem("userToken", token);
    } catch (err) {
      console.log(err);
    }
    // setUserToken("sdfsdf");
    // Create userToken in AsyncStorage and set from userToken hook.
    // setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    //remove token on logout
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const userLoggedIn = async () => {
    //Get Token
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
