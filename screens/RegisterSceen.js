import React, { useState, useContext } from "react";
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
import { AuthContext } from "../context/AuthContext";
import InputField from "./InputField";

const RegisterScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

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
        <InputField
          label={"Full Name"}
          value={fullname}
          onChangeText={(text) => setFullname(text)}
        />
        <InputField
          label={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputField
          label={"Username"}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <InputField
          label={"Password"}
          inputType={"password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            register(fullname, email, username, password);
          }}
        >
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
    justifyContent: "space-around",
    width: "58%",
    marginTop: 20,
  },
  login: {
    color: "#1E90FF",
  },
});

export default RegisterScreen;
