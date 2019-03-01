import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
// checkbox-blank-outline     vuota
// checkbox-marked            piena

const TINT_COLOR = "rgb(4,159,239)";

export default class Todo extends React.Component{
    state={
      done : this.props.data.done
    }
  
    render() {
      return (
      <TouchableHighlight 
        onPress= {() => this.setState({done: !this.state.done})}
        underlayColor="TINT_COLOR"
      >
        <View style={styles.boxRow}>
  
          { this.state.done ? 
            <MaterialCommunityIcons name="checkbox-marked" size={24} style={styles.colorIcons}></MaterialCommunityIcons> :
            <MaterialCommunityIcons name="checkbox-blank-outline" size={24} style={styles.colorIcons}></MaterialCommunityIcons>
          }
  
          
          <Text style={styles.text}>{this.props.data.text}</Text>
          <TouchableHighlight>
              <Entypo name="chevron-with-circle-right" size={24} color="black"></Entypo> 
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
      );
    }
  }


const styles = StyleSheet.create({
    boxRow:{
        flexDirection : "row",
        height : 50,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginLeft: 10,
        padding: 10,
        backgroundColor:"white",
        alignItems: "center"
    //  borderWidth: 1,
    //  borderColor: "black",
    },
    text:{
        flex: 1,
        fontSize: 18,
        marginLeft: 10
    },
});