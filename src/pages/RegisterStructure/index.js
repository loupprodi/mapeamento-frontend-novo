import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {createStructure, signUp} from '../../services/requests';

import {styles} from './styles';

const RegisterStructureScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateStructure = async () => {
    if (name === '' || description === '') {
      alert('Preencha todos os campos');
    } else {
      const data = await createStructure(name, description)
        .then(res => {
          console.log('caiu aqui', res);
          return res.data;
        })
        .catch(e => {
          console.log('ERRO É ESSE DAQUI', e);
        });

      if (data !== undefined) {
        navigation.navigate('Home');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o nome..."
        style={styles.input}
        value={name}
        onChangeText={t => setName(t)}
      />
      <TextInput
        placeholder="Digite a descrição..."
        style={styles.input}
        value={description}
        onChangeText={t => setDescription(t)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleCreateStructure();
        }}>
        <Text style={styles.buttonText}>Cadastrar estrutura</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterStructureScreen;
