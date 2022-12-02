import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textLogin: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 25,
    marginBottom: 8,
    padding: 10,
  },

  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3cb2ca',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  buttonSubtitle: {
    color: '#7159c1',
    fontWeight: 'bold',
  },

  registerContent: {
    marginTop: 15,
    alignItems: 'center',
  },
});
