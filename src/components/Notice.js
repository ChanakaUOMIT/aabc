import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Header } from 'react-native-elements'


export default class Notice extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      isLoading : true,
      dataSource: null,
    }    
  }

  static navigationOptions={
    header:null
  }

  componentDidMount(){ 
    //return fetch('https://facebook.github.io/react-native/movies.json')
    return fetch(('https://ems.aladinlabs.com/api/notice/get'),{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({
        access_token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZW1zLmFsYWRpbmxhYnMuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTM3Mjk1NTU1LCJleHAiOjE1MzcyOTkxNTUsIm5iZiI6MTUzNzI5NTU1NSwianRpIjoiNEFqNFlka3FyVmY4a1FEYiIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.blINxdH0avG_AJivZALIgbWie6arSycTM02I7FQjHY0",
        email : "student@ems.com",
      })
    })

    .then((response) => response.json() )
    .then( (response) => {
      this.setState({
        isLoading: false,
        dataSource: response,        
      })
      console.log("Done")
      console.log(response)
      console.log(response[0].title)
      console.log(response[0].notice)
      //console.log(responseJson.movies[0].title)



    } )

    .catch((error) =>{
        console.log(error)
    });
  }

  
    
  
  render() {

    if(this.state.isLoading){
      return(
        <View style={styles.containerWait}>
          <ActivityIndicator size="large" color="#0000ff" />
          
        </View>
      )
    }
    else{
      let notices = this.state.dataSource.map((val, key) =>{
        return (
        <View key={key} style={styles.item}>          
          <Card title={val.title} >
            <Text style={{marginBottom: 10}}>
              {val.notice}
            </Text>
            <TouchableOpacity style={styles.dateContainer}>
              <Text style={styles.date}>{val.updated_at}</Text>
            </TouchableOpacity>
          </Card>
          
          
        </View>)
      });

      return (
        <ScrollView style={styles.container}>
        <Header
          statusBarProps={{ backgroundColor: '#042966' }}
          leftComponent={{ icon: 'home', color: '#fff' } }
          centerComponent={{ text: 'Notice Board', style: { color: '#fff' , fontWeight: '500', fontSize: 20} }}
          rightComponent={{ icon: 'code', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#1c50a5' }}
        />

        <TouchableOpacity onPress={() =>this.props.navigation.navigate('student')}>
          <Text>Home</Text>
        </TouchableOpacity>

          {notices}
        </ScrollView>
      );
    }
  }
}



const styles = StyleSheet.create({
  containerWait: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item:{
    flex: 1,
    padding: 20,

  },
  titleContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 20,
    fontWeight: "500",
    justifyContent:'center'
  },

  notice:{
    paddingBottom:20
  },

  dateContainer:{
    backgroundColor: '#1c50a5',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',

  },

  date:{
    fontWeight: '300',
    color: '#ffffff'
  }
});


// <Card
//             title={val.title}
//             >
//             <Text style={{marginBottom: 10}}>
//               {val.notice}
//             </Text>
//             <Button
//               icon={{name: 'code'}}
//               backgroundColor='#03A9F4'
//               buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//               title='VIEW NOW' />
//           </Card>


    // <View style={styles.titleContainer}>
    //         <Text style={styles.title}>{val.title} </Text>
    // </View>          
    // <Text></Text>
    // <Text styles={styles.notice}>{val.notice} </Text>
    // <Text> </Text>