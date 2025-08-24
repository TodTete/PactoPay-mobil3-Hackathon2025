import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Agreement = {
  id: string;
  title: string;
  amount: number;
  status: "Activo" | "Pendiente" | "Completado" | "Rechazado";
};

const mockAgreements: Agreement[] = [
  { id: "1", title: "Proyecto NFT", amount: 1500, status: "Activo" },
  { id: "2", title: "Diseño DAPP", amount: 1000, status: "Pendiente" },
  { id: "3", title: "Marketing", amount: 500, status: "Completado" },
  { id: "4", title: "Backend", amount: 200, status: "Rechazado" },
];

export default function DashboardScreen() {
  const renderAgreementItem = ({ item }: { item: Agreement }) => (
    <View style={styles.agreementCard}>
      <View style={{ flex: 1 }}>
        <Text style={styles.agreementTitle}>{item.title}</Text>
        <Text style={styles.agreementAmount}>${item.amount}</Text>
      </View>
      <View style={[styles.statusBadge, styles[`status${item.status}`]]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </View>
  );

  // Estado para mostrar/ocultar saldo
  const [showBalance, setShowBalance] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.headerRight}>
          <Ionicons name="notifications-outline" size={22} color="#fff" />
          <Text style={styles.logoText}>PACTO<Text style={{ color: "#38bdf8" }}>Pay</Text></Text>
        </View>
      </View>

      {/* Saldo Disponible */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo Disponible</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceAmount}>
            {showBalance ? "$40.06" : "****"}
          </Text>
          <TouchableOpacity onPress={() => setShowBalance((prev) => !prev)}>
            <Ionicons name={showBalance ? "eye-outline" : "eye-off-outline"} size={20} color="#1e293b" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.portfolioBtn}>
          <Text style={styles.portfolioText}>Portafolio</Text>
        </TouchableOpacity>
      </View>

      {/* Métricas */}
      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Acuerdos Activos:</Text>
          <Text style={styles.metricNumber}>10</Text>
        </View>
        {/* Botón Crear un Acuerdo eliminado */}
      </View>

      {/* Filtros (solo UI, sin funcionalidad) */}
      <View style={styles.filtersRow}>
        <Text style={styles.filterText}>Filtros</Text>
        <Ionicons name="filter-outline" size={20} color="#38bdf8" />
      </View>

      {/* Lista de Acuerdos */}
      <FlatList
        data={mockAgreements}
        renderItem={renderAgreementItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  balanceCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: "#334155",
    marginBottom: 5,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
  },
  portfolioBtn: {
    backgroundColor: "#38bdf8",
    alignSelf: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 10,
  },
  portfolioText: {
    color: "#fff",
    fontWeight: "bold",
  },

  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  metricCard: {
    flex: 1,
    backgroundColor: "#1d4ed8",
    borderRadius: 12,
    padding: 15,
    marginRight: 10,
    alignItems: "center",
  },
  metricLabel: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  metricNumber: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  createCard: {
    flex: 1,
    backgroundColor: "#38bdf8",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  createText: {
    color: "#fff",
    marginTop: 5,
    fontWeight: "bold",
  },

  filtersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#334155",
    paddingVertical: 10,
    marginBottom: 10,
  },
  filterText: {
    color: "#fff",
    fontWeight: "bold",
  },

  agreementCard: {
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  agreementTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  agreementAmount: {
    color: "#38bdf8",
    fontSize: 14,
    marginTop: 4,
  },
  statusBadge: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
  },
  statusActivo: {
    backgroundColor: "#22c55e",
  },
  statusPendiente: {
    backgroundColor: "#facc15",
  },
  statusCompletado: {
    backgroundColor: "#3b82f6",
  },
  statusRechazado: {
    backgroundColor: "#ef4444",
  },
});
