import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ConsultantList from "../Screens/ConsultantList";
import ConsultantDetails from "../Screens/ConsultantDetails";
import BookingScreen from "../Screens/Booking";
import OrderingScreen from "../Screens/Ordering";
import PaymentScreen from "../Screens/PaymentScreen";

const mainStack = createStackNavigator();

export const HospitalNavigator = props => {
  return (
    <mainStack.Navigator>
      <mainStack.Screen name="ConsultList" component={ConsultantList} />
      <mainStack.Screen name="Details" component={ConsultantDetails} />
      <mainStack.Screen name="Booking" component={BookingScreen} />
    </mainStack.Navigator>
  );
};

// const AppNaviagtor = () => {
//   return (
//     <NavigationContainer>
//       <hospitalNavigator />
//     </NavigationContainer>
//   );
// };

// export default AppNaviagtor;
