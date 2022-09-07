import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";

export default function InputField({
  label,
  inputType,
  fieldBtn,
  fieldBtnFunc,
  value,
  onChangeText,
}) {
  return (
    <View style={styles.cred}>
      {inputType === "password" ? (
        <TextInput
          placeholder={label}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        ></TextInput>
      ) : (
        <TextInput
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
        ></TextInput>
      )}
      <TouchableOpacity onPress={fieldBtnFunc}>
        <Text style={styles.forgotPassword}>{fieldBtn}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
