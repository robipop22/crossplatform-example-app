import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ROUTE_NAMES from '../../routes/names';

import S from './style';

const HomeScreen: React.FC = (): React.ReactElement => {
  const navigation = useNavigation();

  return (
    <View style={S.container}>
      <Pressable onPress={() => navigation.navigate(ROUTE_NAMES.TODO)}>
        <Text>ToDo Screen</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(ROUTE_NAMES.FORM)}>
        <Text>Form Screen</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(ROUTE_NAMES.BOOKS)}>
        <Text>Books Screen</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
