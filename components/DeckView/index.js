import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Deck from './Deck';


class DeckView extends Component {
  static propTypes = {
    deck: PropTypes.object,
    navigation: PropTypes.object.isRequired
  };

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.deckName}`
  });

  navToAdd = () => this.props.navigation.navigate(
    'NewCard',
    {
      deckName: this.props.navigation.state.params.deckName
    }
  );

  startQuiz = () => this.props.navigation.navigate(
    'QuizView',
    {
      deckName: this.props.navigation.state.params.deckName
    }
  )

  render() {
    const { deck } = this.props;
    if(deck) return (
      <Deck deck={deck}
            startQuiz={this.startQuiz}
            navToAdd={this.navToAdd} />
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
