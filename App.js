import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Login from './src/components/Login';
import Parent from './src/components/Parent';
import Student from './src/components/Student';
import ForgotPassword from './src/components/ForgotPassword';
import Splash from './src/components/Splash';
import Test from './src/components/Test';
import Notice from './src/components/Notice';
import NoticeParent from './src/components/NoticeParent';
import Attendence from './src/components/Attendence/Attendence';
import TimeTable from './src/components/TimeTable/TimeTable';
import MySubject from './src/components/MySubject/MySubject';
import Location from './src/components/Location/Location';
import Payment from './src/components/Payment/Payment';


const Apllication =  createStackNavigator({
    //test: {screen : Test },
    splash : {screen : Splash },
    auth : {screen : Login},
    parent : {screen : Parent},
    student : {screen : Student},
    forgotPassword : {screen : ForgotPassword},
    notice : {screen : Notice},
    noticeParent:{screen: NoticeParent},
    attendence:{screen: Attendence},
    tt:{screen:TimeTable},
    mySubject:{screen:MySubject},
    location:{screen:Location},
    payment:{screen:Payment}

    
  
}, {
    navigationOptions :{
      header : false,
    }
});

export default class App extends React.Component {
  render() {
    return (
      <Apllication/>
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
});
