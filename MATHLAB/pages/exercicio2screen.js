import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import exStyles from '../styles/exerciciosStyle';
import globalStyles from '../styles/styles';

export default function Exercicio2Screen({ goBack }) {
    <View>

        <Text>Exercício 2 Screen</Text>
              {/* Botão Voltar */}
              <TouchableOpacity onPress={goBack}>
                <Text style={[globalStyles.text, { marginTop: 200 }]}>Voltaraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
              </TouchableOpacity>
    </View>
}
