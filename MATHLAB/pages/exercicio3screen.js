import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BarChart, LineChart } from "react-native-chart-kit";

import globalStyles from "../styles/styles";
import exStyles from "../styles/exerciciosStyle";

export default function IRRFScreen({ goBack }) {
  const [salarioBruto, setSalarioBruto] = useState("");
  const [dependentes, setDependentes] = useState("");

  const [baseCalculo, setBaseCalculo] = useState(null);
  const [irrf, setIrrf] = useState(null);

  // ----------------------------------------
  // CÁLCULO DO IRRF
  // ----------------------------------------
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

    if (base <= 2259.2) {
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

  // ----------------------------------------
  // GRÁFICO EVOLUTIVO DE TODAS AS FAIXAS (3.2.4)
  // ----------------------------------------
  function gerarEvolucaoIRRF() {
    const pontos = [];

    for (let base = 0; base <= 8000; base += 200) {
      let aliquota = 0;
      let deducao = 0;

      if (base <= 2259.2) {
        aliquota = 0; deducao = 0;
      } else if (base <= 2826.65) {
        aliquota = 0.075; deducao = 169.44;
      } else if (base <= 3751.05) {
        aliquota = 0.15; deducao = 381.44;
      } else if (base <= 4664.68) {
        aliquota = 0.225; deducao = 662.77;
      } else {
        aliquota = 0.275; deducao = 896.0;
      }

      const impostoReal = base * aliquota - deducao;
      const impostoSemDeducao = base * aliquota;

      pontos.push({
        base,
        impostoReal: impostoReal < 0 ? 0 : impostoReal,
        bruto: impostoSemDeducao < 0 ? 0 : impostoSemDeducao,
      });
    }

    return pontos;
  }

  const evolucao = gerarEvolucaoIRRF();

  const graficoEvolucao = {
    labels: evolucao.map((p) => p.base.toFixed(0)),
    datasets: [
      {
        data: evolucao.map((p) => p.impostoReal),
        color: () => "rgba(0,122,255,1)",
        strokeWidth: 3,
      },
      {
        data: evolucao.map((p) => p.bruto),
        color: () => "rgba(255,60,60,1)",
        strokeWidth: 3,
      },
    ],
    legend: ["IRRF com dedução", "IRRF sem dedução"],
  };

  // ----------------------------------------
  // GRÁFICO COMPARATIVO SIMPLES
  // ----------------------------------------
  const dadosGrafico =
    baseCalculo && irrf
      ? {
          labels: ["Base", "IRRF"],
          datasets: [
            { data: [parseFloat(baseCalculo), parseFloat(irrf)] },
          ],
        }
      : null;

  return (
    <ScrollView contentContainerStyle={globalStyles.container2}>
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

      <TouchableOpacity onPress={calcularIRRF}>
        <LinearGradient
          colors={["#09a5ee", "#001aff"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[exStyles.button, { borderRadius: 8, marginVertical: 20 }]}
        >
          <Text
            style={[globalStyles.text, { paddingHorizontal: 20, paddingTop: 10 }]}
          >
            Calcular
          </Text>
        </LinearGradient>
      </TouchableOpacity>
            
      {/* VOLTAR */}
      <TouchableOpacity onPress={goBack}>
        <Text style={{ marginTop: 25, textAlign: "center", color: "#00308f", fontWeight: "700", fontSize: 16 }}>
          Voltar
        </Text>
      </TouchableOpacity>

      {/* Resultado */}
      {baseCalculo !== null && (
        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.text2}>
            Base de cálculo: R$ {baseCalculo}
          </Text>
          <Text style={globalStyles.text2}>IRRF devido: R$ {irrf}</Text>
        </View>
      )}

      {/* GRÁFICO COMPARATIVO */}
      {dadosGrafico && (
        <>
          <Text
            style={[
              globalStyles.text2,
              { marginTop: 30, marginBottom: 10 },
            ]}
          >
            Comparativo Base x IRRF
          </Text>

          <BarChart
            data={dadosGrafico}
            width={Dimensions.get("window").width - 40}
            height={220}
            yAxisLabel="R$"
            chartConfig={{
              backgroundGradientFrom: "#1e1e1e",
              backgroundGradientTo: "#111",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0,122,255,${opacity})`,
              labelColor: () => "#fff",
            }}
            style={{ borderRadius: 16, paddingRight: 20 }}
            fromZero
          />
        </>
      )}

      {/* GRÁFICO EVOLUTIVO (3.2.4) */}
      <Text
        style={[
          globalStyles.text2,
          { marginTop: 40, marginBottom: 10 },
        ]}
      >
        Evolução do IRRF por Faixa (com e sem dedução)
      </Text>

      <ScrollView horizontal>
        <LineChart
          data={graficoEvolucao}
          width={1800} // gráfico grande
          height={300}
          verticalLabelRotation={90}
          chartConfig={{
            backgroundGradientFrom: "#1e1e1e",
            backgroundGradientTo: "#111",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(200,200,200,${opacity})`,
            labelColor: () => "#fff",
          }}
          bezier
          style={{
            borderRadius: 16,
            marginVertical: 10,
          }}
        />
      </ScrollView>


    </ScrollView>
  );
}
