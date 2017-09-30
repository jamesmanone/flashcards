import React from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import baseStyle from '../../baseStyles';

const CardForm = props => (
  <KeyboardAvoidingView style={baseStyle.container}
                        behavior='height'>
    {(!!props.message && (
      <Text style={styles.message}>{props.message}</Text>
    ))}
    <TextInput onChangeText={props.onQuestionChange}
               value={props.question}
               placeholder='Question'
               style={baseStyle.input} />
    <TextInput onChangeText={props.onAnswerChange}
               value={props.answer}
               placeholder="Answer"
               style={baseStyle.input} />
    <TouchableOpacity style={[baseStyle.button, styles.addButton]} onPress={props.onAddQuestion}>
      <Text style={baseStyle.buttonText}>Add Question</Text>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);

CardForm.propTypes = {
  message: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  onQuestionChange: PropTypes.func.isRequired,
  onAnswerChange: PropTypes.func.isRequired,
  onAddQuestion: PropTypes.func.isRequired
}

export default CardForm;
