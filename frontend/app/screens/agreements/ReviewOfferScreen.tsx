import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../type/navigation";

type ReviewOfferRouteProp = RouteProp<RootStackParamList, "ReviewOffer">;

export default function ReviewOfferScreen() {
  const route = useRoute<ReviewOfferRouteProp>();
  const { id } = route.params;
  const [reason, setReason] = useState("");

  // Datos de ejemplo
  const offer = {
    id,
    title: "Proyecto Web",
    amount: 1500,
    percentage: 30,
    client: "cliente@ejemplo.com",
    description: "Desarrollo de sitio web corporativo"
  };

  const handleAccept = () => {
    console.log("Oferta aceptada:", id);
  };

  const handleReject = () => {
    console.log("Oferta rechazada:", id, "Razón:", reason);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Revisar Oferta</Text>
      
      <View style={styles.offerCard}>
        <Text style={styles.offerTitle}>{offer.title}</Text>
        <Text style={styles.offerDescription}>{offer.description}</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Cliente:</Text>
          <Text style={styles.detailValue}>{offer.client}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Monto total:</Text>
          <Text style={styles.detailValue}>${offer.amount}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Tu porcentaje:</Text>
          <Text style={styles.detailValue}>{offer.percentage}%</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Tu ganancia:</Text>
          <Text style={styles.detailValue}>${offer.amount * offer.percentage / 100}</Text>
        </View>
      </View>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Razón de rechazo (opcional)"
        value={reason}
        onChangeText={setReason}
        multiline
        numberOfLines={3}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={handleAccept}>
          <Text style={styles.buttonText}>Aceptar Oferta</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={handleReject}>
          <Text style={styles.buttonText}>Rechazar Oferta</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
    textAlign: "center"
  },
  offerCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  offerDescription: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 15,
    textAlign: "center"
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151"
  },
  detailValue: {
    fontSize: 16,
    color: "#1e293b",
    fontWeight: "600"
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#94a3b8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },
  textArea: {
    height: 80,
    textAlignVertical: "top"
  },
  buttonContainer: {
    gap: 10,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  acceptButton: {
    backgroundColor: "#16a34a",
  },
  rejectButton: {
    backgroundColor: "#dc2626",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});