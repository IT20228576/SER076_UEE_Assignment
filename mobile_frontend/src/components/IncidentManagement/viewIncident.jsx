import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";
import axios from "axios";
import AuthContext from "../../context/UserContext";
import { BASE_URL } from "../constants/Url.json";

export default function ViewIncident({ navigation, id }) {
  // const id = route.params.id;
  const { userId } = useContext(AuthContext);
  const [incidentindividual, setProductdata] = useState([]);
  const [units, setUnits] = useState(2);

  const getdata = async () => {
    try {
      await axios
        .get(BASE_URL + `/incident/view/636eb246f5be579fda8eb06a`)
        .then((res) => {
          if (res.status === 201) {
            setProductdata(res.data);
            console.log(res.data);
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewAllIncidents", {})}
        >
          <Icon name="chevron-left" color="black" iconStyle={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.TextTitle1}>View Incident</Text>
      </View>
<View>

</View>
      <Card.Divider color="black" />

      <View style={styles.container}>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Incident ID : I{incidentindividual._id}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Vehicle No : {incidentindividual.vehicle}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Owner Name : {incidentindividual.vehicleOwner}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Passenger Name : {incidentindividual.passenger}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Incident : {incidentindividual.incident}</Text>
      </View>
      <View style={styles.TextTitle2}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Action : {incidentindividual.action}</Text>
      </View>
      <View style={styles.row}>
          <TouchableOpacity style={styles.resetBtn} 
          onPress={() =>
         navigation.navigate("ViewAllIncidents", { screen: "ViewAllIncidents" })
       }>
            <Text style={styles.resetText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText} 
            onPress={() =>
                      navigation.navigate("UpdateAction", {
                        id: element._id,
                      })
                    }>Update</Text>
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
  },
  icon: { fontSize: 35 },
  TextTitle1: {
    fontSize: 30,
    marginTop: 40,
  },
  TextTitle2: {
    fontSize: 40,
    margin:20,
  },
  container: {
    backgroundColor: "#D5BEFF",
    margin: 20,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "80%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 25,
  },
  text2: {
    fontSize: 20,
  },
  container1: {
    marginTop: 200,
    marginHorizontal: 20,
    elevation: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
  },

  bar: {
    flex: 1,
    height: 3,
    backgroundColor: "grey",
    width: "20%",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  header2: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
  },

  inputView: {
    backgroundColor: "#dbd8d3",
    elevation: 20,
    borderColor: "#f2bc57",
    borderRadius: 10,
    width: "80%",
    height: 45,
    margin: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  button1: {
    width: "40%",
    marginLeft: 70,
  },
  button2: {
    width: "20%",
    float: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 43
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { fontSize: 35 },
  TextTitle1: {
    marginTop: 40,
    marginLeft: 10,
    fontSize: 40,
  },
  container1: {
    backgroundColor: "#D5BEFF",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#D5BEFF",
    borderRadius: 25,
    height: "77%",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 30,
    marginRight: 15
  },
  resetBtn: {
    width: "40%",
    borderRadius: 25,
    marginLeft: 27,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderColor: "#8B51F5",
  },
  addBtn: {
    width: "40%",
    borderRadius: 25,
    marginLeft: 20,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B51F5",
  },
  resetText: {
    color: "black",
    fontSize: 20,
  },
  addText: {
    color: "white",
    fontSize: 20,
  },
  TextInput: {
    height: 50,
    padding: 10,
    borderWidth: 5,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#8B51F5",
    backgroundColor: "white",
  },
});
