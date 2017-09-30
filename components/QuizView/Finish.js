import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import baseStyle from '../../baseStyles';

const Finish = props => (
  <View style={baseStyle.container}>
    <Text style={styles.mainText}>
      That's all! You got {props.grade}% correct.
    </Text>
    <TouchableOpacity style={baseStyle.button}
                      onPress={props.resetDeck}>
      <Text style={baseStyle.buttonText}>Restart</Text>
    </TouchableOpacity>
    <TouchableOpacity style={baseStyle.button}
                      onPress={props.goBack}>
      <Text style={baseStyle.buttonText}>Back to</Text>
      <Text style={baseStyle.buttonText}>{props.deckName}</Text>
    </TouchableOpacity>
  </View>
);

Finish.propTypes = {
  grade: PropTypes.string.isRequired,
  resetDeck: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  deckName: PropTypes.string.isRequired
};

export default Finish;
