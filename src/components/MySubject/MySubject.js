import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class MySubject extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.txt}> MySubject </Text>
             </View>
         )
     }
}
 
export default MySubject;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4527a0',
        alignItems: 'center',
        justifyContent: 'center',
        },

        txt:{
            fontWeight: "500",
            fontSize: 20 ,
            color:'#ffffff'
        }




});