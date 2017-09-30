import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDeck } from '../../actions/deckActions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DeckForm from './DeckForm';

class NewDeck extends Component {
  static propTypes = {
    addDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  static navigationOptions = {
    tabBarLabel: 'New Deck',
    tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='plus-box' color={tintColor} size={30} />
  };

  state = {
    title: ''
  };

  onTitleChange = title => this.setState({title});

  afterSubmit = () => {
    this.setState({title: ''}); // android is persisting state through navigation
    this.props.navigation.goBack();
  }

  onSubmitDeck = () => this.props.addDeck(this.state.title, this.afterSubmit);

  render() {
    return (
      <DeckForm title={this.state.title}
                onTitleChange={this.onTitleChange}
                onSubmitDeck={this.onSubmitDeck} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {...ownProps};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({addDeck}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);
