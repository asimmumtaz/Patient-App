import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { HospitalNavigator } from "./HospitalNavigation";

const AppNaviagtor = props => {
  return (
    <NavigationContainer>
      <HospitalNavigator />
    </NavigationContainer>
  );
};

export default AppNaviagtor;
