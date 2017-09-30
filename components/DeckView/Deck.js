import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import baseStyle from '../../baseStyles';
import styles from './styles';


const Deck = props => (
  <View style={baseStyle.container}>
    <Text style={styles.title}>{props.deck.title}</Text>
    <Text>{props.deck.questions.length || 0} {props.deck.questions.length === 1 ? 'card' : 'cards'}</Text>
    <TouchableOpacity style={[baseStyle.button, styles.button]} onPress={props.navToAdd}>
      <Text style={baseStyle.buttonText}>Add Card</Text>
    </TouchableOpacity>
    {(props.deck.questions.length && (
      <TouchableOpacity style={[baseStyle.button, baseStyle.buttonInverse]}
                        onPress={props.startQuiz}>
        <Text style={[baseStyle.buttonText, baseStyle.buttonTextInverse]}>Start Quiz</Text>
      </TouchableOpacity>
    )) || (
      <Text style={styles.noCards}>Add some cards so you can quiz yourself!</Text>
    )}
  </View>
);

Deck.propTypes = {
  deck: PropTypes.object,
  startQuiz: PropTypes.func.isRequired,
  navToAdd: PropTypes.func.isRequired
};

export default Deck;
