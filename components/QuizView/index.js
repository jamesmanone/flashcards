import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Finish from './Finish';
import Quiz from './Quiz';


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
      <Finish grade={this.getGrade().toFixed(1)}
              resetDeck={this.resetDeck}
              goBack={()=>this.props.navigation.goBack()}
              deckName={this.props.navigation.state.params.deckName} />
    );
    else return (
      <Quiz current={this.state.current}
            questions={this.props.questions}
            answerVisable={this.state.answerVisable}
            onFlipCard={this.onFlipCard}
            onPressIncorrect={this.onPressIncorrect}
            onPressCorrect={this.onPressCorrect} />
    );
  }

}

const mapStateToProps = (state, {navigation}) => ({
  questions: state[navigation.state.params.deckName].questions,
  navigation
});

export default connect(mapStateToProps)(QuizView);
