import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  counter: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 26
  },
  dataView: {
    marginVertical: 20
  },
  mainText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15
  },
  descText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
    marginVertical: 15
  },
  tipText: {
    color: '#999',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 15
  },
  buttonCorrect: {
    borderColor: 'darkgreen'
  },
  buttonTextCorrect: {
    color: 'darkgreen'
  },
  buttonIncorrect: {
    borderColor: 'red'
  },
  buttonTextIncorrect: {
    color: 'red'
  }
});
