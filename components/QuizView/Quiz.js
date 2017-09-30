import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import baseStyle from '../../baseStyles';
import styles from './styles';


const Quiz = props => (
  <View style={baseStyle.container}>
    <Text style={styles.counter}>{props.current+1}/{props.questions.length}</Text>
    <TouchableOpacity onPress={props.onFlipCard}>
      <Text style={styles.mainText}>
        {(
          props.answerVisable &&
          props.questions[props.current].answer
        ) ||
          props.questions[props.current].question
        }
      </Text>
      <Text style={styles.descText}>{props.answerVisable ? 'Answer' : 'Question'}</Text>
      <Text style={styles.tipText}>Tap to view {props.answerVisable ? 'question' : 'answer'}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onPressCorrect}
                      style={[baseStyle.button, styles.buttonCorrect]}>
      <Text style={[baseStyle.buttonText, styles.buttonTextCorrect]}>
        Correct
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onPressIncorrect}
                      style={[baseStyle.button, styles.buttonIncorrect]}>
      <Text style={[baseStyle.buttonText, styles.buttonTextIncorrect]}>
        Incorrect
      </Text>
    </TouchableOpacity>
  </View>
);

Quiz.propTypes = {
  current: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  answerVisable: PropTypes.bool,
  onFlipCard: PropTypes.func.isRequired,
  onPressCorrect: PropTypes.func.isRequired,
  onPressIncorrect: PropTypes.func.isRequired
};

export default Quiz;
