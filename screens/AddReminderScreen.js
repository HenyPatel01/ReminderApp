import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image,
  StyleSheet, 
  Alert } 
from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AddReminderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: [],
      title: '',
      date: '',
    };
  }

  addReminder = () => {
  const { title, date, reminders } = this.state;

  if (title && date) {
    const newReminder = {
      id: Math.random().toString(),
      title: title,
      date: date,
    };

    const updatedReminders = [...reminders, newReminder];

    this.setState({
      reminders: updatedReminders,
      title: '',
      date: '',
    });

    this.props.navigation.navigate('Home', {
      reminders: updatedReminders,
    });
  } else {
    Alert.alert('Error', 'Please fill all fields!');
  }
};
  
  render() {
    const { reminders, title, date } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.appTitle}>
          <Text style={styles.title}>Add Reminder</Text>
        </View>
        <Image
          source={require('../assets/reminderIcon.png')}
          style={styles.imageIcon}
        />
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            value={title}
            onChangeText={(text) => this.setState({ title: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter date"
            value={date}
            onChangeText={(text) => this.setState({ date: text })}
          />
          <TouchableOpacity 
            style={styles.addReminderButton}
            onPress={this.addReminder}
          >
            <Text style={styles.buttonText}>Add Reminder</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f4f8',
  },
  appTitle: {
    flex: 0.10,  
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: RFValue(30),
  },
  imageIcon: {
    width: 160,
    height: 160,
    marginLeft: 120,
    alignContent: 'center',
    justifyContent: 'center'
  },
  fieldContainer: {
    flex: 0.75,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    height: RFValue(40),
    marginTop: RFValue(20),
    borderColor: 'black',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'black',
  },
  addReminderButton: {
    marginTop: 55,
    height: RFValue(60),
    backgroundColor: '#5e86c1',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
  color: 'white',
  fontSize: 20,
  },
});
