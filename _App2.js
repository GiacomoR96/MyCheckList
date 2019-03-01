import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, StatusBar } from 'react-native';
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
// checkbox-blank-outline     vuota
// checkbox-marked            piena
StatusBar.setHidden(true);

const todoArray = [
  { text: "Primo elemento", done: false},
  { text: "Secondo elemento", done: true},
  { text: "Terzo elemento", done: false},
  { text: "Quarto elemento", done: true},
  { text: "Quinto elemento", done: false},
  { text: "Elemento X", done: true},
];


class Todo extends React.Component{
  state={
    done : this.props.data.done
  }

  render() {
    return (
    <TouchableHighlight 
      onPress= {() => this.setState({done: !this.state.done})}
      underlayColor="blue">
      <View style={styles.boxRow}>

        { this.state.done ? 
          <MaterialCommunityIcons name="checkbox-marked" size={24} style={styles.colorIcons}></MaterialCommunityIcons> :
          <MaterialCommunityIcons name="checkbox-blank-outline" size={24} style={styles.colorIcons}></MaterialCommunityIcons>
        }

        
        <Text style={styles.text}>{this.props.data.text}</Text>
        <Entypo name="chevron-with-circle-right" size={24} style={styles.colorIcons}></Entypo>

      </View>
    </TouchableHighlight>
    );
  }
}

class App extends React.Component {
  
  renderRow = ({item}) => <Todo data={item}></Todo>;
  _keyExtractor = (item,index) => String(index);

  render() {
    
    const dataList = ["Ciao1", "Ciao2","Ciao3"];
    {/* data={[ {key: 'a'}, {key:'b'}]} 
        renderItem={({item}) => <Text>{item.text}</Text>}*/}
    return (
      <View style={styles.container}>

          <FlatList
            data={todoArray}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderRow}
          >
          </FlatList>

      </View>
    );
  }





}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    backgroundColor: "white",
  //  alignItems: 'center',
  //  justifyContent: 'center',
    
    
  },
  boxRow:{
    flexDirection : "row",
    height : 50,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginLeft: 10,
    padding: 10,
    backgroundColor:"white",
    alignItems: "center"
    /* borderWidth: 1,
    borderColor: "black", */
  },
  text:{
    flex: 1,
    fontSize: 18,
    marginLeft: 10
  },
  colorIcons:{
    color:"blue"
  }
});
