import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Switch, 
  TouchableOpacity, 
  Alert, 
  Modal, 
  ScrollView 
} from "react-native";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleNotifications = (value: boolean) => {
    if (!value) {
      Alert.alert("Alertas desactivadas", "Ya no recibirás notificaciones.");
      setNotifications(false);
    } else {
      Alert.alert(
        "Activar Notificaciones",
        "¿Quieres activar las notificaciones?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Sí, activar", onPress: () => setNotifications(true) }
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      
      {/* Notificaciones */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notificaciones</Text>
        <Switch
          value={notifications}
          onValueChange={handleToggleNotifications}
        />
      </View>

      {/* Botón Soporte */}
      <TouchableOpacity 
        style={[styles.button, styles.supportButton]} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Soporte</Text>
      </TouchableOpacity>

      {/* Modal Soporte */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>Soporte PactoPay</Text>
              <Text style={styles.modalText}>
                🚀 PactoPay - Pagos transparentes y automatizados para freelancers en Latinoamérica
              </Text>
              <Text style={styles.modalText}>
                💡 Contratos inteligentes aseguran pagos justos y rápidos. 
              </Text>
              <Text style={styles.modalText}>
                ✅ Pagos liberados automáticamente al cumplir entregables. 
              </Text>
              <Text style={styles.modalText}>
                🌍 Transparencia, seguridad y confianza para freelancers y clientes.
              </Text>
              <Text style={styles.modalText}>
                📌 Para más ayuda contáctanos en: soporte@pactopay.com
              </Text>
            </ScrollView>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center"
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingText: {
    fontSize: 16,
    fontWeight: "500"
  },
  button: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },
  supportButton: {
    backgroundColor: "#475569"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalContent: {
    width: "90%",
    maxHeight: "70%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#1e293b"
  },
  modalText: {
    fontSize: 14,
    marginBottom: 10,
    color: "#475569"
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 8,
    alignItems: "center"
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold"
  }
});
