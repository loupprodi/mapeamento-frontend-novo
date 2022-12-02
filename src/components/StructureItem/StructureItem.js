import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export default ({data}) => {
  const navigation = useNavigation();

  const handleShowDetails = dataParams => {
    navigation.navigate({name: 'ShowTags', params: {data: dataParams}});
  };

  return (
    <TouchableOpacity
      style={styles.area}
      onPress={() => {
        handleShowDetails(data);
      }}>
      {/* svg */}
      <View style={styles.infoArea}>
        <Text style={styles.userName}>{data.name}</Text>
        <View style={styles.seeDetail}>
          <Text style={styles.detailText}>Ver detalhes da estrutura</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
