import React from 'react';
import { View, TextInput, Text, Pressable, Alert } from 'react-native';
import handleSignUpForm from 'brain/dist/form/signup';

import S from './style';

const FormScreen: React.FC = (): React.ReactElement => {
  const { name, setName, email, setEmail, phone, setPhone, phoneIsValid, emailIsValid } = handleSignUpForm();

  return (
    <View style={S.container}>
      <Text>Name:</Text>
      <TextInput style={S.input} value={name} onChangeText={setName} />
      <Text>email:</Text>
      <TextInput style={S.input} value={email} onChangeText={setEmail} />
      {!emailIsValid && email.length > 5 && <Text style={S.errorText}>Please use a valid email address</Text>}
      <Text>phone:</Text>
      <TextInput style={S.input} value={phone} onChangeText={setPhone} />
      {!phoneIsValid && phone.length > 5 && <Text style={S.errorText}>Please use a valid phone number</Text>}
      <Pressable style={S.button} onPress={() => Alert.alert('Submited')}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

export default FormScreen;
