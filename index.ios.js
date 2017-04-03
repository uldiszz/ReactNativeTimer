import React, { Component } from 'react';
import { AppRegistry, Button, View, Alert, Text } from 'react-native';
import AppStyles from './src/appStyles';

class fifteen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
      timeRemaining: 10,
      buttonColor: "#43a774"
    };
  }

  _startTimer() {
    this.setState({timerRunning: true});
    setInterval(() => {
      this.setState({ timeRemaining: this.state.timeRemaining-1 });
    }, 1000);
  }

  _onButtonPress() {
    this._startTimer()
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <View style={AppStyles.timerContainer}>
          <Text>
            {this.state.timeRemaining}
          </Text>
        </View>
        <View style={AppStyles.buttonContainer}>
          <Button
            onPress={this._onButtonPress.bind(this)}
            title="Start"
            color={this.state.buttonColor}
            accessibilityLabel="Learn more about this button"
          />
        </View>
      <View>

      </View>
    </View>
    );
  }
}

AppRegistry.registerComponent('fifteen', () => fifteen);
