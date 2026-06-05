import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Modal } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Text } from '@react-navigation/elements';

export default function ModalScreen() {


  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ThemedView style={styles.container}>

      <ThemedText type="title" style={styles.title}>
        Parte 2: Modal
      </ThemedText>

      {/* Botón que abre el modal */}
      <TouchableOpacity
        style={styles.button}

        // Cuando se presiona cambia el estado a true
        // React vuelve a renderizar y muestra el modal
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>
          Abrir Modal
        </Text>
      </TouchableOpacity>

      {/* 
        Componente Modal de React Native
        
        visible={modalVisible}
       
      */}
      <Modal

        // Animación de entrada y salida
        animationType="slide"

        // Permite ver el fondo detrás del modal
        transparent={true}

        // Controla si aparece o no
        visible={modalVisible}

        // Se ejecuta al presionar el botón atrás en Android
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={styles.centeredView}>

          {/* Caja blanca del modal */}
          <View style={styles.modalView}>

            {/* Título */}
            <ThemedText
              type="title"
              style={styles.modalTitle}
            >
              ¡Mensaje Importante Modal!
            </ThemedText>

            {/* Contenido */}
            <ThemedText style={styles.modalText}>
              Este es el contenido del modal!!!
            </ThemedText>

            {/* Contenedor de botones */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  styles.acceptButton
                ]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>
                  Aceptar
                </Text>
              </TouchableOpacity>

              {/* Botón cancelar */}
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  styles.cancelButton
                ]}

                // También cierra el modal
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>
                  Cancelar
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </Modal>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 30,
    textAlign: "center",
    color: "#DC2626",
  },
  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    color: "#000",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  modalButton: {
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  acceptButton: {
    backgroundColor: "#10B981",
  },
  cancelButton: {
    backgroundColor: "#EF4444",
  },
});
