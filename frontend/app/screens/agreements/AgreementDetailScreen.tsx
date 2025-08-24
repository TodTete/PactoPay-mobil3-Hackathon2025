import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../type/navigation";

type AgreementDetailRouteProp = RouteProp<RootStackParamList, "AgreementDetail">;

interface Collaborator {
  email: string;
  percentage: number;
  status: string;
  reason?: string;
}

interface Agreement {
  id: string;
  title: string;
  description: string;
  amount: number;
  status: string;
  clientEmail: string;
  collaborators: Collaborator[];
}

export default function AgreementDetailScreen() {
  const route = useRoute<AgreementDetailRouteProp>();
  const { id } = route.params;

  // Datos de ejemplo
  const agreement: Agreement = {
    id,
    title: "Proyecto Web",
    description: "Desarrollo de sitio web corporativo",
    amount: 1500,
    status: "active",
    clientEmail: "cliente@ejemplo.com",
    collaborators: [
      { email: "colab1@ejemplo.com", percentage: 50, status: "accepted" },
      { email: "colab2@ejemplo.com", percentage: 30, status: "pending" },
      { email: "colab3@ejemplo.com", percentage: 20, status: "rejected", reason: "No tengo disponibilidad" }
    ]
  };

  const getStatusText = (status: string): string => {
    const statusMap: { [key: string]: string } = {
      active: "Activo",
      pending: "Pendiente",
      completed: "Completado",
      accepted: "Aceptado",
      rejected: "Rechazado"
    };
    return statusMap[status] || status;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{agreement.title}</Text>
      
      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>{getStatusText(agreement.status)}</Text>
      </View>

      <Text style={styles.sectionTitle}>Descripción</Text>
      <Text style={styles.description}>{agreement.description}</Text>

      <Text style={styles.sectionTitle}>Monto Total</Text>
      <Text style={styles.amount}>${agreement.amount}</Text>

      <Text style={styles.sectionTitle}>Cliente</Text>
      <Text style={styles.email}>{agreement.clientEmail}</Text>

      <Text style={styles.sectionTitle}>Colaboradores</Text>
      {agreement.collaborators.map((collab, index) => (
        <View key={index} style={styles.collaboratorCard}>
          <Text style={styles.collabEmail}>{collab.email}</Text>
          <Text style={styles.collabPercentage}>{collab.percentage}%</Text>
          <View style={[
            styles.collabStatus, 
            { backgroundColor: collab.status === 'accepted' ? '#dcfce7' : 
                             collab.status === 'rejected' ? '#fee2e2' : '#fef3c7' }
          ]}>
            <Text style={[
              styles.collabStatusText,
              { color: collab.status === 'accepted' ? '#16a34a' : 
                     collab.status === 'rejected' ? '#dc2626' : '#d97706' }
            ]}>
              {getStatusText(collab.status)}
            </Text>
          </View>
          {collab.reason && <Text style={styles.reason}>Razón: {collab.reason}</Text>}
        </View>
      ))}

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Ver Historial Completo</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 10,
    textAlign: "center"
  },
  statusBadge: {
    backgroundColor: "#1e293b",
    padding: 8,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 20
  },
  statusText: {
    color: "white",
    fontWeight: "bold"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    color: "#475569",
    lineHeight: 24
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#16a34a"
  },
  email: {
    fontSize: 16,
    color: "#475569"
  },
  collaboratorCard: {
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
  collabEmail: {
    fontSize: 16,
    fontWeight: "bold"
  },
  collabPercentage: {
    fontSize: 16,
    color: "#475569",
    marginVertical: 5
  },
  collabStatus: {
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start"
  },
  collabStatusText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  reason: {
    fontSize: 14,
    color: "#dc2626",
    marginTop: 5,
    fontStyle: "italic"
  },
  actionButton: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold"
  }
});