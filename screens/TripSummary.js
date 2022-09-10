import React, { useRef, useState, useContext, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { REACT_APP_GOOGLE_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
import Constants from "expo-constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Autocomplete from "../components/AutoComplete";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AuthContext } from "../context/AuthContext";

const INITIAL_REGION = {
  latitude: 40.74869,
  longitude: -73.98573,
  latitudeDelta: 5,
  longitudeDelta: 5,
};

const edgePadding = {
  top: 2000,
  right: 2000,
  left: 2000,
  bottom: 2000,
};

const TripSummary = ({ navigation }) => {
  const { fetchPlaces } = useContext(AuthContext);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPlaces();
      setPlaces(data);
    };
    getData();
  }, []);
  const markers = places.map((place) => {
    return { coordinates: { latitude: place.lat, longitude: place.long } };
  });
  console.log(markers);
  const mapRef = useRef(MapView);

  return (
    <View style={styles.container}>
      <View>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          // showsUserLocation={true}
          // followUserLocation={true}
          // zoomEnabled={true}
          initialRegion={INITIAL_REGION}
        >
          {markers.map((marker) => {
            return <Marker coordinate={marker.coordinates} />;
          })}
        </MapView>
        <View style={styles.header}>
          <SafeAreaView>
            <View>
              <Text style={styles.tripSummaryText}>Your Trip So Far</Text>
            </View>
            <TouchableOpacity style={styles.homepoint}>
              <Text style={styles.homepointText}>Trace Places</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.homepoint}
              onPress={() => {
                navigation.navigate("Destination");
              }}
            >
              <Text style={styles.homepointText}>Save Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.homepoint}
              onPress={() => {
                navigation.navigate("Destination");
              }}
            >
              <Text style={styles.homepointText}>Back To Home</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    position: "absolute",
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    padding: 8,
    // alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  tripSummaryText: {
    fontSize: 30,
  },
  homepoint: {
    backgroundColor: "#778899",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 5,
  },
});

export default TripSummary;
