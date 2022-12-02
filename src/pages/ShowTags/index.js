import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView, FlatList} from 'react-native';
import {getTagsById} from '../../services/requests';

import {styles} from './styles';

const ShowTagsScreen = ({navigation, route}) => {
  const {data} = route.params;
  const [tagList, setTagList] = useState([]);
  const {estrutura_id} = data;

  console.log('id da estrutura na ShowTags', estrutura_id);
  const handleGetTags = async () => {
    const tags = await getTagsById(estrutura_id).then(res => res);
    console.log(tags);
    if (tags.data !== undefined) {
      setTagList([...tags.data]);
    }
  };

  useEffect(() => {
    handleGetTags();
  }, []);

  const handleNavigateRegisterTag = () => {
    navigation.navigate('RegisterTags', {estrutura_id});
  };

  const Item = ({title, index}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{`${index + 1} - ${title}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tagsArea}>
        <View style={styles.structText}>
          <Text style={styles.text}>Estrutura: </Text>
          <Text style={styles.text2}>{data.name}</Text>
        </View>
        <View style={styles.structText}>
          <Text style={styles.text}>Descrição: </Text>
          <Text style={styles.text2}>{data.description}</Text>
        </View>

        {tagList.length > 0 ? (
          <ScrollView style={styles.scrollArea}>
            {tagList.map((tag, index) => (
              <Item key={index} title={tag.name} index={index} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.warningTextArea}>
            <Text style={styles.warningText}>
              Nenhuma tag cadastrada na estrutura: {data.name}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleNavigateRegisterTag();
          }}>
          <Text style={styles.buttonText}>Cadastrar Tag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowTagsScreen;
