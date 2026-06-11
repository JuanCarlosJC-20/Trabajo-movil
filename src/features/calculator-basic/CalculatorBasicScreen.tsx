import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Text } from "@react-navigation/elements";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function CalculatorScreen() {

  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberPress = (num: string) => {
    
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(result.toString());
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    const currentValue = parseFloat(display);

    if (previousValue !== null && operation) {
      // Caso especial: 5 * 5 = "Hello world"
      if (previousValue === 5 && currentValue === 5 && operation === "*") {
        setDisplay("Hello world");
      } else {
        const result = calculate(previousValue, currentValue, operation);
        setDisplay(result.toString());
      }
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setWaitingForNewValue(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Parte 4: Calculadora Básica
      </ThemedText>

      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
      </View>

      {/* Botones */}
      <View style={styles.buttonsContainer}>
        {/* Primera fila - Operaciones especiales */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonLarge} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperation("/")}
          >
            <Text style={[styles.buttonText, styles.operationText]}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperation("*")}
          >
            <Text style={[styles.buttonText, styles.operationText]}>×</Text>
          </TouchableOpacity>
        </View>

        {/* Segunda fila */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("7")}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("8")}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("9")}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperation("-")}
          >
            <Text style={[styles.buttonText, styles.operationText]}>−</Text>
          </TouchableOpacity>
        </View>

        {/* Tercera fila */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("4")}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("5")}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("6")}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperation("+")}
          >
            <Text style={[styles.buttonText, styles.operationText]}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Cuarta fila */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("1")}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("2")}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("3")}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEquals}>
            <Text style={[styles.buttonText, styles.equalsText]}>=</Text>
          </TouchableOpacity>
        </View>

        {/* Quinta fila */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonLarge}
            onPress={() => handleNumberPress("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDecimal}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    color: "#DC2626",
  },
  displayContainer: {
    backgroundColor: "#1F2937",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    justifyContent: "flex-end",
    height: 80,
  },
  display: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "right",
  },
  buttonsContainer: {
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#4F46E5",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLarge: {
    flex: 2,
    backgroundColor: "#4F46E5",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  operationText: {
    color: "#FCD34D",
    fontSize: 20,
  },
  equalsText: {
    color: "#10B981",
    fontSize: 24,
  },
});
