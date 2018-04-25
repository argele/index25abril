import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { database} from '../firebase.js';
import Gallery from './Gallery';
import ListSeparator from './ListSeparator';

export default class GalleryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            galeries:[]        
        }
    }
    componentDidMount(){
        let galleriesRef = database.ref('messages');
        let galeries = [];   
        galleriesRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var gallery = childSnapshot.val();
                galeries.push(gallery);
            
            });
            this.setState({
                galeries:galeries
            
            });
        }.bind(this));

    }

    render() {
        let galeriesViews = this.state.galeries.map((g,i) =>{
            return (<View  key={i}>
                    <Gallery gallery={g}>
                    
                    </Gallery>
                    <ListSeparator></ListSeparator>
                </View>)
        });
        return (
        <ScrollView style={styles.container}>
            {galeriesViews}
            
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      
    backgroundColor: '#fff'
  }
});
