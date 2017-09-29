import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import baseStyle from '../../baseStyles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    position: 'relative'
  },
  counter: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 26
  },
  mainText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red'
  }
});


class QuizView extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired
  };

  static navigationOptions = {
    title: 'Quiz'
  };

  state = {
    current: 0,
    correct: 0,
    done: false,
    answerVisable: false
  };

  onPressCorrect = () => {
    if(this.state.current === this.props.questions.length-1) {
      this.setState(state => ({
        correct: state.correct+1,
        done: true
      }));
    } else {
      this.setState(state => ({
        correct: state.correct+1,
        current: state.current+1
      }));
    }
  };

  onPressIncorrect = () => {
    if(this.state.current === this.props.questions.length-1) {
      this.setState({done: true});
    } else {
      this.setState(state => {
        current: state.current+1
      });
    }
  };

  onFlipCard = () => this.setState(state => ({answerVisable: !state.answerVisable}));

  getGrade = () => this.state.correct/this.props.questions.length*100;

  render() {
    if(this.state.done) return (
      <View style={baseStyle.container}>
        <Text>That's all! You got {this.getGrade().toFixed(1)}% correct.</Text>
      </View>
    );
    else return (
      <View style={[baseStyle.container, styles.container]}>
        <Text style={styles.counter}>{this.state.current+1}/{this.props.questions.length}</Text>
        <TouchableOpacity onPress={this.onFlipCard}>
          <Text style={styles.mainText}>
            {(
              this.state.answerVisable &&
              this.props.questions[this.state.current].answer
            ) ||
              this.props.questions[this.state.current].question
            }{((this.state.answerVisable || this.props.questions[this.state.current].question.endsWith('?'))
            || '?'
            )}
          </Text>
          <Text style={styles.descText}>{this.state.answerVisable ? 'Answer' : 'Question'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressCorrect}>
          <Text>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressIncorrect}>
          <Text>
            Incorrect
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const mapStateToProps = (state, {navigation}) => ({
  questions: state[navigation.state.params.deckName].questions
});

export default connect(mapStateToProps)(QuizView);
