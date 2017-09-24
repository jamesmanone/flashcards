import { TabNavigator } from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';

const navRoutes = {
  List: {
    screen: DeckList,
  },
  NewDeck: {
    screen: NewDeck
  }
};

const navOptions = {
  animationEnabled: true,
  header: null,
  // lazy: true,
  initialRouteName: 'List',
  tabBarOptions: {
    tintColor: 'mediumaquamarine',
    activeTintColor: 'darkcyan',
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

export default TabNavigator(navRoutes, navOptions);