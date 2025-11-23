import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../styles/styles";
import exStyles from "../styles/exerciciosStyle";

export default function Exercicio4Screen({ goBack }) {
  const [xInicial, setXInicial] = useState("");
  const [xFinal, setXFinal] = useState("");
  const [toleranciaDesejada, setToleranciaDesejada] = useState("");
  const [maxIteracoes, setMaxIteracoes] = useState("");

  const [resultado, setResultado] = useState(null);
  const [tabela, setTabela] = useState([]);

  // -------------------------------------------------------------
  //  >>>>> PROFESSOR ALTERA A FUNÇÃO AQUI <<<<<
  //  Coloque abaixo a função f(x) desejada para o método da bisseção:
  
  function f(x) {
    return x * x - 4; // EXEMPLO: f(x) = x² - 4
  }
  // -------------------------------------------------------------

  function calcular() {
    let a = parseFloat(xInicial);
    let b = parseFloat(xFinal);
    let tol = parseFloat(toleranciaDesejada);
    let max = parseInt(maxIteracoes);

    if (isNaN(a) || isNaN(b) || isNaN(tol) || isNaN(max)) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    if (f(a) * f(b) > 0) {
      setResultado("Intervalo inválido! f(a) e f(b) têm o mesmo sinal.");
      setTabela([]);
      return;
    }

    let tabelaTemp = [];
    let i = 0;
    let meio = 0;
    let toleranciaAtual = 999;

    while (i < max && toleranciaAtual > tol) {
      meio = (a + b) / 2;
      toleranciaAtual = Math.abs(b - a);

      tabelaTemp.push({
        i: i + 1,
        a,
        meio,
        b,
        fa: f(a),
        fmeio: f(meio),
        fb: f(b),
        tol: toleranciaAtual,
      });

      if (f(a) * f(meio) < 0) {
        b = meio;
      } else {
        a = meio;
      }

      i++;
    }

    setTabela(tabelaTemp);
    setResultado(`Raiz aproximada: ${meio.toFixed(6)}`);
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={globalStyles.container2}>
        <Text style={globalStyles.text2}>Método da Bisseção</Text>
        <Text style={globalStyles.subText2}>Cálculo de raiz de função</Text>

        <TextInput
          placeholder="x inicial"
          style={exStyles.input}
          keyboardType="numeric"
          value={xInicial}
          onChangeText={setXInicial}
        />

        <TextInput
          placeholder="x final"
          style={exStyles.input}
          keyboardType="numeric"
          value={xFinal}
          onChangeText={setXFinal}
        />

        <TextInput
          placeholder="Tolerância desejada"
          style={exStyles.input}
          keyboardType="numeric"
          value={toleranciaDesejada}
          onChangeText={setToleranciaDesejada}
        />

        <TextInput
          placeholder="Máximo de iterações"
          style={exStyles.input}
          keyboardType="numeric"
          value={maxIteracoes}
          onChangeText={setMaxIteracoes}
        />

        <TouchableOpacity onPress={calcular}>
          <LinearGradient
            colors={["#09a5ee", "#001aff"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={[exStyles.button, { borderRadius: 8, marginVertical: 20 }]}
          >
            <Text style={[globalStyles.text, { padding: 10 }]}>Calcular</Text>
          </LinearGradient>
        </TouchableOpacity>

        {resultado && (
          <View style={{ marginTop: 20 }}>
            <Text style={globalStyles.text2}>{resultado}</Text>
          </View>
        )}

        {tabela.length > 0 && (
          <View style={{ marginTop: 20 }}>
            <Text style={globalStyles.subText2}>Tabela de Iterações</Text>

            {tabela.map((linha, index) => (
              <Text key={index} style={globalStyles.text2}>
                i={linha.i} | a={linha.a.toFixed(4)} | meio={linha.meio.toFixed(4)} | b={linha.b.toFixed(4)} | tol={linha.tol.toFixed(6)}
              </Text>
            ))}
          </View>
        )}

        <TouchableOpacity onPress={goBack}>
          <Text style={[exStyles.buttonText, { marginTop: 20 }]}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
