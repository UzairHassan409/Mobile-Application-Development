import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCity = async () => {
    try {
      setLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCity('Permission Denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let [address] = await Location.reverseGeocodeAsync(location.coords);
      setCity(address?.city || 'Unknown');
    } catch (err) {
      setCity('Error getting location');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#240046', '#5a189a']} style={styles.container}>
      <Text style={styles.title}>Find Your City</Text>
      <View style={styles.box}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : city ? (
          <Text style={styles.city}>{city}</Text>
        ) : (
          <Text style={styles.city}>Press the button below</Text>
        )}
      </View>
      <View style={styles.btn}>
        <Button title="Get Current City" color="#9d4edd" onPress={getCity} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 26, color: '#fff', textAlign: 'center', marginBottom: 20 },
  box: {
    alignItems: 'center',
    marginBottom: 30,
  },
  city: { fontSize: 22, color: '#fff', fontWeight: 'bold' },
  btn: { alignSelf: 'center', width: '60%' },
});

export default HomeScreen;
