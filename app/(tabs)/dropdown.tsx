import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DropdownScreen() {

  // Variable de estado

  const [opcion, setOpcion] = useState('react');

  return (
    <View style={styles.container}>

      {/* Dropdown */}
      <Picker

        // Valor actualmente seleccionado
        selectedValue={opcion}

     
        onValueChange={(valorSeleccionado) => {

          setOpcion(valorSeleccionado);
        }}
      >

        {/* Opciones del Dropdown */}
        <Picker.Item label="React" value="react" />
        <Picker.Item label="React Native" value="react-native" />
        <Picker.Item label="Expo" value="expo" />
        <Picker.Item label="TypeScript" value="typescript: TypeScript 
        es un lenguaje de programación libre y de código abierto desarrollado
         y mantenido por Microsoft. Es un superconjunto de JavaScript,
         que esencialmente añade tipos estáticos y objetos basados en clases." />
        

      </Picker>

      {/* Mostrar el valor seleccionado */}
      <View>
        <Text> Seleccionaste: {opcion}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});