import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addDeck } from '../../actions/deckActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    marginBottom: 50,
    paddingBottom: 5,
    borderBottomWidth: 5,
    borderColor: 'darkturquoise'
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 6,
    borderColor: 'darkcyan'
  },
  buttonText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'darkcyan'
  }
})
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
      <View style={styles.container}>
        <TextInput value={this.state.title}
                   onChangeText={this.onTitleChange}
                   placeholder="title"
                   style={styles.input} />
        <TouchableOpacity onPress={this.onSubmitDeck} style={styles.button}>
          <Text style={styles.buttonText}>Add Deck</Text>
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