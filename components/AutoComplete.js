import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { REACT_APP_GOOGLE_API_KEY } from "@env";
import { Text, StyleSheet } from "react-native";

function Autocomplete({ label, placeholder, onPlaceSelected }) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        fetchDetails
        placeholder={placeholder || ""}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          onPlaceSelected(details);
        }}
        query={{
          key: REACT_APP_GOOGLE_API_KEY,
          language: "en",
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    border: "#dcdcdc",
    borderRadius: 3,
    borderWidth: 0.5,
  },
});

export default Autocomplete;
