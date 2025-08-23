import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../type/navigation";

type AgreementsListScreenProp = NativeStackNavigationProp<RootStackParamList, "AgreementDetail">;

interface AgreementItem {
  id: string;
  title: string;
  status: string;
  amount: number;
  date: string;
}

const mockAgreements: AgreementItem[] = [
  { id: "1", title: "Proyecto Web", status: "active", amount: 1500, date: "2025-08-23" },
  { id: "2", title: "Diseño App", status: "pending", amount: 800, date: "2025-08-22" },
  { id: "3", title: "Marketing", status: "completed", amount: 2000, date: "2025-08-20" },
  { id: "4", title: "Consultoría", status: "rejected", amount: 1200, date: "2025-08-19" },
];

export default function AgreementsListScreen() {
  const navigation = useNavigation<AgreementsListScreenProp>();

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'active': return '#16a34a';
      case 'pending': return '#d97706';
      case 'completed': return '#475569';
      case 'rejected': return '#dc2626';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'active': return 'Activo';
      case 'pending': return 'Pendiente';
      case 'completed': return 'Completado';
      case 'rejected': return 'Rechazado';
      default: return status;
    }
  };

  const renderAgreementItem = ({ item }: { item: AgreementItem }) => (
    <TouchableOpacity 
      style={styles.agreementCard}
      onPress={() => navigation.navigate("AgreementDetail", { id: item.id })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.agreementTitle}>{item.title}</Text>
        <Text style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          {getStatusText(item.status)}
        </Text>
      </View>
      
      <Text style={styles.agreementAmount}>${item.amount}</Text>
      <Text style={styles.agreementDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Acuerdos</Text>
      
      <FlatList
        data={mockAgreements}
        renderItem={renderAgreementItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
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
    marginBottom: 20,
    textAlign: "center"
  },
  list: {
    flex: 1,
  },
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
  agreementTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  statusBadge: {
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "bold",
  },
  agreementAmount: {
    fontSize: 16,
    color: "#1e293b",
    fontWeight: "600",
    marginBottom: 5,
  },
  agreementDate: {
    fontSize: 14,
    color: "#6b7280",
  },
});