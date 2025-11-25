import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Svg, Line, Circle, Text as SvgText } from "react-native-svg";

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

    setResult({ px1, py1, px2, py2, a, b, xIntercept, yIntercept });
  }

  // Gerar pontos para a reta contínua
  const gerarPontosReta = () => {
    if (!result) return [];
    const { px1, px2, a, b } = result;
    const minX = Math.min(px1, px2) - 1;
    const maxX = Math.max(px1, px2) + 1;
    const pontos = Array.from({ length: 100 }, (_, i) => {
      const x = minX + (i / 99) * (maxX - minX);
      return { x, y: a * x + b };
    });
    return pontos;
  };

  const screenWidth = Dimensions.get("window").width - 20;
  const screenHeight = 250;
  const padding = 30;

  const pontosReta = gerarPontosReta();

  // Escala X e Y para pixels
  const scaleX = x => {
    if (!result) return 0;
    const xs = pontosReta.map(p => p.x);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    return padding + ((x - minX) / (maxX - minX)) * (screenWidth - 2 * padding);
  };

  const scaleY = y => {
    if (!result) return 0;
    const ys = pontosReta.map(p => p.y);
    const minY = Math.min(...ys, 0); // incluir 0 para intercepto Y
    const maxY = Math.max(...ys, 0);
    return screenHeight - padding - ((y - minY) / (maxY - minY)) * (screenHeight - 2 * padding);
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.container2}>
      <Text style={globalStyles.text2}>Equação da Reta</Text>
      <Text style={globalStyles.subText2}>Função do Primeiro Grau</Text>

      {[{ label: "x1", value: x1, setter: setX1 },
        { label: "y1", value: y1, setter: setY1 },
        { label: "x2", value: x2, setter: setX2 },
        { label: "y2", value: y2, setter: setY2 }
      ].map((item, idx) => (
        <TextInput
          key={idx}
          placeholder={item.label}
          style={exStyles.input}
          keyboardType="numeric"
          value={item.value}
          onChangeText={item.setter}
        />
      ))}

      <TouchableOpacity onPress={calcular}>
        <LinearGradient
          colors={["#09a5ee", "#001aff"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[exStyles.button, { borderRadius: 8, marginVertical: 20 }]}
        >
          <Text style={[globalStyles.text, { paddingVertical: 10, paddingHorizontal: 20 }]}>Calcular</Text>
        </LinearGradient>
        
      </TouchableOpacity>
      {/* VOLTAR */}
      <TouchableOpacity onPress={goBack}>
        <Text style={{ marginTop: 25, textAlign: "center", color: "#00308f", fontWeight: "700", fontSize: 16 }}>
          Voltar
        </Text>
      </TouchableOpacity>
      {result && (
        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.text2}>f(x) = {result.a.toFixed(4)}x + {result.b.toFixed(4)}</Text>
          <Text style={globalStyles.text2}>Intercepto em X: ({result.xIntercept.toFixed(4)}, 0)</Text>
          <Text style={globalStyles.text2}>Intercepto em Y: (0, {result.yIntercept.toFixed(4)})</Text>
        </View>
      )}

      {result && pontosReta.length > 0 && (
        <View style={{ marginTop: 30 }}>
          <Text style={[globalStyles.text2, { marginBottom: 10 }]}>Gráfico da Reta</Text>
          <Svg width={screenWidth} height={screenHeight}>
            {/* Reta contínua */}
            {pontosReta.map((p, i) => {
              if (i === 0) return null;
              const prev = pontosReta[i - 1];
              return (
                <Line
                  key={i}
                  x1={scaleX(prev.x)}
                  y1={scaleY(prev.y)}
                  x2={scaleX(p.x)}
                  y2={scaleY(p.y)}
                  stroke="blue"
                  strokeWidth={2}
                />
              );
            })}

            {/* Pontos principais */}
            <Circle cx={scaleX(result.px1)} cy={scaleY(result.py1)} r={5} fill="red" />
            <Circle cx={scaleX(result.px2)} cy={scaleY(result.py2)} r={5} fill="green" />

            {/* Interceptos */}
            <Circle cx={scaleX(result.xIntercept)} cy={scaleY(0)} r={5} fill="orange" />
            <SvgText
              x={scaleX(result.xIntercept)}
              y={scaleY(0) - 5}
              fill="orange"
              fontSize="12"
              textAnchor="middle"
            >X</SvgText>

            <Circle cx={scaleX(0)} cy={scaleY(result.yIntercept)} r={5} fill="purple" />
            <SvgText
              x={scaleX(0) + 10}
              y={scaleY(result.yIntercept)}
              fill="purple"
              fontSize="12"
            >Y</SvgText>
          </Svg>
        </View>
      )}


    </ScrollView>
  );
}
