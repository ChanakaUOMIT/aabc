import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class TimeTable extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.txt}> TimeTable </Text>
             </View>
         )
     }
}
 
export default TimeTable;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01579b',
        alignItems: 'center',
        justifyContent: 'center',
        },

        txt:{
            fontWeight: "500",
            fontSize: 20 ,
            color:'#ffffff'
        }



});