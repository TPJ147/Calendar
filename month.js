import React,{Component} from 'react';
import { Button, View, Text, Header, TextInput } from 'react-native';
import {CalendarList, Agenda} from 'react-native-calendars';
import Inputs from './textbox'

export default class month extends Component{

  static navigationOptions = {
    title:"month"
  }
  
  
  render(){
    return(
    <View>  
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={24}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={24}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          //maxDate={new Date()}
          firstDay={1}
          showScrollIndicator={true}
          current={Date()}
          //onDayPress ={textbox}
          //onDayLongPress = {console.log('day pressed')}
        />  
        <Inputs />
      </View>
    )
  }

} 


