import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function ExerciciosScreen({ goBack }) {
  return (
    <View style={styles.container2}>
<View style={styles.header}>
    
         <View style={styles.centralizar}>
            <Image source={require('./assets/icon.png')} style={styles.imagemPequena}/>

            </View>


    <Text style={styles.text2}>MATHLAB</Text>
    <Text style={styles.subText2}>Bem-vindo ao seu laboratório matemático</Text>
</View>
<LinearGradient         colors={['#09a5ee', '#001aff']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonExercicio}>
    <TouchableOpacity style={styles.buttonExercicio} onPress={goBack}>

        <Text style={styles.text}>ANALISE DE INVESTIMENTOS</Text>
        <Text style={styles.subText}>ANALISE DE INVESTIMENTOS</Text>
    </TouchableOpacity>
</LinearGradient>

<LinearGradient         colors={['#001aff', '#09a5ee']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonExercicio}>
    <TouchableOpacity style={styles.buttonExercicio} onPress={goBack}>

        <Text style={styles.text}>ANALISE DE INVESTIMENTOS</Text>
        <Text style={styles.subText}>ANALISE DE INVESTIMENTOS</Text>
    </TouchableOpacity>
</LinearGradient>

<LinearGradient style={styles.buttonExercicio} colors={['#09a5ee', '#001aff']}

        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>
    <TouchableOpacity style={styles.buttonExercicio} onPress={goBack}>

        <Text style={styles.text}>ANALISE DE INVESTIMENTOS</Text>
        <Text style={styles.subText}>ANALISE DE INVESTIMENTOS</Text>
    </TouchableOpacity>
</LinearGradient>

<LinearGradient         colors={['#001aff', '#09a5ee']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonExercicio}>
    <TouchableOpacity style={styles.buttonExercicio} onPress={goBack}>

        <Text style={styles.text}>ANALISE DE INVESTIMENTOS</Text>
        <Text style={styles.subText}>ANALISE DE INVESTIMENTOS</Text>
    </TouchableOpacity>
</LinearGradient>


      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}