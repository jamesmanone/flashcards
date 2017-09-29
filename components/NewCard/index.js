import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions
} from 'react-native';
import baseStyle from '../../baseStyles';
import { addCard } from '../../actions/cardActions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    width: width<420 ? width - 20 : 400
  },
  addButton: {
    bottom: 0
  },
  message: {
    position: 'absolute',
    top: 5,
    paddingVertical: 3,
    width: width<420 ? width - 20 : 400,
    backgroundColor: 'darkgreen',
    color: 'white',
    textAlign: 'center'
  }
});


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
    setTimeout(this.clearMessage, 3000);
  };

  clearMessage = () => this.setState({message: ''});


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
      <KeyboardAvoidingView style={baseStyle.container}
                            behavior='height'>
        {(!!this.state.message && (
          <Text style={styles.message}>{this.state.message}</Text>
        ))}
        <TextInput onChangeText={this.onQuestionChange}
                   value={this.state.question}
                   placeholder='Question'
                   style={[baseStyle.input, styles.input]} />
        <TextInput onChangeText={this.onAnswerChange}
                   value={this.state.answer}
                   placeholder="Answer"
                   style={[baseStyle.input, styles.input]} />
        <TouchableOpacity style={[baseStyle.button, styles.addButton]} onPress={this.onAddQuestion}>
          <Text style={baseStyle.buttonText}>Add Question</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state, ...ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch, {navigation}) =>
  bindActionCreators({
    addCard: addCard(navigation.state.params.deckName)
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
