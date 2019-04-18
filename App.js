import React, { Component } from "react";
import {
  Animated,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet
} from "react-native";

export default class App extends Component {
  constructor() {
    super();

    this.moveAnimation = new Animated.ValueXY({ x: 0, y: 50 });
  }

  componentDidMount() {
    this._moveNext();
  }

  _moveNext = () => {
    Animated.spring(this.moveAnimation, {
      toValue: { x: 200, y: 50, duration: 10000 }
    }).start();
  };

  _movePrev = () => {
    Animated.spring(this.moveAnimation, {
      toValue: { x: -200, y: 50, duration: 10000 }
    }).start();
  };

  render() {
    const { button, container, buttonnContainer } = styles;

    return (
      <View style={container}>
        <Animated.View
          style={[buttonnContainer, this.moveAnimation.getLayout()]}
        >
          <TouchableWithoutFeedback style={button} onPress={this._movePrev}>
            <Text style={styles.buttonText}>Left</Text>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonnContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: "red",
    width: 150,
    height: 100
  },
  button: {
    paddingTop: 24,
    paddingBottom: 24
  },
  buttonText: {
    fontSize: 24,
    color: "#333",
    color: "white"
  }
});
