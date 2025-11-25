import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";

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

    const montanteAplicacao = C * Math.pow(1 + i1, t) + A * ((Math.pow(1 + i1, t) - 1) / i1);
    const montanteIpca = C * Math.pow(1 + i2, t) + A * ((Math.pow(1 + i2, t) - 1) / i2);
    const diferenca = montanteAplicacao - montanteIpca;

    setResultado({
      montanteAplicacao: montanteAplicacao.toFixed(2),
      montanteIpca: montanteIpca.toFixed(2),
      diferenca: diferenca.toFixed(2),
    });
  }

  // Gerar dados para o gráfico
  const gerarGrafico = () => {
    const C = parseFloat(capital);
    const A = parseFloat(aporte);
    const t = parseInt(tempo);
    const i1 = parseFloat(taxa) / 100;
    const i2 = parseFloat(ipca) / 100;

    if (isNaN(C) || isNaN(A) || isNaN(t) || isNaN(i1) || isNaN(i2)) return null;

    const labels = Array.from({ length: t + 1 }, (_, i) => i.toString());
    const serieAplicacao = Array.from({ length: t + 1 }, (_, x) =>
      C * Math.pow(1 + i1, x) + A * ((Math.pow(1 + i1, x) - 1) / i1)
    );
    const serieIpca = Array.from({ length: t + 1 }, (_, x) =>
      C * Math.pow(1 + i2, x) + A * ((Math.pow(1 + i2, x) - 1) / i2)
    );

    return { labels, serieAplicacao, serieIpca };
  };

  const dadosGrafico = gerarGrafico();

  return (
    <ScrollView contentContainerStyle={globalStyles.container2}>
      <Text style={exStyles.title2}>Análise de Investimentos</Text>
      <Text style={exStyles.subtitle2}>Aportes Periódicos</Text>

      {/* INPUTS */}
      {[
        { label: "Capital inicial (R$)", value: capital, setter: setCapital, placeholder: "Ex.: 1000" },
        { label: "Aporte periódico (R$)", value: aporte, setter: setAporte, placeholder: "Ex.: 150" },
        { label: "Tempo (anos)", value: tempo, setter: setTempo, placeholder: "Ex.: 5" },
        { label: "Taxa de aplicação (%)", value: taxa, setter: setTaxa, placeholder: "Ex.: 1.2" },
        { label: "Taxa do IPCA (%)", value: ipca, setter: setIpca, placeholder: "Ex.: 0.4" },
      ].map((item, idx) => (
        <View key={idx} style={exStyles.inputContainer}>
          <Text style={exStyles.labelInput}>{item.label}</Text>
          <TextInput
            style={exStyles.input}
            keyboardType="numeric"
            value={item.value}
            onChangeText={item.setter}
            placeholder={item.placeholder}
          />
        </View>
      ))}



      {/* BOTÃO CALCULAR */}
      <TouchableOpacity onPress={calcular}>
        <LinearGradient
          colors={["#004cff", "#002a9c"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={exStyles.buttonPrimary}
        >
          <Text style={exStyles.buttonPrimaryText}>Calcular</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* VOLTAR */}
      <TouchableOpacity onPress={goBack}>
        <Text style={{ marginTop: 25, textAlign: "center", color: "#00308f", fontWeight: "700", fontSize: 16 }}>
          Voltar
        </Text>
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

      {/* GRÁFICO */}
      {dadosGrafico && (
        <>
          <Text style={[exStyles.title2, { marginTop: 30, marginBottom: 10 }]}>
            Evolução do Investimento
          </Text>
          <LineChart
            data={{
              labels: dadosGrafico.labels,
              datasets: [
                { data: dadosGrafico.serieAplicacao, color: () => "#004cff", strokeWidth: 2 },
                { data: dadosGrafico.serieIpca, color: () => "#ff0000", strokeWidth: 2 },
              ],
            }}
            width={Dimensions.get("window").width - 20}
            height={250}
            yAxisLabel="R$"
            chartConfig={{
              backgroundGradientFrom: "#1e1e1e",
              backgroundGradientTo: "#111",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
              labelColor: () => "#fff",
            }}
            style={{ borderRadius: 16, paddingRight: 20 }}
          />
        </>
      )}


    </ScrollView>
  );
}
