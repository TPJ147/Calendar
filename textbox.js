import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput, StyleSheet, AsyncStorage } from 'react-native'
import Event from './event';
export default class text extends Component {

    state = {
        datum: '',
        title: '',
     }

     handleTitle = (text) => {
        this.setState({ title: text })
     }
     handleDate = (text) => {
        this.setState({ datum: text })
     }
   //   login = (datum, zeit) => {
   //      alert('Datum: ' + datum + ' Zeit: ' + zeit)
   //   }
      fetchAllItems = async () => {
         try {
            const keys = await AsyncStorage.getAllKeys()
            const items = await AsyncStorage.multiGet(keys)
      
            return items
         } catch (error) {
            console.log(error, "problemo")
         }
      }

      read = () => {
         this.fetchAllItems().then(result => {
            alert(result)  
         })
      }

     getData = async (key) => {
         try {
            const value = await AsyncStorage.getItem(key);
            alert(value);
         } catch (error) {
            console.log("get Data")
         }
      };

     setData = async (key, value) => {
         try {
            await AsyncStorage.setItem(key, value);
         } catch (error) {
            console.log("set Data")
         }
      };

     render() {
        return ( 
        
           <ScrollView style = {styles.container}>
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Title"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handleTitle}/>
              <Event />
              
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.setData(this.datum, this.title)
                 }>   
                 <Text style = {styles.submitButtonText}> Save </Text>
              </TouchableOpacity>
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.read()
                 }>
                 <Text style = {styles.submitButtonText}> Get </Text>
              </TouchableOpacity>
           </ScrollView>
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
  

/*
    function inputHandler (text){
      setEnteredText(text);
    }
  
    function getText(){
      alert(enteredText);
    }
    
    return (
      <View>
        <TextInput
          style={{height: 40}}
          onChangeText={inputHandler}
          value={enteredText}
        />
        <Button title="Get" onPress={getText}/>
      </View>
    );
  }

/*
export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
*/