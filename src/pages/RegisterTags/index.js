import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {createTags} from '../../services/requests';

import {styles} from './styles';

const RegisterTagsScreen = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const {estrutura_id} = route.params;

  console.log('ID DA ESTRUTURA', estrutura_id);
  const handleCreateTag = async () => {
    if (name === '' || location === '' || serialNumber === '') {
      alert('Preencha todos os campos');
    } else {
      const data = await createTags(name, location, serialNumber, estrutura_id)
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
        placeholder="Digite a localização..."
        style={styles.input}
        value={location}
        onChangeText={t => setLocation(t)}
      />
      <TextInput
        placeholder="Digite o número serial..."
        style={styles.input}
        value={serialNumber}
        onChangeText={t => setSerialNumber(t)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleCreateTag();
        }}>
        <Text style={styles.buttonText}>Cadastrar Tag</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterTagsScreen;
