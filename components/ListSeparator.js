import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo';
export default class ListSeparator extends React.Component {


    componentDidMount(){


    }

    render() {
        return (
        <View>
        <LinearGradient
        colors={['#D8FF00','#3ee6c1']}
        start={[ 0.1, 0.4]}
        end={[ 0.5, 0.5]}
        style={{width:500,height:5}}
        />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'green',
    height:5
  }
});
