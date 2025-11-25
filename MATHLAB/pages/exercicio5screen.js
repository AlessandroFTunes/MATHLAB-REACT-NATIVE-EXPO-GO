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

  // Função f(x) para o método da bisseção
  function f(x) {
    return x * x - 4; // EXEMPLO: f(x) = x² - 4
  }

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

    // tolerância conforme a imagem: |x_{i+1} - x_i|
    toleranciaAtual = Math.abs((b - a) / 2);

    tabelaTemp.push({
      i: i + 1,
      xinicial: a,
      xmedio: meio,
      xfinal: b,
      fxinicial: f(a),
      fxmedio: f(meio),
      fxfinal: f(b),
      tolerancia: toleranciaAtual,
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

      {/* VOLTAR */}
      <TouchableOpacity onPress={goBack}>
        <Text style={{ marginTop: 25, textAlign: "center", color: "#00308f", fontWeight: "700", fontSize: 16 }}>
          Voltar
        </Text>
      </TouchableOpacity>

        {resultado && (
          <View style={{ marginTop: 20 }}>
            <Text style={globalStyles.text2}>{resultado}</Text>
          </View>
        )}

{tabela.length > 0 && (
  <View style={{ marginTop: 20 }}>
    <Text style={[globalStyles.subText2, { fontSize: 26, marginBottom: 15 }]}>
      Tabela de Iterações
    </Text>

    <ScrollView horizontal>
      <View>

        {/* CABEÇALHO */}
        <View
          style={{
            flexDirection: "row",
            borderWidth: 2,
            borderColor: "#000",
          }}
        >
          {[
            "i",
            "xinicial",
            "xmedio",
            "xfinal",
            "f(xinicial)",
            "f(xmedio)",
            "f(xfinal)",
            "tolerância",
          ].map((titulo, idx) => (
            <View
              key={idx}
              style={{
                width: 60,       // <<<<< LARGURA BEM MAIOR
                borderRightWidth: idx < 7 ? 2 : 0,
                borderColor: "#000",
                paddingVertical: 18,
                paddingHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#5b94ffff",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {titulo}
              </Text>
            </View>
          ))}
        </View>

        {/* LINHAS */}
        {tabela.map((linha, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              borderWidth: 2,
              borderTopWidth: 0,
              borderColor: "#000",
            }}
          >
            {[
              linha.i,
              linha.xinicial.toFixed(2),
              linha.xmedio.toFixed(2),
              linha.xfinal.toFixed(2),
              linha.fxinicial.toFixed(2),
              linha.fxmedio.toFixed(2),
              linha.fxfinal.toFixed(2),
              linha.tolerancia.toFixed(2),
            ].map((valor, idx) => (
              <View
                key={idx}
                style={{
                  width: 60,   // <<<<< LARGURA MAIOR AQUI TAMBÉM
                  borderRightWidth: idx < 7 ? 2 : 0,
                  borderColor: "#000",
                  paddingVertical: 18,
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20 }}>{valor}</Text>
              </View>
            ))}
          </View>
        ))}

      </View>
    </ScrollView>
  </View>
)}





      </View>
    </ScrollView>
  );
}
