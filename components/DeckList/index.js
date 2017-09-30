import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import List from './List';
import { restoreState } from '../../actions/restoreActions';
import baseStyle from '../../baseStyles';

class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.array.isRequired,
    _restored: PropTypes.bool.isRequired,
    restoreState: PropTypes.func.isRequired
  };

  static navigationOptions = {
    tabBarLabel: 'Decks',
    tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards' color={tintColor} size={30} />
  };

  componentDidMount() {
    if(!this.props._restored) this.props.restoreState();
  }

  render() {
    if(this.props._restored) return (
      <List decks={this.props.decks}
            navigate={this.props.navigation.navigate} />
    );
    else return (
      <View style={baseStyle.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, {navigation}) => {
  let decks = [];
  for(let deck in state) {
    if(state[deck].title) decks.push(state[deck]);
  }
  return {decks, _restored: state._restored, navigation};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({restoreState}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
