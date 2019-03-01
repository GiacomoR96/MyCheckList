import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { Entypo, MaterialIcons, MaterialCommunityIcons  } from "@expo/vector-icons";

import Todo from "./Todo"
const TINT_COLOR = "rgb(4,159,239)";

StatusBar.setHidden(false);
StatusBar.setBarStyle("light-content");

const todoArray = [
  { text: "Consegna a domicilio", done: false},   // Primo elemento, Secondo elemento, etc..
  { text: "Casa da acquistare", done: true},
  { text: "Scuola guida", done: false},
  { text: "Iscrizione piscina", done: true},
  { text: "Corso serale", done: true}
];


export default class TodoList extends React.Component {
  renderRow = ({item}) => <Todo data={item}></Todo>;
  _keyExtractor = (item,index) => String(index);

  render() {
    return (
      <View style={styles.container}>

          <FlatList
            data={todoArray}
            renderItem={this.renderRow}
            keyExtractor={this._keyExtractor}
          >
          </FlatList>

          <Button title="Aggiungi" onPress={() => this.props.navigation.navigate("AddTodo")}></Button>
      </View>
    );
  }

}

TodoList.navigationOptions = ({ navigation }) => ({
    title: "La mia lista",
    headerStyle: {
        backgroundColor: TINT_COLOR
    },
    headerTintColor: "white",
    headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("AddTodo")}>
           <MaterialIcons name="add" size={34} style={styles.icons}></MaterialIcons>
        </TouchableOpacity>
    )
})



const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    backgroundColor: "white",
  //  alignItems: 'center',
    justifyContent: 'center',
      
      
  },
  icons:{
    paddingHorizontal: 15,
    color:"white"
  }
});
