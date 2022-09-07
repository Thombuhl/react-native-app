import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import TripsScreen from "../screens/TripsScreen";
import FriendsScreen from "../screens/FriendsScreen";
import HomeScreen from "../screens/HomeScreen";
import CustomDrawerContent from "../components/CustomDrawer";


const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen component={HomeScreen} name="Home" />
      <Drawer.Screen component={ProfileScreen} name="Profile" />
      <Drawer.Screen component={TripsScreen} name="Trips" />
      <Drawer.Screen component={FriendsScreen} name="Friends" />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
