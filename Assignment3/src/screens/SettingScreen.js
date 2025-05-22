import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SettingsScreen = () => {
  return (
    <LinearGradient colors={['#240046', '#5a189a']} style={styles.container}>
      <Text style={styles.text}>Settings Coming Soon...</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, color: '#fff' },
});

export default SettingsScreen;
