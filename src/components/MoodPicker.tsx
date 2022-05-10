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

type MoodPickerProps = {
  handleSelectMood: (moodOption: MoodOptionType) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({ handleSelectMood }) => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();

  const handleSelect = React.useCallback(() => {
    if (selectedMood) {
      handleSelectMood(selectedMood);
      setSelectedMood(undefined);
    }
  }, [handleSelectMood, selectedMood]);

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
        <Pressable
          style={styles.button}
          onPress={() => {
            handleSelect();
          }}>
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
    fontSize: 20,
    marginBottom: 15,
  },
  container: {
    borderColor: theme.colorPurple,
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
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
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
    borderWidth: 2,
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
  button: {
    borderRadius: 20,
    alignSelf: 'center',
    width: 125,
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor: theme.colorPurple,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
