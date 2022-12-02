import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import StructureItem from '../../components/StructureItem/StructureItem';
import {styles} from './styles';

import {getStructure} from '../../services/requests';

const HomeScreen: () => React.FC = () => {
  const [list, setList] = useState([]);
  const navigation = useNavigation();

  const handleGetStructures = async () => {
    const data = await getStructure().then(res => res);
    setList([...data.data]);
  };

  useEffect(() => {
    handleGetStructures();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => {
            navigation.navigate('RegisterStructure');
          }}>
          <Text style={styles.registerText}>Cadastrar Estrutura</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {list.length > 0 ? (
          <View style={styles.listArea}>
            {list.map((struct, index) => (
              <StructureItem data={struct} key={index} />
            ))}
          </View>
        ) : (
          <View style={styles.warningTextArea}>
            <Text style={styles.warningText}>
              Nenhuma estrutura cadastrada...
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
