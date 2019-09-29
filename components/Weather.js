import React from 'react';
import Forecast from './Forecast'
import { StyleSheet, Text, View ,ImageBackground ,backdrop} from 'react-native';

export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    forecast: {
    main: 'Main', description: 'Description', temp: 0
    
    }
    }
    }

    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
            this.setState(
            {
                forecast: {
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                }
            });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
       
    componentDidMount = () => this.fetchData()
        
    render() {
    return (
    <View style={styles.container}>
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.subContainer}>
                <Text style={styles.zipCode}>Zip code is {this.props.zipCode}.</Text>
                <Forecast {...this.state.forecast} />
            </View>
        </ImageBackground>
    </View>
    );
    }
   }
  
const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
    },

    subContainer: {
        alignItems: 'center',
        backgroundColor: 'gray',
        opacity : 0.5
    },

    backdrop: { 
        width: '100%', 
        height: '100%'
    },
    zipCode: { 
        marginTop: 50,
        fontSize: 20  , 
        fontWeight: 'bold', 
        color: 'white', 
    } 
});