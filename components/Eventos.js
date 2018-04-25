import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import ListHeader from './ListHeader';
import EventoList from './EventoList';

export default class Eventos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListHeader></ListHeader>
        <EventoList></EventoList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});
