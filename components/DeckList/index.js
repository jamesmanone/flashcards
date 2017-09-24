import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { Container, Body, Content, Text, Header, Footer } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from './ListItem';
import { restoreState } from '../../actions/restoreActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

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
  
  toNewDeckView = () => Alert.alert('Navigate');
  
  render() {
    return (
      <View style={styles.container}>
        {(this.props._restored && (
          <FlatList data={this.props.decks}
                    keyExtractor={(_, index)=>index}
                    renderItem={ListItem} />
        )) || (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  let decks = [];
  for(let deck in state) {
    if(state[deck].title) decks.push(state[deck]);
  }
  return {decks, _restored: state._restored};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({restoreState}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);