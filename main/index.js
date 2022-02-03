import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View,Dimensions,TextInput,TouchableOpacity,FlatList,ScrollView,Image } from 'react-native';
import Login from '../components/login';
import * as firebase from 'firebase';

var confing ={

        apiKey: "AIzaSyD4hIGzRu4X9prP3_DPW0syktRV4DuqpoI",
        authDomain: "magazin-app-a0b04.firebaseapp.com",
        projectId: "magazin-app-a0b04",
        storageBucket: "magazin-app-a0b04.appspot.com",
        messagingSenderId: "383942291613",
        appId: "1:383942291613:web:be705804bd960b381ba474",
        measurementId: "G-BYBSMJ4HR5"

};
firebase.initializeApp(confing);

const Style = StyleSheet.creat({
container:{

    flex:1,
    backgroundColor : '#fff',
    alignItems:'center',
    justifyContent:'center',
},

});
const RoutConfigs={
    Login:{screen: Login},
    Home:{screen: Home},
    Detail:{screen: Detail},

}
export default StackNavigator(RoutConfigs,StackNavigatorConfing);

const StackNavigatorConfing={
    headerMode:'none'

}