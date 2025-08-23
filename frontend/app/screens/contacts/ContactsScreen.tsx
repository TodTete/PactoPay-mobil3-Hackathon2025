import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📒 Contactos</Text>
      <Text style={styles.subtext}>Funcionalidad de contactos próximamente...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#f8fafc"
  },
  text: { 
    fontSize: 24, 
    fontWeight: "bold",
    marginBottom: 10
  },
  subtext: {
    fontSize: 16,
    color: "#64748b"
  }
});