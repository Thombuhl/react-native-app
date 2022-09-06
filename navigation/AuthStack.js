import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Onboarding}
        name="Onboarding"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
    </Stack.Navigator>
  );
};

export default AuthStack;
