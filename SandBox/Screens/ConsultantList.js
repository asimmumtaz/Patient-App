import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TextInput
} from "react-native";

import ConsultantCard from "../Components/Patient/ConsultantCard";
import { DOCTOR } from "../data/Dummy_data";
import { DOCTORTYPE } from "../data/Dummy_data";
import ConsultantFilters from "../Components/UI/ConsultantFilters";

const renderListItem = itemData => {
  return (
    <View>
      <ConsultantCard
        imageUri={itemData.item.imageUri}
        name={itemData.item.name}
        type={itemData.item.type}
        fees={itemData.item.fees}
      />
    </View>
  );
};

const ConsultantList = props => {
  const [textInput, setTextInput] = useState("");
  const [filterType, setFilterType] = useState("All");
  let doctorData = "";

  if ((textInput === "" || textInput == "All") && filterType === "All") {
    doctorData = DOCTOR;
  } else {
    const result = DOCTOR.filter(dr => dr.type === filterType);
    doctorData = result;
  }
  const onFilterHandler = filter => {
    setFilterType(filter);
    console.log(filter);
  };

  const textInputHandler = text => {
    setTextInput(text);
    console.log(textInput);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            onChangeText={textInputHandler}
            value={textInput}
            placeholder="Type"
            keyboardType="default"
          />
        </View>
        <Button title="check" onPress={() => {}} />
      </View>
      <ConsultantFilters data={DOCTORTYPE} onPress={onFilterHandler} />
      <FlatList data={doctorData} renderItem={renderListItem} numColumns={3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
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
  },
  typeText: {
    fontSize: 14,
    textAlign: "center"
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //marginVertical: 40,
    marginBottom: 15,
    height: "5%"
  },
  searchBar: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: "100%",
    width: "60%",
    borderColor: "#cccc",
    borderBottomWidth: 2
    // borderRadius: 50
  }
});

export default ConsultantList;
