import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';

import {styles} from './styles';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <TextInput placeholder="Digite o email..." style={styles.input} />
      <TextInput placeholder="Digite a senha..." style={styles.input} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('clicou porra');
        }}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.buttonSubtitle}>Ainda não tem uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
