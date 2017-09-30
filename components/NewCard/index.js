import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCard } from '../../actions/cardActions';
import CardForm from './CardForm';


class NewCard extends Component {
  static propTypes = {
    addCard: PropTypes.func.isRequired
  };

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.deckName}`
  });

  state = {
    question: '',
    answer: '',
    message: ''
  };

  onQuestionChange = question => this.setState({question});

  onAnswerChange = answer => this.setState({answer});

  afterAddQuestion = () => {
    this.setState({
      question: '',
      answer: '',
      message: 'Question Added!'
    });
    this.timeout = setTimeout(this.clearMessage, 3000);
  };

  clearMessage = () => this.setState({message: ''});

  componentWillUnmount() {
    if(this.timeout) clearTimeout(this.timeout);
  }


  onAddQuestion = () => {
    if(!(this.state.question && this.state.answer))
      return Alert.alert('All questions have answers; all answers, questions');
    const newCard = {...this.state};
    newCard.answer = newCard.answer.trim();
    newCard.question = newCard.question.trim();
    this.props.addCard(newCard, this.afterAddQuestion);
  };

  render() {
    return (
      <CardForm message={this.state.message}
                question={this.state.question}
                answer={this.state.answer}
                onQuestionChange={this.onQuestionChange}
                onAnswerChange={this.onAnswerChange}
                onAddQuestion={this.onAddQuestion} />
    );
  }
}

const mapStateToProps = (_, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch, {navigation}) =>
  bindActionCreators({
    addCard: addCard(navigation.state.params.deckName)
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
