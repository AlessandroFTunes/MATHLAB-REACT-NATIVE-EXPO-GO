import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import AboutScreen from './aboutScreen';
import ExerciciosScreen from './ExerciciosScreen';
import styles from './styles';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <View style={{ flex: 1 }}>
      {page === 'home' && (
        <HomeScreen 
          goToAbout={() => setPage('about')} 
          goToExercicios={() => setPage('exercicios')} 
        />
      )}
      {page === 'about' && <AboutScreen goBack={() => setPage('home')} />}
      {page === 'exercicios' && <ExerciciosScreen goBack={() => setPage('home')} />}
    </View>
  );
}
