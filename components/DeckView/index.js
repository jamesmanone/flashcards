import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import baseStyle from '../../baseStyles';



class DeckView extends Component {
  static propTypes = {
    deck: PropTypes.object
  };

  render() {
    const { deck } = this.props;
    if(deck) return (
      <View style={baseStyle.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length || 0} {deck.questions.length === 1 ? ' card' : ' cards'}</Text>
        <TouchableOpacity>
          <Text>Add Card</Text>
        </TouchableOpacity>
        {(deck.questions.length && (
          <TouchableOpacity>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        )) || (
          <Text>Add some cards so you can quiz yourself!</Text>
        )}
      </View>
    );
    else return null;
  }
}

const mapStateToProps = (state, {navigation}) => {
  const deckName = navigation.state.params.deckName;
  return {
    deck: state[deckName]
  };
};

export default connect(mapStateToProps)(DeckView);
