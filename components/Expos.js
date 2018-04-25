import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import ListHeader from './ListHeader';
import GalleryList from './GalleryList';

export default class Expos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListHeader></ListHeader>
        <GalleryList></GalleryList>
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
