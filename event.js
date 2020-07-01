import React, {useState, Component} from 'react';
import {View, TouchableOpacity, Platform, Text, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';



//import DeviceInfo from 'react-native-device-info';
//import { getUniqueId, getManufacturer } from 'react-native-device-info';


export default class Timepicker extends Component{
  state={
    date: new Date(),
    mode:'date',
    show:false,
    selectedTime: new Date(),
    currentDate: new Date(),
  }
  setDate = (event, date)=>{
    //date= moment(date).format('MMMM YYYY Do HH:mm');
    this.setState({
      show: Platform.OS ==='ios' ?true:false
  });
  if(this.state.mode == 'date'){
    this.currentDate = moment(date).format('MMMM YYYY Do') || this.state.state;
    this.timepicker();
    /*this.setState({
      show: Platform.OS !=='ios' ?true:false
    });*/
  }else if(this.state.mode == 'time'){
    this.selectedTime = moment(date).format('HH:mm') || this.state.state;
    date = this.currentDate + ' ' +this.selectedTime;

    console.log(date)
  }
  
  };
  show= mode=>{
    this.setState({
      show:true,  
      mode,  
    });        
  }
  datepicker=()=>{
    this.show('date');
  }    
  timepicker=()=>{
    this.show('time');
  }
  render(){
    const{show, date, mode}=this.state;
    return(
      <View style={{marginTop: -20}}>
        <View style={styles.container}>
          <TouchableOpacity
            style = {styles.submitButton}
            onPress={this.datepicker} 
            title="show date picker">
            <Text style = {styles.submitButtonText}> Datum & Uhrzeit</Text>
          </TouchableOpacity>
        </View>
        <View>
        </View>
        {
          show && <DateTimePicker 
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={this.setDate}
          maximumDate={new Date(2300, 10, 20)}
          minimumDate={new Date(1950, 0, 1)}
          />
        }
        <View style={{marginTop: -20}}>
          <Text></Text>
        </View>
      </View> 

      
    )
  }
}
  const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })   
  

  
