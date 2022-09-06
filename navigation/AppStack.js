import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SetHome from "../screens/SetHome";
import Destination from "../screens/Destination";
import AppDrawer from "./AppDrawer";
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={AppDrawer} name="Drawer" />
      <Stack.Screen component={SetHome} name="SetHome" />
      <Stack.Screen component={Destination} name="Destination" />
    </Stack.Navigator>
  );
};

export default AppStack;
