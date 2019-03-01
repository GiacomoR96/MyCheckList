import React from "react";
import { StackNavigator } from "react-navigation";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = StackNavigator(
    {   //Route definite (da far eseguire)
        TodoList:{
            screen : TodoList
        },
        AddTodo:{
            screen : AddTodo
        }
    },
    {   //Comportamento della StackNavigator
        initialRouteName: "TodoList",
        //  Questo qui non c'e' di bisogno perchè sotto android 
        //  la navigazione di default e' sempre impostata a modal
        //  (Lo mettiamo comunque per far eseguire la stessa cosa
        //   cosa per iphone)
        mode: "modal"
    }
);

export default App;