/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import R from './src/routes';

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

const App = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName={'home'}>
                {R.routes.map(({ name, component, options = {} }) => (
                    <Screen key={name} name={name} component={component} options={options} />
                ))}
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
