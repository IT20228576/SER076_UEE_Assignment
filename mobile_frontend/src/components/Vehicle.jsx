import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehicleList from "./vehicleManagement/VehicleList";
import AddVehicle from "./vehicleManagement/AddVehicle";
import ViewVehicleInfo from "./vehicleManagement/ViewVehicleInfo";

export default function VehicleNavigationStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="VehicleList" component={VehicleList} />
      <Stack.Screen name="AddVehicle" component={AddVehicle} />
      <Stack.Screen name="ViewVehicleInfo" component={ViewVehicleInfo} />
    </Stack.Navigator>
  );
}
