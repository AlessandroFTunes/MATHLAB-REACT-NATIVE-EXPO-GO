import React from "react";
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import styles from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function ExerciciosScreen({
  goBack,
  goToExercicio1,
  goToExercicio2,
  goToExercicio3,
  goToExercicio4,
  goToExercicio5
}) {
  return (
    <ScrollView contentContainerStyle={styles.container2}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.centralizar}>
          <Image 
            source={require('../assets/icon.png')} 
            style={styles.imagemPequena}
          />
        </View>
        <Text style={styles.title}>MATHLAB</Text>
        <Text style={styles.subText2}>Bem-vindo ao seu laboratório matemático</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      {/* EXERCÍCIO 1 */}
      <LinearGradient
        colors={['#09a5ee', '#001aff']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonExercicio}
      >
        <TouchableOpacity style={styles.buttonExercicio} onPress={goToExercicio1}>
          <Text style={styles.text}>ANÁLISE DE INVESTIMENTOS</Text>
          <Text style={styles.subText}>Juros Compostos</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* EXERCÍCIO 2 */}
      <LinearGradient
        colors={['#001aff', '#09a5ee']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonExercicio}
      >
        <TouchableOpacity style={styles.buttonExercicio} onPress={goToExercicio2}>
          <Text style={styles.text}>Análise de Investimentos com Aportes Periódicos</Text>
          <Text style={styles.subText}>juros compostos incluindo aportes mensais</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* EXERCÍCIO 3 */}
      <LinearGradient
        colors={['#09a5ee', '#001aff']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonExercicio}
      >
        <TouchableOpacity style={styles.buttonExercicio} onPress={goToExercicio3}>
          <Text style={styles.text}>ECálculo do IRRF (Imposto de Renda Retido na Fonte)</Text>
          <Text style={styles.subText}>IRRF a pagar considerando salário bruto e número de dependentes.</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* EXERCÍCIO 4 */}
      <LinearGradient
        colors={['#001aff', '#09a5ee']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonExercicio}
      >
        <TouchableOpacity style={styles.buttonExercicio} onPress={goToExercicio4}>
          <Text style={styles.text}>Equação da Reta</Text>
          <Text style={styles.subText}>determina a função do primeiro grau, além dos interceptos nos eixos X e Y.</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* EXERCÍCIO 5 */}
      <LinearGradient
        colors={['#09a5ee', '#001aff']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.buttonExercicio}
      >
        <TouchableOpacity style={styles.buttonExercicio} onPress={goToExercicio5}>
          <Text style={styles.text}>Método da Bisseção (Cálculo Numérico de Raiz)</Text>
          <Text style={styles.subText}>raiz de uma função usando o método da bisseção</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* BOTÃO VOLTAR */}


    </ScrollView>
  );
}
