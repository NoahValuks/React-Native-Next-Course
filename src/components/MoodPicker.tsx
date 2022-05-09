import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { theme } from '../theme';
import { MoodOptionType } from '../types';

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>How are you right now?</Text>
      <View style={styles.moodOptions}>
        {moodOptions.map(option => (
          <View>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                selectedMood?.emoji === option.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <Text key={option.emoji}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {option.emoji === selectedMood?.emoji
                ? option.description
                : undefined}
            </Text>
          </View>
        ))}
      </View>
      <View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Choose</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  container: {
    borderColor: theme.colorPurple,
    borderWidth: 2,
    borderRadius: 15,
  },
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMoodItem: {
    backgroundColor: '#454C73',
    borderColor: 'white',
    borderWidth: 2,
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    backgroundColor: theme.colorPurple,
    textAlign: 'center',
  },
});
