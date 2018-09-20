import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';


export default class Splash extends React.Component {

  constructor(props){
    super(props);
    
  }

  //Customersize Navigation
  static navigationOptions={
    //disable header
    header: null
    }

    componentWillMount(){
        setTimeout(() => {
            this.props.navigation.navigate('auth');
        }, 4000)
    }

  
  render() {
    return (
        <View style={styles.container}>           
            <Image
              style={styles.image}
              source={require('../assert/image/logo.png')}
            />
             <Text style={styles.txt}>Education Management</Text>
            <Text style={styles.txt}>System</Text>
            <ActivityIndicator  size="large" color="#0000ff" />
        </View>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt:{
      color: 'darkblue',
      fontSize: 30
  }
});
