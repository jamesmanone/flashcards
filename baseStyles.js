import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 15
  },
  button: {
    width: 150,
    paddingVertical: 20,
    marginVertical: 10,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 12,
    borderColor: 'darkcyan'
  },
  buttonInverse: {
    backgroundColor: 'darkcyan'
  },
  buttonText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 18,
    color: 'darkcyan'
  },
  buttonTextInverse: {
    color: 'white'
  },
  input: {
    width: width<420 ? width - 20 : 400,
    marginBottom: 50,
    paddingBottom: 5,
    borderBottomWidth: Platform.OS === 'ios' ? 5 : 0,
    borderColor: 'darkturquoise'
  }
});
