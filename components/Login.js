import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends React.Component {

    
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Index Galerias</Text>
        <Button
            title="Login"
            onPress={() =>
                navigate('Expos')
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
});
