import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from "react-native";

let TouchableCompt = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCompt = TouchableNativeFeedback;
}

const SearchBar = props => {
  const inputChangeHandler = ty => {
    props.onPress(ty);
  };
  return (
    <View style={styles.fieldContainer}>
      {props.data.map(dr => (
        <TouchableCompt
          //onPress={() => inputChangeHandler(dr.type)}
          onPress={inputChangeHandler.bind(this, dr.type)}
          style={styles.typeContent}
        >
          <Text style={styles.typeText}>{dr.type}</Text>
        </TouchableCompt>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    width: "100%"
  },
  typeContent: {
    paddingRight: 15,
    marginVertical: 5,
    borderRightWidth: 1,
    borderColor: "#cccc",
    justifyContent: "center"
  }
});

export default SearchBar;
