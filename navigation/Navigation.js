import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../context/AuthContext";

export default function Navigation() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View>
      <ActivityIndicator size={"medium"} />
    </View>;
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
