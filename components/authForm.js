import React from "react";
import { StyleSheet, SafeAreaView, TextInput, Button } from "react-native";

const handleSubmit = () => {
  ev.preventDefault();
};

const AuthForm = () => {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  return (
    <SafeAreaView>
      <TextInput
        value={username}
        placeholder="Username"
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        value={password}
        placeholder="Password"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Submit" onPress={() => handleSubmit()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AuthForm;
