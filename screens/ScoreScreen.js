import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function ScoreScreen({ route, navigation }) {
  const { score } = route.params;

  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/random/?success' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text h3 style={styles.title}>Congratulations!</Text>
        <Text h1 style={styles.score}>{score}</Text>
        <Text style={styles.subtitle}>That's your score!</Text>
        <Button
          title="Play Again"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  score: {
    color: '#ff9800',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ddd',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
