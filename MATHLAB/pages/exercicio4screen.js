import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../styles/styles";
import exStyles from "../styles/exerciciosStyle";

export default function Exercicio4Screen({ goBack }) {
  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [x2, setX2] = useState("");
  const [y2, setY2] = useState("");

  const [result, setResult] = useState(null);

  function calcular() {
    const px1 = parseFloat(x1);
    const py1 = parseFloat(y1);
    const px2 = parseFloat(x2);
    const py2 = parseFloat(y2);

    if (isNaN(px1) || isNaN(py1) || isNaN(px2) || isNaN(py2)) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    if (px1 === px2) {
      alert("Essa é uma reta vertical (x = constante). Não possui forma f(x)=ax+b.");
      return;
    }

    const a = (py2 - py1) / (px2 - px1);
    const b = py1 - a * px1;

    const xIntercept = -b / a;
    const yIntercept = b;

    setResult({
      a: a.toFixed(4),
      b: b.toFixed(4),
      xIntercept: xIntercept.toFixed(4),
      yIntercept: yIntercept.toFixed(4),
    });
  }

  return (
    <ScrollView contentContainerStyle={globalStyles.container2}>

      <Text style={globalStyles.text2}>Equação da Reta</Text>
      <Text style={globalStyles.subText2}>Função do Primeiro Grau</Text>

      {/* Input ponto 1 */}
      <TextInput
        placeholder="x1"
        style={exStyles.input}
        keyboardType="numeric"
        value={x1}
        onChangeText={setX1}
      />

      <TextInput
        placeholder="y1"
        style={exStyles.input}
        keyboardType="numeric"
        value={y1}
        onChangeText={setY1}
      />

      {/* Input ponto 2 */}
      <TextInput
        placeholder="x2"
        style={exStyles.input}
        keyboardType="numeric"
        value={x2}
        onChangeText={setX2}
      />

      <TextInput
        placeholder="y2"
        style={exStyles.input}
        keyboardType="numeric"
        value={y2}
        onChangeText={setY2}
      />

      {/* Botão calcular */}
      <TouchableOpacity onPress={calcular}>
        <LinearGradient
          colors={["#09a5ee", "#001aff"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[
            exStyles.button,
            { borderRadius: 8, marginVertical: 20 },
          ]}
        >
          <Text style={[globalStyles.text, { paddingVertical: 10, paddingHorizontal: 20 }]}>
            Calcular
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Resultado */}
      {result && (
        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.text2}>f(x) = {result.a}x + {result.b}</Text>
          <Text style={globalStyles.text2}>Intercepto em X: ({result.xIntercept}, 0)</Text>
          <Text style={globalStyles.text2}>Intercepto em Y: (0, {result.yIntercept})</Text>
        </View>
      )}

      {/* Botão voltar */}
      <TouchableOpacity onPress={goBack}>
        <Text style={[exStyles.buttonText, { marginTop: 20 }]}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
