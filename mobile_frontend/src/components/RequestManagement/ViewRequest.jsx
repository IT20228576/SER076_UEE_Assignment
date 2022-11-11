import React, { useState } from "react";
import { Card, Icon } from "@rneui/themed";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ViewRequest({ navigation, route }) {
  const data = route.params.data;
  console.log(data);
  const [from, setFrom] = useState(data.locationFrom);
  const [to, setTo] = useState(data.locationTo);
  const [time, setTime] = useState(data.dateAndTime.toLocaleTimeString());
  const [seats, setSeats] = useState(data.noOfSeats);

  function handleDelete() {
    
  }
  
  return (
    <View>
      <Text style={styles.TextTitle}>Your Ride Request</Text>

      <View style={styles.container1}>
        <Text style={styles.text1}>Ride Details</Text>

        <Card.Divider color="black" style={{ height: 6 }} />

        <View style={styles.row}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <TextInput value={from} style={styles.TextInput} editable={false} />

        <View style={styles.row}>
          <Text style={styles.label}>To</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <TextInput value={to} style={styles.TextInput} editable={false} />

        <View style={styles.row}>
          <Text style={styles.label}>Time?</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <TextInput value={time} style={styles.TextInput} editable={false} />

        <Text style={styles.label}>Seats Needed?</Text>
        <Text style={styles.seatsText}>{seats}</Text>

        <Card.Divider color="black" style={{ height: 8 }} />

        <View style={styles.row}>
          <TouchableOpacity style={styles.updateBtn}>
            <Text style={styles.reqText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.statusBtn}
            onPress={() => navigation.navigate("ViewStatus", {})}
          >
            <Text style={styles.reqText}>View Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn}>
            <Text style={styles.reqText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    top: 0,
  },
  icon: { fontSize: 35 },
  TextTitle: {
    fontSize: 40,
    textAlign: "center",
  },
  container1: {
    backgroundColor: "#D5BEFF",
    margin: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "82%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
  },
  required: {
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 2,
  },
  updateBtn: {
    width: "25%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  statusBtn: {
    width: "35%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#405DF4",
  },
  deleteBtn: {
    width: "25%",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F55151",
  },
  reqText: {
    color: "white",
    fontSize: 20,
  },
  TextInput: {
    height: 50,
    padding: 10,
    borderWidth: 3,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#8B51F5",
    backgroundColor: "white",
    fontSize: 22,
    color: "black",
  },
  seatsText: { fontSize: 45, marginLeft: 50 },
});
