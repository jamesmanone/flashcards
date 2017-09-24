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
  buttonText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'darkcyan'
  }
});
