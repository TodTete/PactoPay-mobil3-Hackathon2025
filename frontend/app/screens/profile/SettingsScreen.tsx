import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notificaciones</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Modo Oscuro</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.supportButton]}>
        <Text style={styles.buttonText}>Soporte</Text>
      </TouchableOpacity>
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
  }
});