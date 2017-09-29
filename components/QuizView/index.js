import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import baseStyle from '../../baseStyles';

const styles = StyleSheet.create({
  counter: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 26
  },
  dataView: {
    marginVertical: 20
  },
  mainText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15
  },
  descText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
    marginVertical: 15
  },
  tipText: {
    color: '#999',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 15
  },
  buttonCorrect: {
    borderColor: 'darkgreen'
  },
  buttonTextCorrect: {
    color: 'darkgreen'
  },
  buttonIncorrect: {
    borderColor: 'red'
  },
  buttonTextIncorrect: {
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
      this.setState(state => ({
        current: state.current+1
      }));
    }
  };

  onFlipCard = () => this.setState(state => ({answerVisable: !state.answerVisable}));

  getGrade = () => this.state.correct/this.props.questions.length*100;

  resetDeck = () => this.setState({
    current: 0,
    correct: 0,
    done: false,
    answerVisable: false
  });



  render() {
    if(this.state.done) return (
      <View style={baseStyle.container}>
        <Text style={styles.mainText}>
          That's all! You got {this.getGrade().toFixed(1)}% correct.
        </Text>
        <TouchableOpacity style={baseStyle.button}
                          onPress={this.resetDeck}>
          <Text style={baseStyle.buttonText}>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={baseStyle.button}
                          onPress={()=>this.props.navigation.goBack()}>
          <Text style={baseStyle.buttonText}>Back to {this.props.navigation.state.params.deckName}</Text>
        </TouchableOpacity>
      </View>
    );
    else return (
      <View style={baseStyle.container}>
        <Text style={styles.counter}>{this.state.current+1}/{this.props.questions.length}</Text>
        <TouchableOpacity onPress={this.onFlipCard}>
          <Text style={styles.mainText}>
            {(
              this.state.answerVisable &&
              this.props.questions[this.state.current].answer
            ) ||
              this.props.questions[this.state.current].question
            }
          </Text>
          <Text style={styles.descText}>{this.state.answerVisable ? 'Answer' : 'Question'}</Text>
          <Text style={styles.tipText}>Tap to view {this.state.answerVisable ? 'question' : 'answer'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressCorrect}
                          style={[baseStyle.button, styles.buttonCorrect]}>
          <Text style={[baseStyle.buttonText, styles.buttonTextCorrect]}>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressIncorrect}
                          style={[baseStyle.button, styles.buttonIncorrect]}>
          <Text style={[baseStyle.buttonText, styles.buttonTextIncorrect]}>
            Incorrect
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const mapStateToProps = (state, {navigation}) => ({
  questions: state[navigation.state.params.deckName].questions,
  navigation
});

export default connect(mapStateToProps)(QuizView);
