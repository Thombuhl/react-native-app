import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContext } from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const fetchPlaces = async () => {
    try {
      let response = await axios.get("http://localhost:3000/api/places", {
        headers: {
          authorization: await AsyncStorage.getItem("userToken"),
        },
      });
      const places = response.data;
      return places;
    } catch (err) {
      console.log(err);
    }
  };

  const createTrip = async (tripName, navigation) => {
    try {
      let response = await axios.post(
        "http://localhost:3000/api/trip",
        {
          title: tripName,
        },
        {
          headers: {
            authorization: await AsyncStorage.getItem("userToken"),
          },
        }
      );
      if (response.data) {
        navigation.navigate("SetHome");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const markPlace = async (markerDetails, isHome, name) => {
    try {
      let response = await axios.post(
        "http://localhost:3000/api/place",
        {
          lat: markerDetails.latitude,
          long: markerDetails.longitude,
          isHome: isHome,
          name: name,
        },
        {
          headers: {
            authorization: await AsyncStorage.getItem("userToken"),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      let response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      let token = response.data.token;
      if (token) {
        setUserToken(token);
        //Get UserInfo with token
        response = await axios.get("http://localhost:3000/api/me", {
          headers: {
            authorization: token,
          },
        });
        const userData = response.data;
        setUserData(userData);
      }
      AsyncStorage.setItem("userToken", token);
    } catch (err) {
      console.log(err);
    }
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

  const register = async (fullname, email, username, password) => {
    console.log(fullname, email, username, password);
    try {
      let response = await axios.post("http://localhost:3000/api/signup", {
        fullName: fullname,
        emailAddress: email,
        username,
        password,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        isLoading,
        userToken,
        userData,
        markPlace,
        createTrip,
        fetchPlaces,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
