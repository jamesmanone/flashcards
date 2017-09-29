import { TabNavigator, StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import DeckList from './DeckList';
import NewDeck from './NewDeck';
import DeckView from './DeckView';
import NewCard from './NewCard';
import QuizView from './QuizView';

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
      title: 'Decks'
    }
  },
  Deck: {
    screen: DeckView
  },
  NewCard: {
    screen: NewCard
  },
  QuizView: {
    screen: QuizView
  }
};

const stackNavOptions = {
  headerMode: Platform.OS  === 'ios' ? 'float' : 'screen'
};

export default StackNavigator(stackNavRoutes, stackNavOptions);
