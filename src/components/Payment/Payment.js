import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class Payment extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.txt}> Payment </Text>
             </View>
         )
     }
}
 
export default Payment;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ad1457',
        alignItems: 'center',
        justifyContent: 'center',
        },
    
    txt:{
        fontWeight: "500",
        fontSize: 20 ,
        color:'#ffffff'
    }
});