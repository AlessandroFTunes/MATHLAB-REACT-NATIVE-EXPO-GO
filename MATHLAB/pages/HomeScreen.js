import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';


export default function HomeScreen({ goToAbout, goToExercicios, }) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/icon.png')} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>MathLab</Text>
      <Text style={styles.subtitle}>Aprenda matemática de forma divertida!</Text>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToExercicios}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonSecondary]} 
          onPress={goToAbout}
        >
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



