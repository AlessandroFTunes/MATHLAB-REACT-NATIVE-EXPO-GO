import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
// ——— INPUTS PROFISSIONAIS ———
inputContainer: {
  width: "100%",
  marginBottom: 18,
},

labelInput: {
  color: "#001a55",
  fontSize: 16,
  fontWeight: "600",
  marginBottom: 6,
},

input: {
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: 14,
  paddingVertical: 14,
  paddingHorizontal: 16,
  borderWidth: 1.5,
  borderColor: "#d7e2ff",
  fontSize: 16,
  color: "#001a55",
  marginVertical: 10,

  // Sombra elegante (iOS + Android)
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.12,
  shadowRadius: 6,
  elevation: 4,
},

// ——— TÍTULOS E TEXTOS PROFISSIONAIS ———
title2: {
  fontSize: 28,
  fontWeight: "800",
  color: "#001a55",
  marginBottom: 8,
  textAlign: "center",
},

subtitle2: {
  fontSize: 16,
  color: "#5b6b8c",
  marginBottom: 28,
  textAlign: "center",
},

sectionTitle: {
  fontSize: 20,
  fontWeight: "700",
  color: "#00308f",
  marginTop: 15,
  marginBottom: 8,
},

resultText: {
  fontSize: 18,
  fontWeight: "600",
  color: "#001a55",
  marginVertical: 4,
},

// ——— BOTÃO DE CALCULAR ———
buttonPrimary: {
  width: "100%",
  paddingVertical: 15,
  borderRadius: 14,
  alignItems: "center",

  // sombra leve
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.15,
  shadowRadius: 6,
  elevation: 3,
},

buttonPrimaryText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "700",
  letterSpacing: 0.5,
},
});
