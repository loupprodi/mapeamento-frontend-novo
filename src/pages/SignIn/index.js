import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';

import {styles} from './styles';
import {signIn} from '../../services/requests';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const handleSignInClick = async () => {
    setLoading(true);
    if (email === '' && password === '') {
      alert('email e/ou senha inválido');
      setLoading(false);
    } else if (!email.match(emailRegex)) {
      alert('Insira um email válido');
      setLoading(false);
    } else {
      setLoading(true);
      const data = await signIn(email, password)
        .then(res => {
          return res.data;
        })
        .catch(e => {
          console.log('ERRO É ESSE DAQUI', e);
        });

      if (data !== undefined) {
        setEmail('');
        setPassword('');
        navigation.navigate('Home');
      }

      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <TextInput
        placeholder="Digite o email..."
        style={styles.input}
        value={email}
        onChangeText={t => setEmail(t)}
      />
      <TextInput
        placeholder="Digite a senha..."
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={t => setPassword(t)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSignInClick();
        }}
        disabled={loading}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.registerContent}>
        <Text style={styles.buttonSubtitle}>Ainda não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
