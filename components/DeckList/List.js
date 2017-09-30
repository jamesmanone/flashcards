import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ListItem from './ListItem';
import baseStyle from '../../baseStyles';


const List = props => (
  <View style={baseStyle.container}>
    {(props.decks && props.decks.length && (
      <FlatList data={props.decks}
                keyExtractor={(_, index)=>index}
                renderItem={({item}) => (
                  <ListItem item={item}
                            nav={()=>props.navigate('Deck', {deckName: item.title})} />
                )} />
    )) || (
      <Text>Add a flashcard deck to get started.</Text>
    )}
  </View>
);

List.propTypes = {
  decks: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired
};

export default List;
