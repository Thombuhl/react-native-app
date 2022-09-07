import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import InputField from "./InputField";

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image
            style={styles.loginImg}
            source={require("../assets/login-splash.jpg")}
            width={250}
            height={250}
          />
        </View>

        <InputField label={"Full Name"} />
        <InputField label={"Email"} />
        <InputField label={"Password"} inputType={"password"} />
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  loginBtn: {
    backgroundColor: "#1E90FF",
    height: 40,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  cred: {
    marginTop: 25,
    marginBottom: 10,
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotPassword: {
    color: "#1E90FF",
    fontSize: 12,
  },
  socialMediaIcons: {
    flexDirection: "row",
    marginTop: 40,
    width: "60%",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    elevation: 4,
    padding: 8,
  },
  registerContainer: {
    flexDirection: "row",
    width: "58%",
    marginTop: 20,
  },
  login: {
    color: "#1E90FF",
  },
});

export default RegisterScreen;
