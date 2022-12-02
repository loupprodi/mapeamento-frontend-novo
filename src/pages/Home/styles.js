import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  listArea: {
    marginTop: 30,
    marginBottom: 30,
  },
  buttonArea: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonRegister: {
    width: 150,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3cb2ca',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    fontSize: 17,
    color: 'red',
  },
  warningTextArea: {
    marginTop: 40,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
