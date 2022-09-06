import React, { useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { REACT_APP_GOOGLE_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
import Constants from "expo-constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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

const edgePadding = {
  top: 200,
  right: 50,
  left: 50,
  bottom: 30,
};
const Destination = () => {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [directions, setDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDurtation] = useState(0);

  // console.log(home);
  const mapRef = useRef(MapView);

  const moveToHome = async (position) => {
    const camera = await mapRef.current.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current.animateCamera(camera, { duration: 1000 });
    }
  };

  const traceRoute = (args) => {
    if (args) {
      setDistance(args.distance);
      setDurtation(args.duration);
    }
  };

  const showRoute = () => {
    if ((origin, destination)) {
      setDirections(true);
      mapRef.current.fitToCoordinates([origin, destination], { edgePadding });
    }
  };

  const onPlaceSelected = (details, destinationType) => {
    const set = destinationType === "origin" ? setOrigin : setDestination;
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
          {origin && <Marker coordinate={origin} />}
          {destination && <Marker coordinate={destination} />}
          {directions && origin && destination && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={REACT_APP_GOOGLE_API_KEY}
              strokeColor="blue"
              strokeWidth={2}
              onReady={traceRoute}
            />
          )}
        </MapView>
        <View style={styles.searchBar}>
          <Autocomplete
            label="Start"
            onPlaceSelected={(details) => {
              onPlaceSelected(details, "origin");
            }}
          />
          <Autocomplete
            label="Destination"
            onPlaceSelected={(details) => {
              onPlaceSelected(details, "destination");
            }}
          />
          <TouchableOpacity style={styles.homepoint} onPress={showRoute}>
            <Text style={styles.homepointText}>Find Route</Text>
          </TouchableOpacity>
          {distance && duration ? (
            <View>
              <View style={styles.transportation}>
                <TouchableOpacity style={styles.transportationIcons}>
                  <MaterialCommunityIcons name="walk" size={35} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.transportationIcons}>
                  <MaterialCommunityIcons name="bike" size={35} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.transportationIcons}>
                  <MaterialCommunityIcons name="bus" size={35} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.transportationIcons}>
                  <MaterialCommunityIcons name="airplane" size={35} />
                </TouchableOpacity>
              </View>
              <View style={styles.destinationDetails}>
                <Text>Distance: {distance.toFixed(2)}</Text>
                <Text>Duration: {Math.ceil(duration)}min</Text>
                <TouchableOpacity style={styles.destinationDetailsBtn}>
                  <Text>ROAM</Text>
                  <MaterialIcons name="chevron-right" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
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
  },
  homepointText: {
    fontStyle: "italic",
  },
  transportation: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  transportationIcons: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    elevation: 4,
    padding: 8,
  },
  destinationDetails: {
    justifyContent: "space-between",
  },
  destinationDetailsBtn: {
    flexDirection: "row",
    backgroundColor: "#778899",
    width: 60,
    borderRadius: 5,
  },
});

export default Destination;