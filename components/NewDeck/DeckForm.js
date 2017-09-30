import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  KeyboardAvoidingView,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import baseStyle from '../../baseStyles';

const DeckForm = props => (
  <KeyboardAvoidingView behavior="height" style={baseStyle.container}>
    <TextInput value={props.title}
               onChangeText={props.onTitleChange}
               placeholder="Title"
               returnKeyType="done"
               style={baseStyle.input} />
    <TouchableOpacity onPress={props.onSubmitDeck} style={baseStyle.button}>
      <Text style={baseStyle.buttonText}>Add Deck</Text>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);

DeckForm.propTypes = {
  title: PropTypes.string,
  onTitleChange: PropTypes.func.isRequired,
  onSubmitDeck: PropTypes.func.isRequired
};

export default DeckForm;
