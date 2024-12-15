import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button, Card } from 'react-native-elements';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Shakespeare', 'Hemingway', 'Tolkien', 'Austen'],
    answer: 'Shakespeare',
  },
  {
    question: 'What is 5 + 3?',
    options: ['5', '8', '10', '15'],
    answer: '8',
  },
];

export default function QuizScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate('Score', { score });
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/random/?background' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.cardTitle}>
            {questions[currentQuestion].question}
          </Card.Title>
          <Card.Divider />
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              title={option}
              buttonStyle={styles.optionButton}
              onPress={() => handleAnswer(option)}
            />
          ))}
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  optionButton: {
    backgroundColor: '#4caf50',
    marginVertical: 5,
    borderRadius: 8,
    paddingVertical: 10,
  },
});
