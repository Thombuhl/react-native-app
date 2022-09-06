import React, { useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { REACT_APP_GOOGLE_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const INITIAL_REGION = {
  latitude: 40.74869,
  longitude: -73.98573,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02 * (width / height),
};

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

const SetHome = ({ navigation }) => {
  const [home, setHome] = useState();
  // console.log(home);
  const mapRef = useRef(MapView);

  const moveToHome = async (position) => {
    const camera = await mapRef.current.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current.animateCamera(camera, { duration: 1000 });
    }
  };

  const onPlaceSelected = (details, destinationType) => {
    const set = destinationType === "home" ? setHome : null;
    const position = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    };
    set(position);
    moveToHome(position);
  };
  return (
    <>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
        >
          {home && <Marker coordinate={home} />}
        </MapView>
        <View style={styles.searchBar}>
          <Autocomplete
            label="Save your Homebase"
            onPlaceSelected={(details) => {
              onPlaceSelected(details, "home");
            }}
          />
          <TouchableOpacity
            style={styles.homepoint}
            onPress={() => navigation.navigate("Destination")}
          >
            <Text style={styles.homepointText}>Set Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    elevation: 4,
    padding: 8,
    top: Constants.statusBarHeight,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  input: {
    border: "#dcdcdc",
    borderRadius: 3,
    borderWidth: 0.5,
  },
  homepoint: {
    backgroundColor: "#778899",
    paddingVertical: 10,
  },
  homepointText: {
    fontStyle: "italic",
  },
});

export default SetHome;
