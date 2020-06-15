import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ConsultantDetails = props => {
  return (
    <View style={styles.container}>
      <Text>Consultant Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ConsultantDetails;
