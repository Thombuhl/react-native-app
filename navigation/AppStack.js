import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetHome from "../screens/SetHome";
import Destination from "../screens/Destination";
import AppDrawer from "./AppDrawer";
import NewTripScreen from "../screens/NewTripScreen";
import TripSummary from "../screens/TripSummary";
import HomeScreen from "../screens/HomeScreen";
import PastTripsScreen from "../screens/PastTripsScreen";
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={AppDrawer} name="Drawer" />
      <Stack.Screen component={SetHome} name="SetHome" />
      <Stack.Screen component={Destination} name="Destination" />
      <Stack.Screen component={NewTripScreen} name="NewTripScreen" />
      <Stack.Screen component={TripSummary} name="TripSummary" />
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={PastTripsScreen} name="PastTripsScreen" />
    </Stack.Navigator>
  );
};

export default AppStack;
