import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import baseStyle from '../../baseStyles';

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
  },
  button: {
    marginVertical: 20
  },
  noCards: {
    fontSize: 18,
    marginTop: 20
  }
});


class DeckView extends Component {
  static propTypes = {
    deck: PropTypes.object
  };

  static navigationOptions = ({navigation}) => {
    return {
      title: `${navigation.state.params.deckName}`
    };
  };

  navToAdd = () => this.props.navigation.navigate(
    'NewCard',
    {
      deckName: this.props.navigation.state.params.deckName
    }
  )

  render() {
    const { deck } = this.props;
    if(deck) return (
      <View style={baseStyle.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text>{deck.questions.length || 0} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
        <TouchableOpacity style={[baseStyle.button, styles.button]} onPress={this.navToAdd}>
          <Text style={baseStyle.buttonText}>Add Card</Text>
        </TouchableOpacity>
        {(deck.questions.length && (
          <TouchableOpacity style={[baseStyle.button, baseStyle.buttonInverse, styles.button]}>
            <Text style={baseStyle.buttonTextInverse}>Start Quiz</Text>
          </TouchableOpacity>
        )) || (
          <Text style={styles.noCards}>Add some cards so you can quiz yourself!</Text>
        )}
      </View>
    );
    else return null;
  }
}

const mapStateToProps = (state, {navigation}) => {
  const deckName = navigation.state.params.deckName;
  return {
    deck: state[deckName],
    navigation
  };
};

export default connect(mapStateToProps)(DeckView);
