import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../styles/styles";
import exStyles from "../styles/exerciciosStyle";

export default function Exercicio1Screen({ goBack }) {
  const [capital, setCapital] = useState("");
  const [tempo, setTempo] = useState("");
  const [taxa, setTaxa] = useState("");
  const [ipca, setIpca] = useState("");

  const [resultado, setResultado] = useState(null);

  function calcular() {
    const C = parseFloat(capital);
    const t = parseFloat(tempo);
    const i1 = parseFloat(taxa) / 100;
    const i2 = parseFloat(ipca) / 100;

    if (isNaN(C) || isNaN(t) || isNaN(i1) || isNaN(i2)) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    const montanteAplicacao = C * Math.pow(1 + i1, t);
    const montanteIpca = C * Math.pow(1 + i2, t);
    let diferenca = 0;

if (i1 > i2) {
  diferenca = montanteAplicacao - montanteIpca;
} else {
  diferenca = montanteIpca - montanteAplicacao;
}
    setResultado({
      montanteAplicacao: montanteAplicacao.toFixed(2),
      montanteIpca: montanteIpca.toFixed(2),
      diferenca: diferenca.toFixed(2),
    });
  }

  return (
    <View style={globalStyles.container2}>
      <Text style={globalStyles.text2}>Análise de Investimentos</Text>
      <Text style={globalStyles.subText2}>Juros Compostos</Text>

      <TextInput
        placeholder="Capital inicial (R$)"
        style={exStyles.input}
        keyboardType="numeric"
        value={capital}
        onChangeText={setCapital}
      />

      <TextInput
        placeholder="Tempo de aplicação (meses ou anos)"
        style={exStyles.input}
        keyboardType="numeric"
        value={tempo}
        onChangeText={setTempo}
      />

      <TextInput
        placeholder="Taxa de aplicação (%)"
        style={exStyles.input}
        keyboardType="numeric"
        value={taxa}
        onChangeText={setTaxa}
      />

      <TextInput
        placeholder="Taxa do IPCA (%)"
        style={exStyles.input}
        keyboardType="numeric"
        value={ipca}
        onChangeText={setIpca}
      />

      {/* Botão Calcular */}
      <TouchableOpacity  onPress={calcular}>
        <LinearGradient 
          colors={["#09a5ee", "#001aff"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[exStyles.button,{ borderRadius: 8, marginVertical: 20,},]}
        >
          <Text style={[globalStyles.text,{paddingLeft:20 ,paddingRight:20,paddingTop:10,},]}>Calcular</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Resultado */}
      {resultado && (
        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.text2}>
            Montante (taxa): R$ {resultado.montanteAplicacao}
          </Text>
          <Text style={globalStyles.text2}>
            Montante (IPCA): R$ {resultado.montanteIpca}
          </Text>
          <Text style={globalStyles.text2}>
            Diferença: R$ {(resultado.diferenca)}
          </Text>
        </View>
      )}

      {/* Botão Voltar */}
      <TouchableOpacity onPress={goBack}>
        <Text style={[exStyles.buttonText, { marginTop: 20 }]}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
