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
    <SafeAreaView style={styles.safeContainer}>
      <Image
        source={require("../assets/phone.png")}
        width={1}
        height={1}
        style={styles.loginImg}
      />
      <View style={styles.loginContainer}>
        <InputField
          label={"Username"}
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
      <View style={styles.icons}>
        <View style={styles.socialMediaIcons}>
          <TouchableOpacity>
            <Image
              style={styles.icons}
              source={require("../assets/google-logo.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.socialMediaIcons}>
          <TouchableOpacity>
            <Image
              style={styles.icons}
              source={require("../assets/facebook-logo.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.socialMediaIcons}>
          <TouchableOpacity>
            <Image
              style={styles.icons}
              source={require("../assets/twitter-logo.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
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
  safeContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  loginImg: {
    width: 380,
  },
  loginContainer: {
    width: "75%",
  },
  loginBtn: {
    backgroundColor: "#1E90FF",
    height: 40,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  icons: {
    flexDirection: "row",
  },
  forgotPassword: {
    color: "#1E90FF",
    fontSize: 12,
    justifyContent: "space-between",
  },
  socialMediaIcons: {
    marginTop: 40,
    marginRight: 20,
    marginLeft: 20,
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
