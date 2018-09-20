import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Header } from 'react-native-elements'


export default class Parent extends React.Component {

  constructor(props){
    super(props);
    
  }

  static navigationOptions={
    header:null
  }
  
  render() {
    return (
      <ScrollView>
        

        <Header
          statusBarProps={{ backgroundColor: '#042966' }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Hello : { Parent_Name }', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#1c50a5' }}
        />

       
        <View style={ styles.containerRow}>
          {/* View Notice */}
          <Card         
              containerStyle={styles.card}
              title='Notice'
              image={require('../assert/image/notice.png')}            
          >

              <Text style={{marginBottom: 10}}>
                  You have Some Notices
              </Text>
              <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW'
                  onPress={() => this.props.navigation.navigate('notice')}    
              />
          </Card>

          
          <Card
              containerStyle={styles.card}
              title='Attendence'
              image={require('../assert/image/attendence.png')}            
          >

              <Text style={{marginBottom: 10}}>
                  Your Attendence Record
              </Text>
              <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW'
                  onPress={() => this.props.navigation.navigate('attendence')}    
              />
          </Card>
        </View>   

        {/*second Row*/}
         <View style={ styles.containerRow}>
          {/* View Notice */}
          <Card         
              containerStyle={styles.card}
              title='Time Table'
              image={require('../assert/image/tt.jpg')}            
          >

              <Text style={{marginBottom: 10}}>
                  Your Time Table
              </Text>
              <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW'
                  onPress={() => this.props.navigation.navigate('tt')}    
              />
          </Card>
         
          <Card
              containerStyle={styles.card}
              title='My Subject'
              image={require('../assert/image/subject.png')}            
          >

              <Text style={{marginBottom: 10}}>
                  Your Time Table
              </Text>
              <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW'
                  onPress={() => this.props.navigation.navigate('mySubject')}    
              />
          </Card>
        </View> 

         {/*Third row*/}

          <View style={ styles.containerRow}>
          {/* View Notice */}
          <Card         
              containerStyle={styles.card}
              title='Location'
              image={require('../assert/image/location.png')}            
          >

              <Text style={{marginBottom: 10}}>
                  Location Track
              </Text>
              <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW'
                  onPress={() => this.props.navigation.navigate('location')}    
              />
          </Card>
         
          <Card
              containerStyle={styles.card}
              title='Payment'
              image={require('../assert/image/payment.png')}            
          >

              <Text style={{marginBottom: 10}}>
                  Make Payment and Payment History
              </Text>
              <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW'
                  onPress={() => this.props.navigation.navigate('payment')}    
              />
          </Card>
        </View> 
       

        
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerRow:{
    flex: 1,
    flexDirection: 'row',
    //padding:5
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  card:{
    width: 150,
    height: 300
  }
});
