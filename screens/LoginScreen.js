import React, { useContext, useState } from "react";
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

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
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
          label={"Email"}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <InputField
          label={"Password"}
          inputType="password"
          fieldBtn={"Need Help?"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            login(username, password);
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.socialMediaIcons}>
        <Image
          style={styles.icons}
          source={require("../assets/google-logo.png")}
        />
        <Image source={require("../assets/facebook-logo.png")} />
        <Image source={require("../assets/twitter-logo.png")} />
      </View> */}
      <View style={styles.registerContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.register}>Register</Text>
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
    justifyContent: "space-between",
    width: "58%",
    marginTop: 20,
  },
  register: {
    color: "#1E90FF",
  },
});

export default LoginScreen;
