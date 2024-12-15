import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/random/?quiz' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text h2 style={styles.title}>Welcome to Quiz App</Text>
        <Text style={styles.subtitle}>Test your knowledge with fun questions!</Text>
        <Button
          title="Start Quiz"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Quiz')}
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparan hitam
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#ddd',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
