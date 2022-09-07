import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

const CustomDrawerContent = (props) => {
  const { logout } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.drawerListContainer}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.bottomRibbon}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    display: "flex",
  },
  drawerListContainer: {
    height: "100%",
    borderColor: "#909090",
  },
  bottomRibbon: {
    borderColor: "#909090",
    borderWidth: 1,
    height: "70%",
  },
});
export default CustomDrawerContent;
