import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddIncident from "./IncidentManagement/AddIncident";
import UpdateIncident from "./IncidentManagement/UpdateIncident";
import ViewIncident from "./IncidentManagement/viewIncident";
import ViewAllIncidents from "./IncidentManagement/viewAllIncidents";
import AddAction from "./IncidentManagement/addAction";
import UpdateAction from "./IncidentManagement/updateAction";

export default function RequestNavigationStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddIncident" component={AddIncident} />
      <Stack.Screen name="UpdateIncident" component={UpdateIncident} />
      <Stack.Screen name="ViewIncident" component={ViewIncident} />
      <Stack.Screen name="ViewAllIncidents" component={ViewAllIncidents} />
      <Stack.Screen name="AddAction" component={AddAction} />
      <Stack.Screen name="UpdateAction" component={UpdateAction} />
    </Stack.Navigator>
  );
}
