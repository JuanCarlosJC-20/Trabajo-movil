import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function ScrollLoadingScreen() {

  // Lista inicial
  const [items, setItems] = useState([
    { id: '1', nombre: 'Elemento 1' },
    { id: '2', nombre: 'Elemento 2' },
    { id: '3', nombre: 'Elemento 3' },
    { id: '4', nombre: 'Elemento 4' },
    { id: '5', nombre: 'Elemento 5' },
  ]);

  // Se ejecuta cuando llegamos al final del scroll
  const cargarMas = () => {

    
    const nuevoElemento = {
      id: Date.now().toString(),
      nombre: `Elemento ${items.length + 1}`,
    };

    // Agregarlo a la lista existente
    setItems([...items, nuevoElemento]);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Scroll Loading Simple
      </Text>

      <FlatList
        data={items}

        // Mostrar cada elemento
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>
              {item.nombre}
            </Text>
          </View>
        )}

        // Clave única
        keyExtractor={(item) => item.id}

        onEndReached={cargarMas}

        onEndReachedThreshold={0.5}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F3F4F6',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#4F46E5',
  },

  cardText: {
    fontSize: 16,
  },

});