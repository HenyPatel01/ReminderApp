import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: this.props.route.params
        ? this.props.route.params.reminders || []
        : [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.route.params !== this.props.route.params) {
      const { reminders } = this.props.route.params;

      this.setState({
        reminders: reminders || [],
      });
    }
  }

  deleteReminder = (id) => {
    const { reminders } = this.state;
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);

    this.setState({
      reminders: updatedReminders,
    });
  };

  render() {
    const { reminders } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.appTitle}>
          <Text style={styles.titleText}>Homescreen</Text>
        </View>
        <View style={styles.reminderContainer}>
          <FlatList
            data={reminders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.reminderItem}>
                <Text style={styles.inputText}>{item.title}</Text>
                <Text style={styles.inputText}>{item.date}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => {
                    this.deleteReminder(item.id);
                  }}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
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
    flex: 0.25,
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: RFValue(30),
  },
  reminderContainer: {
    flex: 0.75,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  reminderItem: {
    marginTop: RFValue(20),
    padding: RFValue(10),
    backgroundColor: 'white',
    borderColor: '#86b0ba',
    borderWidth: 2,
    borderRadius: RFValue(10),
  },
  inputText: {
    fontSize: RFValue(17),
  },
  deleteButton: {
    marginTop: 10,
    height: RFValue(45),
    backgroundColor: '#5e86c1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
