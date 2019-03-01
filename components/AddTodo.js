import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Switch,
  TextInput,
  Platform,
  Button
} from "react-native";

const TINT_COLOR = "rgb(4, 159, 239)";

export default class AddTodo extends React.Component {
    state = {
        text: "",
        ricordaScelta: false
    }

    render() {
    return (
        <View style={styles.wrapper}>
        <View style={[styles.todowrapper, { padding: 15 }]}>
            <TextInput
            // Definito "Controller"
            // Attraverso il "value" possiamo definire il valore del
            // componente ed ogni qualvolta viene fatta la render
            // il nuovo valore viene settato dentro il parametro value
            // del componente, poichè a noi interessa salvarlo allora
            // settiamo value a this.state.text in questo caso...
            // Di default value e' impostato a false (Vale per tutte le
            // tipologie di componenti [es. Switch])
            value={this.state.text}
            style={[styles.textInputStyleOnAndroid, styles.label]}
            placeholder="Name of the item"
            autoFocus
            underlineColorAndroid={TINT_COLOR}
            onChangeText={ (value) => this.setState({text: value})}
            />
        </View>
        <View style={styles.todowrapper}>
            <View style={styles.remindRow}>
            <Text style={styles.label}>Remind me</Text>
            <Switch
                value={this.state.ricordaScelta}
                onTintColor={TINT_COLOR}
                onValueChange={ value => this.setState({ricordaScelta: value})}
            />
            </View>
        </View>
        </View>
    );
    }
}

AddTodo.navigationOptions = ({ navigation }) => ({
  title: "Add Todo",
  headerLeft: <Button title="Cancel" onPress={() => navigation.goBack()} />
});

const styles = StyleSheet.create({
  wrapper: { backgroundColor: "#E9E9EF", flex: 1 },
  todowrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
    backgroundColor: "white"
  },
  textInputStyleOnAndroid:
    Platform.OS === "android" ? { paddingBottom: 7, paddingLeft: 7 } : {},
  remindRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  label: {
    fontSize: 18
  }
});
