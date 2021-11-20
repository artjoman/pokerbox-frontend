import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { TextDemo, ButtonDemo, FormDemo } from '../screens/Demos';
import { Provider as PaperProvider, ActivityIndicator, DefaultTheme } from 'react-native-paper';

export type MainStackParams = {
  List: undefined;
  TextDemo: undefined;
  FormDemo: undefined;
  ButtonDemo: undefined;
};

const theme = {  
  ...DefaultTheme,
  roundness: 69,
  colors: {
    ...DefaultTheme,
    primary: '#040303',
    accent: '#6A7B76',
    surface: '#8B9D83',
    backdrop: '#BEB0A7',
    background: '#BEB0A7'
  },
  font: {
    ...DefaultTheme
  }
}

const MainStack = createStackNavigator<MainStackParams>();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen
      name="TextDemo"
      component={TextDemo}
      options={{ headerTitle: 'Text Demo' }}
    />
    <MainStack.Screen
      name="FormDemo"
      component={FormDemo}
      options={{ headerTitle: 'Button Demo' }}
    />
    <MainStack.Screen
      name="ButtonDemo"
      component={ButtonDemo}
      options={{ headerTitle: 'Button Demo' }}
    />
  </MainStack.Navigator>
);
