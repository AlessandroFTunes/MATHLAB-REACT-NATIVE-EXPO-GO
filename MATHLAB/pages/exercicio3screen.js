import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../styles/styles";
import exStyles from "../styles/exerciciosStyle";

export default function IRRFScreen({ goBack }) {
  const [salarioBruto, setSalarioBruto] = useState("");
  const [dependentes, setDependentes] = useState("");

  const [baseCalculo, setBaseCalculo] = useState(null);
  const [irrf, setIrrf] = useState(null);

  function calcularIRRF() {
    const bruto = parseFloat(salarioBruto);
    const deps = parseInt(dependentes) || 0;

    if (isNaN(bruto)) {
      return alert("Preencha todos os campos corretamente!");
    }

    const deducaoDep = 189.59;
    const base = bruto - deps * deducaoDep;

    let aliquota = 0;
    let deducao = 0;

    if (base <= 2259.20) {
      aliquota = 0;
      deducao = 0;
    } else if (base <= 2826.65) {
      aliquota = 0.075;
      deducao = 169.44;
    } else if (base <= 3751.05) {
      aliquota = 0.15;
      deducao = 381.44;
    } else if (base <= 4664.68) {
      aliquota = 0.225;
      deducao = 662.77;
    } else {
      aliquota = 0.275;
      deducao = 896.0;
    }

    const imposto = base * aliquota - deducao;

    setBaseCalculo(base.toFixed(2));
    setIrrf(imposto > 0 ? imposto.toFixed(2) : "0.00");
  }

  return (
    <View style={globalStyles.container2}>
      <Text style={globalStyles.text2}>Cálculo de IRRF</Text>
      <Text style={globalStyles.subText2}>Tabela Progressiva 2025</Text>

      <TextInput
        placeholder="Salário bruto (R$)"
        style={exStyles.input}
        keyboardType="numeric"
        value={salarioBruto}
        onChangeText={setSalarioBruto}
      />

      <TextInput
        placeholder="Número de dependentes"
        style={exStyles.input}
        keyboardType="numeric"
        value={dependentes}
        onChangeText={setDependentes}
      />

      {/* Botão Calcular */}
      <TouchableOpacity onPress={calcularIRRF}>
        <LinearGradient
          colors={["#09a5ee", "#001aff"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[exStyles.button, { borderRadius: 8, marginVertical: 20 }]}
        >
          <Text style={[globalStyles.text, { paddingHorizontal: 20, paddingTop: 10 }]}>
            Calcular
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Resultado */}
      {baseCalculo !== null && (
        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.text2}>Base de cálculo: R$ {baseCalculo}</Text>
          <Text style={globalStyles.text2}>IRRF devido: R$ {irrf}</Text>
        </View>
      )}

      {/* Botão Voltar */}
      <TouchableOpacity onPress={goBack}>
        <Text style={[exStyles.buttonText, { marginTop: 20 }]}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
