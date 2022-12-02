import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 200,
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

  scrollArea: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  tagsArea: {
    padding: 15,
    height: 500,
    width: 300,
    //backgroundColor: '#3cb2ca',
    borderRadius: 25,
  },
  structText: {
    flexDirection: 'row',
    paddingBottom: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    fontSize: 17,
  },
  warningText: {
    fontSize: 17,
    color: 'red',
  },
  warningTextArea: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
});
