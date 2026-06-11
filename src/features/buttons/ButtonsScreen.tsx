import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import { Text } from "@react-navigation/elements";

export default function Buttons() {
  const [buttonColor, setButtoncolor] = useState("#000");
  const [buttonText, setButtonText] = useState("Mi Botón uno");

  const [buttonColor2, setButtoncolor2] = useState("#000");
  const [buttonText2, setButtonText2] = useState("Mi Botón dos");

  const [buttonColor3, setButtoncolor3] = useState("#000");
  const [buttonText3, setButtonText3] = useState("Mi Botón tres");

  return (
    <ThemedView>
      <ThemedText style={styles.titleContainer} type="title">
        Welcome!
      </ThemedText>

      <View style={styles.buttonContainer}>
        <TouchableOpacity

          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={() => {
            if (buttonColor === "#000") {
              setButtoncolor("#ff0000");
              setButtonText("cambio de color uno");
            } else {
              setButtoncolor("#000");
              setButtonText("Mi Botón uno");
            }
          }}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor2 }]}
          onPress={() => {
            if (buttonColor2 === "#000") {
              setButtoncolor2("orange");
              setButtonText2("cambio de color dos");
            } else {
              setButtoncolor2("#000");
              setButtonText2("Mi Botón dos");
            }
          }}
        >
          <Text style={styles.buttonText2}>{buttonText2}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor3 }]}
          onPress={() => {
            if (buttonColor3 === "#000") {
              setButtoncolor3("#00FBFF");
              setButtonText3("cambio color tres");
            } else {
              setButtoncolor3("#000");
              setButtonText3("Mi Botón tres");
            }
          }}
        >
          <Text style={styles.buttonText3}>{buttonText3}</Text>
        </TouchableOpacity>


        <TouchableOpacity>
          

        
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    color: "red",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#000000",
    borderRadius: 5,
    height: 50,
    width: 200,
    top: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    height: 5000,
    backgroundColor: "#4F46E5",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText2: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText3: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
