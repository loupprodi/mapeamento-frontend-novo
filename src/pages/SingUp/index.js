import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {signUp} from '../../services/requests';

import {styles} from './styles';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [responsable, setResponsable] = useState('');
  const [contatResponsable, setContatResponsable] = useState('');

  const handleSignUpClick = async () => {
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      username === '' ||
      responsable === ''
    ) {
      alert('Preencha todos os campos');
    } else {
      const data = await signUp(
        name,
        email,
        password,
        username,
        responsable,
        contatResponsable,
      )
        .then(res => {
          console.log('caiu aqui', res);
          return res.data;
        })
        .catch(e => {
          console.log('ERRO É ESSE DAQUI', e);
        });

      if (data !== undefined) {
        navigation.navigate('SignIn');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Cadastre-se</Text>
      <TextInput
        placeholder="Digite o nome..."
        style={styles.input}
        value={name}
        onChangeText={t => setName(t)}
      />
      <TextInput
        placeholder="Digite a email..."
        style={styles.input}
        value={email}
        onChangeText={t => setEmail(t)}
      />
      <TextInput
        placeholder="Digite o senha..."
        style={styles.input}
        value={password}
        onChangeText={t => setPassword(t)}
      />
      <TextInput
        placeholder="Digite o nome de usuário..."
        style={styles.input}
        value={username}
        onChangeText={t => setUsername(t)}
      />
      <TextInput
        placeholder="Digite nome do responsavel..."
        style={styles.input}
        value={responsable}
        onChangeText={t => setResponsable(t)}
      />
      <TextInput
        placeholder=" Digite contato do responsavel..."
        style={styles.input}
        value={contatResponsable}
        onChangeText={t => setContatResponsable(t)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSignUpClick();
        }}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <View style={styles.registerContent}>
        <Text style={styles.buttonSubtitle}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
