import React from 'react';
// import Weather from './Weather'
import { StyleSheet, Text, View ,ImageBackground ,backdrop} from 'react-native';
import { white } from 'ansi-colors';

export default class Forecast extends React.Component {
 render() {
 return (
    <View  style={styles.container}>
        <Text style={styles.main}>{this.props.main}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
        <Text style={styles.temp}>{this.props.temp} °C</Text>
    </View>
 );
 }
}
//Forecast.js
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
     },

     main :{
        marginTop: 20,
        marginBottom: 20,
        fontSize : 40,
        fontWeight: 'bold',
        color: 'white',
    },

    description :{
        marginTop: 10,
        marginBottom: 10,
        fontSize : 20,
        fontWeight: 'bold',
        color: 'white',
    },

    temp :{
        marginTop: 20,
        marginBottom: 20,
        fontSize : 30,
        fontWeight: 'bold',
        color: 'white',
    }
   });