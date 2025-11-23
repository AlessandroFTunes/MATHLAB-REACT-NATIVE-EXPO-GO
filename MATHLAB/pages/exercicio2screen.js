import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../styles/styles";
import exStyles from "../styles/exerciciosStyle";

export default function Exercicio1Screen({ goBack }) {
  const [capital, setCapital] = useState("");
  const [aporte, setAporte] = useState("");
  const [tempo, setTempo] = useState("");
  const [taxa, setTaxa] = useState("");
  const [ipca, setIpca] = useState("");

  const [resultado, setResultado] = useState(null);

  function calcular() {
    const C = parseFloat(capital);
    const A = parseFloat(aporte);
    const t = parseFloat(tempo);
    const i1 = parseFloat(taxa) / 100;
    const i2 = parseFloat(ipca) / 100;

    if (isNaN(C) || isNaN(A) || isNaN(t) || isNaN(i1) || isNaN(i2)) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    // Fórmula M = C(1+i)^t + A * ((1+i)^t - 1) / i
    const montanteAplicacao =
      C * Math.pow(1 + i1, t) + A * ((Math.pow(1 + i1, t) - 1) / i1);

    const montanteIpca =
      C * Math.pow(1 + i2, t) + A * ((Math.pow(1 + i2, t) - 1) / i2);

    const diferenca = montanteAplicacao - montanteIpca;

    setResultado({
      montanteAplicacao: montanteAplicacao.toFixed(2),
      montanteIpca: montanteIpca.toFixed(2),
      diferenca: diferenca.toFixed(2),
    });
  }

  return (
    <View style={globalStyles.container2}>
      <Text style={exStyles.title2}>Análise de Investimentos</Text>
      <Text style={exStyles.subtitle2}>Aportes Periódicos</Text>

      {/* INPUT — CAPITAL */}
      <View style={exStyles.inputContainer}>
        <Text style={exStyles.labelInput}>Capital inicial (R$)</Text>
        <TextInput
          style={exStyles.input}
          keyboardType="numeric"
          value={capital}
          onChangeText={setCapital}
          placeholder="Ex.: 1000"
        />
      </View>

      {/* INPUT — APORTE */}
      <View style={exStyles.inputContainer}>
        <Text style={exStyles.labelInput}>Aporte periódico (R$)</Text>
        <TextInput
          style={exStyles.input}
          keyboardType="numeric"
          value={aporte}
          onChangeText={setAporte}
          placeholder="Ex.: 150"
        />
      </View>

      {/* INPUT — TEMPO */}
      <View style={exStyles.inputContainer}>
        <Text style={exStyles.labelInput}>Tempo (anos)</Text>
        <TextInput
          style={exStyles.input}
          keyboardType="numeric"
          value={tempo}
          onChangeText={setTempo}
          placeholder="Ex.: 5"
        />
      </View>

      {/* INPUT — TAXA */}
      <View style={exStyles.inputContainer}>
        <Text style={exStyles.labelInput}>Taxa de aplicação (%)</Text>
        <TextInput
          style={exStyles.input}
          keyboardType="numeric"
          value={taxa}
          onChangeText={setTaxa}
          placeholder="Ex.: 1.2"
        />
      </View>

      {/* INPUT — IPCA */}
      <View style={exStyles.inputContainer}>
        <Text style={exStyles.labelInput}>Taxa do IPCA (%)</Text>
        <TextInput
          style={exStyles.input}
          keyboardType="numeric"
          value={ipca}
          onChangeText={setIpca}
          placeholder="Ex.: 0.4"
        />
      </View>

      {/* BOTÃO CALCULAR */}
      <TouchableOpacity onPress={calcular}>
        <LinearGradient
          colors={["#004cff", "#002a9c"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[exStyles.buttonPrimary]}
        >
          <Text style={exStyles.buttonPrimaryText}>Calcular</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* RESULTADO */}
      {resultado && (
        <View style={{ marginTop: 25 }}>
          <Text style={exStyles.resultText}>
            Montante (Taxa Aplicação): R$ {resultado.montanteAplicacao}
          </Text>

          <Text style={exStyles.resultText}>
            Montante (IPCA): R$ {resultado.montanteIpca}
          </Text>

          <Text style={exStyles.resultText}>
            Diferença: R$ {resultado.diferenca}
          </Text>
        </View>
      )}

      {/* VOLTAR */}
      <TouchableOpacity onPress={goBack}>
        <Text
          style={{
            marginTop: 25,
            textAlign: "center",
            color: "#00308f",
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}


