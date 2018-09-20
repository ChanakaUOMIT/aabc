import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class Attendence extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.txt}> Attendence </Text>
             </View>
         )
     }
}
 
export default Attendence;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b5e20',
        alignItems: 'center',
        justifyContent: 'center',
        },

    txt:{
        fontWeight: "500",
        fontSize: 20 ,
        color:'#ffffff'
    }
});