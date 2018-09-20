import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage, 
  Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';



export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
    }
  }

  //Customersize Navigation
  static navigationOptions={
    //disable header
    header: null
    }

  componentDidMount(){
      console.log('log');
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

    var value =await AsyncStorage.getItem('token_id');
    if (value !== null){
      this.props.navigation.navigate('profile');
    }

  }

  render() {
    return (
      
      <View style = {styles.container}>
         <Image
              style={styles.image}
              source={require('../assert/image/logo.png')}
            />
        <Text style={styles.headder}> Login into EMS </Text>
        <TextInput
              style = {styles.TextInput} placeholder = 'Username'
              onChangeText={(username) => this.setState({username})}
              underlineColorAndorid = 'transparent'
        />
        <TextInput
              style = {styles.TextInput} placeholder = 'password'
              onChangeText={(password) => this.setState({password})}
              underlineColorAndorid = 'transparent'
              secureTextEntry={true}
            />
            
            <TouchableOpacity 
                style={styles.btn} 
                onPress={this.login} >                    
                        <Text style={styles.loginTxt}>Login</Text>     
            </TouchableOpacity>

            <TouchableOpacity 
                //style={styles.btn} 
                onPress={() =>this.props.navigation.navigate('forgotPassword')} >                    
                        <Text style={styles.txt}>Forgot Password</Text>     
            </TouchableOpacity>

            {/* <TouchableOpacity 
                //style={styles.btn} 
                onPress={() =>this.props.navigation.navigate('student')} >                    
                        <Text style={styles.txt}>skipp >></Text>     
            </TouchableOpacity>

            <TouchableOpacity 
                //style={styles.btn} 
                onPress={() =>this.props.navigation.navigate('parent')} >                    
                        <Text style={styles.txt}>skipp parent>></Text>     
            </TouchableOpacity> */}

      </View>
      
    );
  }

  register = () =>{
    this.props.navigation.navigate('Register');
  }

  login = () => {
      console.log('Login')
      url = 'https://ems.aladinlabs.com/api/login';
      //console.log(url);
    try {
       // fetch('http://192.168.43.148:3000/users/authenticate',{
        fetch(url,{
         method:'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
          email : this.state.username,
          password : this.state.password,
        })
      })
      .then((response) => response.json())
      .then((response) => {
          if(response.user){
              if(response.user.role == 'Parent'){
                if(response.access_token){
                AsyncStorage.setItem('token_id', response.access_token);
                this.props.navigation.navigate('parent');
                }
                } else if(response.user.role == 'Student'){
                    if(response.access_token){
                    AsyncStorage.setItem('token_id', response.access_token);
                    this.props.navigation.navigate('student');
                    }
                    } else {
                    alert("Invalid User");
                }
            }
        else{
          alert(response.error);
        }
      })
      .done();
    } catch (error) {
        alert('No network Connection Found');
    }
    
  }

    forgotPasswordHandler = () =>{
     this.props.navigation.navigate('forgotPassword');
   }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
  },
  image:{
    width:125,
    height: 125
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  
  headder:{
    fontSize : 24,
    marginBottom: 60,
    //color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  TextInput:{
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15
    //backgroundColor: '#fff',
  },
  btn: {
    marginTop: 5,
    alignSelf: 'stretch',
    backgroundColor: '#130643',
    padding:10,
    alignItems: 'center',
    marginBottom: 5,
    width:300,
    borderRadius: 25,
  },
  loginTxt:{
      fontSize:20,
      color:'#fff',
      fontWeight:'500'
  },

  txt:{
    fontSize:15,
    color:'#130643',
    fontWeight:'500'
},

  forgottenPassword:{
    //alignItems:'left'
  }
});
