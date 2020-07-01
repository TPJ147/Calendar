import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Month from './month';

const testIDs = require('./testIDs');


export default class agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        '2020-05-22': [{name: 'Schlafen'}],
        '2020-05-23': [{name: 'Essen'}],
        '2020-05-24': [{name: 'Trainieren'}],
        '2020-05-25': [{name: 'Coral'}]
      }
    };
  }

  render() {
    return (
      <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        current={Date()}
        //selected={'2020-01-01'}
        renderItem={this.renderItem.bind(this)}
        //renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        firstDay={1}
        theme={{
          agendaTodayColor: '#9a73ef'
        }}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    });
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        //testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: item.height}]} 
        onPress={() => Alert.alert(<Month/>)}
      >
        <Text>Leer</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});