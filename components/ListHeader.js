import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from 'react-native-remote-svg'
export default class ListHeader extends React.Component {
    render() {
        return (
        <View style={styles.header}>
            <View style={styles.logo_container}>
                <Image 
                source={require('../images/indexlogo.svg') } 
                style={styles.logo_container}></Image>
            </View>
           
        </View>
        );
    }
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute', 
    backgroundColor: 'transparent', 
    zIndex: 100, 
    top: 15, 
    left: 30, 
    right: 0,
    width: 100, 
    height: 100
  },
  logo_container:{
    flex:1,
    backgroundColor: 'transparent',
    width: 40, 
    height: 40,
  },
});
