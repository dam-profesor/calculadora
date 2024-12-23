import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { Pantalla2 } from './src/components/Pantalla2';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacionDividir, operacionMultiplicar, operacionRestar, operacionSumar,resultado  } = useCalculadora();

  return (
  
    <View style={styles.container}>    
      <Pantalla numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla2 numberOfLines={1} adjustsFontSizeToFit> </Pantalla2>
      ) : (
        <Pantalla2 numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla2>
      )}
      
     
      
      
      <StatusBar style="auto" />

    <View style={styles.fila}>
      <BotonOperacion label='C' width={80} onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-' width={80} onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' width={80} onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/' width={80} onPress={operacionDividir}></BotonOperacion>
    </View>
    <View style={styles.fila}>
      <BotonOperacion label='7' width={80} onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' width={80} onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' width={80} onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' width={80} onPress={operacionMultiplicar}></BotonOperacion>
    </View>
    <View style={styles.fila}>
      <BotonOperacion label='4' width={80} onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' width={80} onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' width={80} onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' width={80} onPress={operacionRestar}></BotonOperacion>
    </View>
    <View style={styles.fila}>
      <BotonOperacion label='1' width={80} onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' width={80} onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' width={80} onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' width={80} onPress={operacionSumar}></BotonOperacion>
    </View>
    <View style={styles.fila}>
      <BotonOperacion label='0' width={180} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' width={80} onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' width={80} onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:  'center',
    justifyContent: 'flex-end',
    paddingBottom:20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom:16,
    paddingHorizontal:10,
    width: '100%',
  }
});
