import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';

export const Home: React.FC = () => {
  const appContext = useAppContext();

  //   {format(new Date(item.timestamp), "d MMM, yyyy 'at' hh:mm aaa")}
  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
