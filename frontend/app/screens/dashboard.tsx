import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function DashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📊 Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ahorros Totales</Text>
        <Text style={styles.cardValue}>$12,500 MXN</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Meta del Mes</Text>
        <Text style={styles.cardValue}>$2,000 / $3,000</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Próximos Pagos</Text>
        <Text style={styles.cardValue}>3 pendientes</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1e293b",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#475569",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
  },
});
