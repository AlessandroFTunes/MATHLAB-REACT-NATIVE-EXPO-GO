import {View,Text,Image,ScrollView,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import styles from '../styles/styles';

 export default function AboutScreen({ goBack }) {
    return (
        <LinearGradient style={
styles.container
        } colors={['#001affff','#09a5eeff']}>
            <View>        <ScrollView>
            <View style={styles.centralizar}/>
            <Image source={require('../assets/icon.png')} style={styles.imagemPequena}/>
            <Text style= {styles.title}>Sobre o MathLab</Text>
            
            <View>
                <Text style= {styles.text}>MathLab é um aplicativo educacional projetado para ajudar estudantes a aprender matemática de forma interativa e divertida. Nosso objetivo é tornar o aprendizado acessível e envolvente para todos os níveis de habilidade.</Text>
                <Text style= {styles.text}>Feito por Alessandro e João do curso de ads</Text>
                <View style={styles.row}>
                
                <Image source={require('../assets/icon.png')} style={styles.perfil} />
                <Image source={require('../assets/icon.png')} style={styles.perfil} />
                
                </View>
                
                <TouchableOpacity style={styles.button} onPress={goBack}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
        
        </View>

        </LinearGradient>
        );

}
