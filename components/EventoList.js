import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { database} from '../firebase.js';

import Evento from './Evento';
import ListSeparator from './ListSeparator';

export default class EventoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos:[]
        }
    }
    componentDidMount(){
        let eventosRef = database.ref('eventos');
        let eventos = [];
        eventosRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var evento = childSnapshot.val();
                eventos.push(evento);
            });
            this.setState({
                eventos:eventos
            });
        }.bind(this));
    }
    render() {
        let eventosViews = this.state.eventos.map((g,i) =>{
            return (<View  key={i}>
                    <Evento evento={g}>
                    
                    </Evento>
                </View>)
        });
        return (
        <ScrollView style={styles.container}>
            {eventosViews}
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
