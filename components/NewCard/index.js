import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import baseStyle from '../../baseStyles';
import { addCard } from '../../actions/cardActions';

const styles = StyleSheet.create({
  input: {
    width: 380
  },
  addButton: {
    bottom: 0
  }
});


class NewCard extends Component {
  static propTypes = {

  };

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.deckName}`
  });

  state = {
    question: '',
    answer: ''
  };

  onQuestionChange = question => this.setState({question});

  onAnswerChange = answer => this.setState({answer});

  onAddQuestion = () => {
    if(!(this.state.question && this.state.answer))
      return Alert.alert('All questions have answers, all answers, questions');
    this.props.addCard({...this.state});
    this.setState({
      question: '',
      answer: ''
    });
  };

  render() {
    return (
      <View style={baseStyle.container}>
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
      </View>
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
