import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../type/navigation";
import { Ionicons } from "@expo/vector-icons";

type AgreementsListScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "AgreementDetail"
>;

interface AgreementItem {
  id: string;
  title: string;
  status: string;
  amount: number;
  date: string;
}

const mockAgreements: AgreementItem[] = [
  { id: "1", title: "Proyecto NFT", status: "active", amount: 1500, date: "2025-08-23" },
  { id: "2", title: "Diseño DAPP", status: "pending", amount: 1000, date: "2025-08-22" },
  { id: "3", title: "Marketing", status: "completed", amount: 500, date: "2025-08-20" },
  { id: "4", title: "Backend", status: "rejected", amount: 200, date: "2025-08-19" },
  { id: "5", title: "Consultoría", status: "pending", amount: 800, date: "2025-08-18" },
];

export default function AgreementsListScreen() {
  const navigation = useNavigation<AgreementsListScreenProp>();
  const [filter, setFilter] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<AgreementItem[]>(mockAgreements);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "active":
        return "#16a34a";
      case "pending":
        return "#d97706";
      case "completed":
        return "#2563eb";
      case "rejected":
        return "#dc2626";
      default:
        return "#6b7280";
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case "active":
        return "Activo";
      case "pending":
        return "Pendiente";
      case "completed":
        return "Completado";
      case "rejected":
        return "Rechazado";
      default:
        return status;
    }
  };

  const toggleFilter = (status: string | null) => {
    if (filter === status) {
      setFilter(null);
      setFilteredData(mockAgreements);
    } else {
      setFilter(status);
      setFilteredData(mockAgreements.filter((item) => item.status === status));
    }
  };

  const renderAgreementItem = ({ item }: { item: AgreementItem }) => (
    <Animated.View style={{ opacity: fadeAnim }}>
      <TouchableOpacity
        style={styles.agreementCard}
        onPress={() => navigation.navigate("AgreementDetail", { id: item.id })}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.agreementTitle}>{item.title}</Text>
          <Text
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor(item.status) },
            ]}
          >
            {getStatusText(item.status)}
          </Text>
        </View>

        <Text style={styles.agreementAmount}>${item.amount}</Text>
        <Text style={styles.agreementDate}>{item.date}</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Contratos</Text>
        <TouchableOpacity onPress={() => toggleFilter(null)} style={styles.filterButton}>
          <Ionicons name="filter" size={22} color="#2563eb" />
          <Text style={styles.filterText}>Filtros</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterRow}>
        <TouchableOpacity onPress={() => toggleFilter("active")}>
          <Text style={[styles.filterChip, { color: "#16a34a" }]}>Activo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFilter("pending")}>
          <Text style={[styles.filterChip, { color: "#d97706" }]}>Pendiente</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFilter("completed")}>
          <Text style={[styles.filterChip, { color: "#2563eb" }]}>Completado</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFilter("rejected")}>
          <Text style={[styles.filterChip, { color: "#dc2626" }]}>Rechazado</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderAgreementItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8fafc" },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: { fontSize: 22, fontWeight: "bold" },
  filterButton: { flexDirection: "row", alignItems: "center" },
  filterText: { marginLeft: 5, color: "#2563eb", fontWeight: "600" },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  filterChip: {
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  list: { flex: 1 },
  agreementCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  agreementTitle: { fontSize: 18, fontWeight: "bold", flex: 1 },
  statusBadge: {
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "bold",
    overflow: "hidden",
  },
  agreementAmount: {
    fontSize: 16,
    color: "#1e293b",
    fontWeight: "600",
    marginBottom: 5,
  },
  agreementDate: { fontSize: 14, color: "#6b7280" },
});
