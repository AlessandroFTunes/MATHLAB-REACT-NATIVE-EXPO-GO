import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2575fc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
 container2: {
  flexGrow: 1,          // permite rolagem
  alignItems: 'center', // centraliza horizontalmente
  padding: 20,
  backgroundColor: '#fff',
},
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#d3d3d3',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2575fc',
  },
  perfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  row: {
    flexDirection: 'row', // faz os itens ficarem lado a lado
    justifyContent: 'space-between', // espaçamento entre os itens
    width: '80%',
    gap: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
    
  },

text2: {
    fontSize: 26,
    color: '#000000ff',
    marginBottom: 15,
    fontWeight: 'bold',
    marginTop: 10,
    
    
  },
  subText2: {
    fontSize: 18,
    color: '#8c8d8dff',
  },
  subText: {
    fontSize: 14,
    color: '#ffffff6c',
    marginBottom: 1,
    fontWeight: 'bold',
    marginTop: 5,
  },
  centralizar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemPequena: {
      width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 2,
  },
  buttonExercicio: {
    background: '#ffffff33',
    padding: 2,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#000b6dff',
    width: '150%',
    height: 300,
  },

});
