import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { storage } from '../firebase.js';
import Image from 'react-native-remote-svg'
import ListSeparator from './ListSeparator';
export default class Evento extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imageUri:'./images/logo.png'
        };
        let imageRef = props.evento.Imagen;
        storage.ref('imageneseventos/'+imageRef).getDownloadURL().then(function(url) {
            console.log('Imagen URL',url);
            this.setState({
                imageUri:url
            });
        }.bind(this)).catch(function(error) {
            console.debug('Error',error);
        });
    }
    render() {
        
        if(!this.props.evento){
            return <View></View>;
        }else{
            let even = this.props.evento;
            return (
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={{uri: this.state.imageUri}}
                /> 
                  <ListSeparator></ListSeparator>
                <View style={styles.centro}>
                <Text style={styles.texto}>{even.Nombre}</Text>
                <Text style={styles.name_container}>{even.Galeria}</Text>
                <Text style={styles.texto2}>{even.Cierre}</Text>
                <Image
      style={{ width: 150, 
        height: 40,
  
    }}
      source={ require('../images/gris.svg')}      
      />
      
                </View>
            </View>
            );
        }
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width:400,
    height:450
  },
  image:{
    width:500,
    height:250,
    opacity: 10
  },
  name_container:{
    color:'black',
    fontWeight:'bold',
    fontFamily:'Avenir-Black',
    fontSize: 14
  },
  texto:{
    color:'black',
    fontSize: 17, 
    
    fontFamily:'Avenir'
  },
  texto2:{
    color:'black',
    fontSize: 12, 
    fontFamily:'Avenir'
  },
  centro:{
      flex: 1,
      justifyContent:'center',
    alignItems: 'center',
  }
});
