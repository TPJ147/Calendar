// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {LocaleConfig} from 'react-native-calendars';

import month from './month';
import agenda from './agenda';

//import agendaView from './agenda';


LocaleConfig.locales['de'] = {
  monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
  monthNamesShort: ['Jan.','Feb.','März','April','Mai','Juni','Juli','Aug','Sept.','Okt.','Nov.','Dez.'],
  dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
  dayNamesShort: ['So.','Mo.','Di.','Mi.','Do.','Fr.','Sa.'],
  today: 'Heute\'heu'
};
LocaleConfig.defaultLocale = 'de';

const Drawer = createDrawerNavigator();

function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={month} />
        <Drawer.Screen
          name="Agenda"
          component={agenda} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;




/*
App= () =>{
  
  return(
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="month" component={month}/>
      <Drawer.Screen name="agenda" component={agendaView}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;



/*
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={()=> navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      title="Go to Details... again"
      onPress={() => navigation.navigate('Details')}
    />
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
    <Button title="Go back" onPress={()=>navigation.goBack()}/>
    <Button 
      title="Go back to first screen in stack"
      onPress={()=> navigation.navigate('Home')}
    />
  </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title : 'Overview'}}  
        />
        <Drawer.Screen name="Details" component={DetailsScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
    
    
  );
}

*/
