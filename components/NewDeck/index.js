import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addDeck } from '../../actions/deckActions';
import baseStyle from '../../baseStyles';


class NewDeck extends Component {
  static propTypes = {
    addDeck: PropTypes.func.isRequired
  };

  static navigationOptions = {
    tabBarLabel: 'New Deck',
    tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='plus-box' color={tintColor} size={30} />
  };

  state = {
    title: ''
  };

  onTitleChange = title => this.setState({title});

  onSubmitDeck = () =>
    this.state ? this.props.addDeck(this.state.title) : Alert.alert('Please enter a title');

  render() {
    return (
      <View style={baseStyle.container}>
        <TextInput value={this.state.title}
                   onChangeText={this.onTitleChange}
                   placeholder="title"
                   onSubmitEditing={this.onSubmitDeck}
                   blurOnSubmit
                   returnKeyType='done'
                   style={baseStyle.input} />
        <TouchableOpacity onPress={this.onSubmitDeck} style={baseStyle.button}>
          <Text style={baseStyle.buttonText}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {...ownProps};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({addDeck}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);
