import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CustomDrawerContent = (props) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={styles.botRibbon}
        >
          <MaterialIcons name="logout" size={30} />
          <Text style={styles.botSignoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botRibbon: {
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#D3D3D3",
  },
  botSignoutText: {
    paddingLeft: 10,
  },
});
export default CustomDrawerContent;
