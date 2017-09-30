import { StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  addButton: {
    bottom: 0
  },
  message: {
    position: 'absolute',
    top: 5,
    paddingVertical: 3,
    width: width<420 ? width - 20 : 400,
    backgroundColor: 'darkgreen',
    color: 'white',
    textAlign: 'center'
  }
});
