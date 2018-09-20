import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class Location extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.txt}> Location </Text>
             </View>
         )
     }
}
 
export default Location;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d84315',
        alignItems: 'center',
        justifyContent: 'center',
        },
    
    txt:{
        fontWeight: "500",
        fontSize: 20 ,
        color:'#ffffff'
    }
});