import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ userName, setUserName, navigation }) => {
  const [nameInput, setNameInput] = useState(userName);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    navigation.setOptions({ title: nameInput || 'Profile' });
  }, [nameInput]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUserName(nameInput);
    }, 400);
    return () => clearTimeout(timeout);
  }, [nameInput]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient colors={['#240046', '#5a189a']} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Animated.View style={[styles.inner, { opacity: fadeAnim }]}>
          <View style={styles.avatarContainer}>
            <LinearGradient
              colors={['#b5179e', '#720026']}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.avatarGradient}
            >
              <Ionicons name="person" size={80} color="#fff" />
            </LinearGradient>
          </View>

          <Text style={styles.welcome}>Welcome {nameInput}</Text>

          <TextInput
            style={styles.input}
            value={nameInput}
            onChangeText={setNameInput}
            placeholder="Type your name"
            placeholderTextColor="#ddd"
            autoCorrect={false}
            autoCapitalize="words"
          />
        </Animated.View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: {
    width: '80%',
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 30,
  },
  avatarGradient: {
    borderRadius: 60,
    padding: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    shadowColor: '#b5179e',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  welcome: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#b5179e',
    shadowColor: '#b5179e',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 8,

  },
});

export default ProfileScreen;
