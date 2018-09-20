import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';


export default class Register extends React.Component {

  constructor(props){
    super(props);    
    this.state = {
        email : '',
      }
  }

   //Customersize Navigation
   static navigationOptions={
    //disable header
    header: null
    }

    goBackHandler= () =>{
      console.log("press Go Back");
      this.props.navigation.navigate('auth');
    }
  
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.ems}>EMS</Text>
            <Text style={styles.header}>Forgot Password</Text>
            <Image
              source={require('../assert/image/fp.png')}
            />

            <TextInput
              style = {styles.input} placeholder = 'Enter Your Email'
              onChangeText={(email) => this.setState({email})}
              underlineColorAndorid = 'transparent'
        />

         <TouchableOpacity 
                style={styles.btnSend} 
                onPress={this.send} >                    
                        <Text style={styles.label}>Send</Text>     
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.btnBack} 
                onPress={this.goBackHandler} >                    
                        <Text style={styles.label}>Back</Text>     
            </TouchableOpacity>
        </View>
      
    );
  }

  send = () => {
    console.log('send')
     url = 'https://ems.aladinlabs.com/api/sendPasswordReset';
     console.log(url);
  try {
     // fetch('http://192.168.43.148:3000/users/authenticate',{
      fetch(url,{
       method:'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({
        email : this.state.email,
      })
    })
    .then((response) => response.json())
    .then((response) => {  
        console.log(response);
        console.log(response.error);
        console.log(response.data);

        if(response){
           if(response.data){
               Alert.alert(response.data)
           }
           else{
            alert(response.error);
           }
          }      
    })
    .done();
  } catch (error) {
      alert('No network Connection Found');
  }
  
}
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ems:{
    fontSize: 35,
    fontWeight:'600',
  },

  header:{
    fontSize: 30,
    fontWeight: '500',
    textAlign:'center'
  },
  input:{
    marginRight: 20,
    marginLeft: 20,
    fontSize:20
  },

  btnSend:{
    backgroundColor: 'red',
    padding: 15,
    width:150,
    borderRadius: 50,
    marginVertical: 20,
    textAlign:'center',
    alignItems:'center'
  },

  btnBack:{
    backgroundColor: 'green',
    padding: 15,
    width:150,
    borderRadius: 50,
    textAlign:'center',
    alignItems:'center'
  },

  label:{
    fontWeight:'500',
    color: '#ffffff'
  }
});
