import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ejercicios React Native</ThemedText>
        <HelloWave />
      </ThemedView>

      <View style={styles.menu}>
        <ThemedText style={styles.menuTitle}>
          Bienvenido a los Ejercicios
        </ThemedText>

        <View style={styles.infoContainer}>
          <ThemedText style={styles.infoText}>
            Puedes acceder a los ejercicios de dos formas:
          </ThemedText>

          <View style={styles.methodContainer}>
            <ThemedText style={styles.methodTitle}>
               Menú Lateral (Drawer)
            </ThemedText>
            <ThemedText style={styles.methodDesc}>
              Desliza desde la izquierda o toca el ícono de menú para ver todas
              las partes del ejercicio en el menú lateral.
            </ThemedText>
          </View>

          <View style={styles.methodContainer}>
            <ThemedText style={styles.methodTitle}>
              Pestañas Inferiores (Bottom Tabs)
            </ThemedText>
            <ThemedText style={styles.methodDesc}>
              Usa las pestañas en la parte inferior para navegar rápidamente
              entre todos los ejercicios.
            </ThemedText>
          </View>

          <View style={styles.exercisesContainer}>
            <ThemedText style={styles.exercisesTitle}>
              Ejercicios disponibles:
            </ThemedText>
            <ThemedText style={styles.exerciseItem}>
              ☠️ Parte 1: Botones
            </ThemedText>
            <ThemedText style={styles.exerciseItem}>
              ☠️ Parte 2: Modal/Dialog
            </ThemedText>
            <ThemedText style={styles.exerciseItem}>
              ☠️ Parte 3: Dropdown/Picker
            </ThemedText>
            <ThemedText style={styles.exerciseItem}>
              ☠️ Parte 4: Calculadora
            </ThemedText>
            <ThemedText style={styles.exerciseItem}>
              ☠️ Parte 5: Scroll Loading
            </ThemedText>
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  menu: {
    marginTop: 20,
    gap: 12,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4F46E5",
    textAlign: "center",
  },
  infoContainer: {
   
    borderRadius: 8,
    padding: 15,
    gap: 12,
  },
  infoText: {
    fontSize: 14,
    textAlign: "center",
    color: "#407ccb",
    fontWeight: "500",
   
  },
  methodContainer: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 12,
    borderLeftWidth: 4,
    
  },
  methodTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4F46E5",
    marginBottom: 4,
  },
  methodDesc: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
  },
  exercisesContainer: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 12,
    marginTop: 8,
  },
  exercisesTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4F46E5",
    marginBottom: 8,
  },
  exerciseItem: {
    fontSize: 12,
    color: "#333",
    marginVertical: 3,
    paddingLeft: 10,
  },
});
