import React, { useRef, useState, useContext } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Constants from "expo-constants";
import { AuthContext } from "../context/AuthContext";
import Autocomplete from "../components/AutoComplete";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

const INITIAL_REGION = {
  latitude: 40.74869,
  longitude: -73.98573,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};

const SetHome = ({ navigation }) => {
  const { markPlace } = useContext(AuthContext);
  const [home, setHome] = useState();
  const [place, setPlace] = useState("");
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
    setPlace(details.address_components[1].short_name);
    moveToHome(position);
  };

  const destinationCombine = (
    navigation,
    navigateType,
    home,
    isHome = false,
    name
  ) => {
    if (home) {
      markPlace(home, isHome, name);
      setHome("");
    } else {
      Error("Enter origin");
    }

    navigation.navigate(navigateType);
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
            onPress={() =>
              destinationCombine(navigation, "Destination", home, true, place)
            }
          >
            <Text style={styles.homepointText}>Set Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homepoint}
            onPress={() => navigation.navigate("Drawer")}
          >
            <Text style={styles.homepointText}>Back To Main</Text>
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
    borderRadius: 5,
    alignItems: "center",
    margin: 5,
  },
  homepointText: {
    fontStyle: "italic",
  },
});

export default SetHome;
