import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type DashboardScreenProp = StackNavigationProp<RootStackParamList, "Dashboard">;

const mockAgreements = [
  { id: "1", title: "Proyecto Web", status: "active", amount: 1500 },
  { id: "2", title: "Diseño App", status: "pending", amount: 800 },
  { id: "3", title: "Marketing", status: "completed", amount: 2000 },
];

export default function DashboardScreen() {
  const navigation = useNavigation<DashboardScreenProp>();

  const renderAgreementItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.agreementCard}
      onPress={() => navigation.navigate("AgreementDetail", { id: item.id })}
    >
      <Text style={styles.agreementTitle}>{item.title}</Text>
      <Text style={styles.agreementAmount}>${item.amount}</Text>
      <Text style={[
        styles.agreementStatus,
        { color: item.status === 'active' ? 'green' : item.status === 'pending' ? 'orange' : 'gray' }
      ]}>
        {item.status === 'active' ? 'Activo' : item.status === 'pending' ? 'Pendiente' : 'Completado'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Saldo disponible: $1,250</Text>
        <Text style={styles.summaryText}>Acuerdos activos: 2</Text>
      </View>

      <FlatList
        data={mockAgreements}
        renderItem={renderAgreementItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <TouchableOpacity 
        style={styles.createButton}
        onPress={() => navigation.navigate("CreateAgreement")}
      >
        <Text style={styles.createButtonText}>+ Crear Nuevo Acuerdo</Text>
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
    marginBottom: 20 
  },
  summary: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
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
  agreementTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  agreementAmount: {
    fontSize: 16,
    color: "#1e293b",
    marginVertical: 5,
  },
  agreementStatus: {
    fontSize: 14,
  },
  createButton: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  createButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});