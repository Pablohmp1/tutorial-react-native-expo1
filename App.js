import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>HELLO WORLD!!!!!</Text>
      <Text style={styles.subTitulo}>Subtitulo</Text>
      <Text>Paragrafo</Text>
      <Text>Saiba mais</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloPrincipal: {
    fontSize: '20px',
    color: 'red',
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: '10px',
    color: 'green',
    fontWeight: 'bold',
    shadowColor: 'blue',
    shadowRadius: '1, 5, 6',
  }
  
});
