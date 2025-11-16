import React, { useState } from 'react';
import { View } from 'react-native';
<<<<<<< HEAD
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/aboutScreen';
import ExerciciosScreen from './pages/ExerciciosScreen';
import styles from './styles/styles';
=======
import HomeScreen from './HomeScreen';
import AboutScreen from './aboutScreen';
import ExerciciosScreen from './ExerciciosScreen';
import styles from './styles';
>>>>>>> 3f87824fd5b777a1f3d207126700321fe51d782f

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
