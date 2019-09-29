import Weather from "./Weather";
import React, { Component } from "react";
import {Button} from"react-native";

export default class WeatherScreen extends React.Component{
    
    static navigationOptions = ({navigation}) => {
        return{
            headerTitle: 'Weather',
            headerRight: <Button title="Select Zip" onPress={() => {navigation.navigate('ZipCode')}}/>
        }  
    }

    render(){
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode}/>)
    };
}
