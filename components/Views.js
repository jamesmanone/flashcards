import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';
import DeckView from './DeckView';

const tabNavRoutes = {
  List: {
    screen: DeckList,
  },
  NewDeck: {
    screen: NewDeck
  }
};

const tabNavOptions = {
  animationEnabled: true,
  header: null,
  lazy: true,
  initialRouteName: 'List',
  tabBarOptions: {
    activeTintColor: 'mediumaquamarine',
    inactiveTintColor: 'darkcyan',
    style: {
      height: 56,
      backgroundColor: '#fff',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      }
    }
  },
  order: ['List', 'NewDeck']
};

const Tabs = TabNavigator(tabNavRoutes, tabNavOptions);

const stackNavRoutes = {
  Decks: {
    screen: Tabs,
    navigationOptions: {
      title: 'My Flashcard Decks'
    }
  },
  Deck: {
    screen: DeckView
  }
};

const stackNavOptions = {

}

export default StackNavigator(stackNavRoutes);
