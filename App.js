
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFF3E8" barStyle="dark-content" />

        <Image
          source={require('./assets/images/garderie.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Ma Garderie</Text>

        <Text style={styles.subtitle}>
          Bienvenue dans notre garderie
        </Text>

        <Text style={styles.emoji}>🌸 🧸 🌈</Text>
      </View>
    );
  }

  return (
    <View style={styles.home}>
      <Text style={styles.homeTitle}>Ma Garderie</Text>
      <Text>Bienvenue dans la page principale !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  image: {
    width: 280,
    height: 280,
    marginBottom: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F28C38',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    color: '#555555',
    textAlign: 'center',
  },

  emoji: {
    fontSize: 28,
    marginTop: 25,
  },

  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3E8',
  },

  homeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F28C38',
    marginBottom: 15,
  },
});
