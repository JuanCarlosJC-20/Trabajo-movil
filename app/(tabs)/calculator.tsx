import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  // Guarda lo que aparece en la pantalla
  const [display, setDisplay] = useState("0");

  // Agregar números y operadores
  const agregarValor = (valor: string) => {
    if (display === "0") {
      setDisplay(valor);
    } else {
      setDisplay(display + valor);
    }
  };

  // Limpiar pantalla
  const limpiar = () => {
    setDisplay("0");
  };

  // Borrar último carácter
  const borrar = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  // Realizar cálculo
  const calcular = () => {
    try {
      const resultado = eval(display);
      setDisplay(resultado.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  // Componente reutilizable para botones
  const Boton: React.FC<{ titulo: string; onPress: () => void }> = ({ titulo, onPress }) => (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.textoBoton}>{titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Pantalla */}
      <View style={styles.pantalla}>
        <Text style={styles.textoPantalla}>{display}</Text>
      </View>

      {/* Fila 1 */}
      <View style={styles.fila}>
        <Boton titulo="C" onPress={limpiar} />
        <Boton titulo="⌫" onPress={borrar} />
        <Boton titulo="/" onPress={() => agregarValor("/")} />
        <Boton titulo="*" onPress={() => agregarValor("*")} />
      </View>

      {/* Fila 2 */}
      <View style={styles.fila}>
        <Boton titulo="7" onPress={() => agregarValor("7")} />
        <Boton titulo="8" onPress={() => agregarValor("8")} />
        <Boton titulo="9" onPress={() => agregarValor("9")} />
        <Boton titulo="-" onPress={() => agregarValor("-")} />
      </View>

      {/* Fila 3 */}
      <View style={styles.fila}>
        <Boton titulo="4" onPress={() => agregarValor("4")} />
        <Boton titulo="5" onPress={() => agregarValor("5")} />
        <Boton titulo="6" onPress={() => agregarValor("6")} />
        <Boton titulo="+" onPress={() => agregarValor("+")} />
      </View>

      {/* Fila 4 */}
      <View style={styles.fila}>
        <Boton titulo="1" onPress={() => agregarValor("1")} />
        <Boton titulo="2" onPress={() => agregarValor("2")} />
        <Boton titulo="3" onPress={() => agregarValor("3")} />
        <Boton titulo="=" onPress={calcular} />
      </View>

      {/* Fila 5 */}
      <View style={styles.fila}>
        <Boton titulo="0" onPress={() => agregarValor("0")} />
        <Boton titulo="." onPress={() => agregarValor(".")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },

  pantalla: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 100,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  textoPantalla: {
    fontSize: 40,
    fontWeight: "bold",
  },

  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  boton: {
    flex: 1,
    margin: 5,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },

  textoBoton: {
    fontSize: 24,
    fontWeight: "bold",
  },
});