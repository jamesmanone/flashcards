import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 6,
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
    width: 200,
    marginBottom: 50,
    paddingBottom: 5,
    borderBottomWidth: 5,
    borderColor: 'darkturquoise'
  }
});
