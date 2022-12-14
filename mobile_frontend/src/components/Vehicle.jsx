import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehicleList from "./VehicleManagement/VehicleList";
import AddVehicle from "./VehicleManagement/AddVehicle";
import ViewVehicleInfo from "./VehicleManagement/ViewVehicleInfo";
import UpdateVehicle from "./VehicleManagement/UpdateVehicle";
import HideVehicle from "./VehicleManagement/HideVehicle";

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
      <Stack.Screen name="UpdateVehicle" component={UpdateVehicle} />
      <Stack.Screen name="HideVehicle" component={HideVehicle} />
    </Stack.Navigator>
  );
}
