import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a GoalSaver 🎯</Text>
      <Text style={styles.subtitle}>Aquí verás tus ahorros y metas</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crear nuevo ahorro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonTextSecondary}>Ver mis grupos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 30, color: '#555' },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, marginBottom: 15, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  buttonSecondary: { borderWidth: 1, borderColor: '#007AFF', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center' },
  buttonTextSecondary: { color: '#007AFF', fontWeight: 'bold' },
});
