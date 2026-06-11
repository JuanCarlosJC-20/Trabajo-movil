import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DropdownScreen() {

  // Variable de estado

  const [opcion, setOpcion] = useState('react');

  return (
    <View style={styles.container}>

      {/* Dropdown */}
      <Picker  style={styles.colortexto}

        // Valor actualmente seleccionado
        selectedValue={opcion}

     
        onValueChange={(valorSeleccionado) => {

          setOpcion(valorSeleccionado);
        }}
      >

        {/* Opciones del Dropdown */}
        <Picker.Item label="React" value="react" color='black' />
        <Picker.Item label="React Native" value="react-native" color='black'/>
        <Picker.Item label="Expo" value="expo" color='black' />
        <Picker.Item label="TypeScript" value="typescript: TypeScript 
        es un lenguaje de programación libre y de código abierto desarrollado
         y mantenido por Microsoft. Es un superconjunto de JavaScript,
         que esencialmente añade tipos estáticos y objetos basados en clases." color='black' />
        

      </Picker>

      {/* Mostrar el valor seleccionado */}
      <View>
        <Text style={styles.colortexto} > Seleccionaste: {opcion}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
    justifyContent: 'center',
  },
  colortexto: {
     color: 'orange'

  }
 
  ,

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4F46E5',
    marginBottom: 20,
  },

  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4F46E5',
    overflow: 'hidden',

    // sombra Android
    elevation: 5,

    // sombra iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  resultadoContainer: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,

    elevation: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  resultadoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 8,
  },

  resultadoTexto: {
    fontSize: 15,
    color: '#1F2937',
    lineHeight: 22,
  },
});