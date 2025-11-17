import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/aboutScreen';
import ExerciciosScreen from './pages/ExerciciosScreen';
import Exercicio1Screen from './pages/exercicio1screen';
import Exercicio2Screen from './pages/exercicio2screen';
import Exercicio3Screen from './pages/exercicio3screen';
import Exercicio4Screen from './pages/exercicio4screen';
import Exercicio5Screen from './pages/exercicio5screen';


export default function App() {
  const [page, setPage] = useState('home');

  return (
    <View style={{ flex: 1 }}>
      {page === 'home' && (
        <HomeScreen 
          goToAbout={() => setPage('about')} 
           goToExercicios={() => setPage('exercicios')}
            goToExercicio1={() => setPage('exercicio1screen')}
        />
      )}
      {page === 'about' && <AboutScreen goBack={() => setPage('home')} />}
      {page === 'exercicios' && (<ExerciciosScreen goBack={() => setPage('home')}
       goToExercicio1={() => setPage('exercicio1screen')}
        goToExercicio2={() => setPage('exercicio2screen')}
         goToExercicio3={() => setPage('exercicio3screen')}
          goToExercicio4={() => setPage('exercicio4screen')}
           goToExercicio5={() => setPage('exercicio5screen')}
  />
)}
      {page === 'exercicio1screen' && (<Exercicio1Screen goBack={() => setPage('exercicios')} />)}
        {page === 'exercicio2screen' && (<Exercicio2Screen goBack={() => setPage('exercicios')} />)}
          {page === 'exercicio3screen' && (<Exercicio3Screen goBack={() => setPage('exercicios')} />)}
            {page === 'exercicio4screen' && (<Exercicio4Screen goBack={() => setPage('exercicios')} />)}
              {page === 'exercicio5screen' && (<Exercicio5Screen goBack={() => setPage('exercicios')} />)}
    </View>
  );
}
