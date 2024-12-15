import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ScoreScreen from './screens/ScoreScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Quiz App' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Take the Quiz' }} />
        <Stack.Screen name="Score" component={ScoreScreen} options={{ title: 'Your Score' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
