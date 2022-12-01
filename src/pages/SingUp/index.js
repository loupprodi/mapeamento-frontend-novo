import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';

import {styles} from './styles';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Cadastre-se</Text>
      <TextInput placeholder="Digite o nome..." style={styles.input} />
      <TextInput placeholder="Digite a email..." style={styles.input} />
      <TextInput placeholder="Digite o senha..." style={styles.input} />
      <TextInput
        placeholder="Digite o nome de usuário..."
        style={styles.input}
      />
      <TextInput
        placeholder="Digite nome do responsavel..."
        style={styles.input}
      />
      <TextInput
        placeholder=" Digite contato do responsavel..."
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('clicou porra');
        }}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <Text style={styles.buttonSubtitle}>Já possui uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>Faça login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
