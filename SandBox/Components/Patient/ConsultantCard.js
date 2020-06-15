import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

let TouchableCompt = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCompt = TouchableNativeFeedback;
}

const ConsultantCard = props => {
  return (
    <TouchableCompt
      onPress={() => {
        console.log(props.name);
      }}
    >
      <View style={styles.mainContainer}>
        {/* <View style={styles.imageContainer}> */}
        <Image source={{ uri: props.imageUri }} style={styles.image} />
        {/* </View> */}
        <Text style={styles.name} numberOfLines={2}>
          {props.name}
        </Text>
        <Text style={styles.type}>{props.type}</Text>
        <Text style={styles.fees}>{props.fees} SAR/30mins</Text>
      </View>
    </TouchableCompt>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0.2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 160,
    width: 110,
    marginHorizontal: 8,
    marginVertical: 15
  },
  name: {
    fontSize: 14,
    textAlign: "center",
    paddingLeft: 5
  },
  type: {
    paddingTop: 3,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold"
  },
  fees: {
    paddingTop: 3,
    fontSize: 12,
    textAlign: "center",
    marginBottom: 5
  },
  image: {
    width: "70%",
    height: "50%",
    marginHorizontal: 15,
    marginVertical: 4,
    overflow: "hidden",
    marginBottom: 5,
    borderRadius: 40,
    backgroundColor: "#ccc",
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "white"
  },
  imageContainer: {}
});

export default ConsultantCard;
