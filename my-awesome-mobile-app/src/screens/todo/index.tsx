import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import addToDo from 'brain/dist/addToDo';
import updateInput from 'brain/dist/updateInput';

import S from './style';

const TodoScreen: React.FC = (): React.ReactElement => {
  const { addItem, itemList } = addToDo();
  const { inputValue, setInputValue } = updateInput();

  const addItemAndResetInput = () => {
    addItem(inputValue);
    setInputValue('');
  };

  return (
    <View style={S.container}>
      <TextInput style={S.input} value={inputValue} onChangeText={setInputValue} />
      <Pressable onPress={addItemAndResetInput} style={S.button}>
        <Text>Add</Text>
      </Pressable>
      <View>
        {itemList.map((item: string, index: number) => (
          <Text key={`${item}-${index}`}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

export default TodoScreen;
