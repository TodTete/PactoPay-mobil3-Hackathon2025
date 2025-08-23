import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../type/navigation";

type PaymentRouteProp = RouteProp<RootStackParamList, "Payment">;

export default function PaymentScreen() {
  const route = useRoute<PaymentRouteProp>();
  const { id } = route.params;
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Datos de ejemplo
  const payment = {
    id,
    title: "Proyecto Web",
    amount: 1500,
    client: "cliente@ejemplo.com",
    collaborators: [
      { email: "colab1@ejemplo.com", percentage: 50, amount: 750 },
      { email: "colab2@ejemplo.com", percentage: 30, amount: 450 },
      { email: "colab3@ejemplo.com", percentage: 20, amount: 300 }
    ]
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isProcessing) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1e293b" />
        <Text style={styles.processingText}>Procesando pago...</Text>
      </View>
    );
  }

  if (isSuccess) {
    return (
      <View style={styles.container}>
        <Text style={styles.successIcon}>✅</Text>
        <Text style={styles.successTitle}>¡Pago Completado!</Text>
        <Text style={styles.successText}>El pago se ha procesado correctamente.</Text>
        <Text style={styles.amount}>${payment.amount}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Volver al Dashboard</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmar Pago</Text>
      
      <View style={styles.paymentCard}>
        <Text style={styles.paymentTitle}>{payment.title}</Text>
        <Text style={styles.paymentAmount}>${payment.amount}</Text>
        <Text style={styles.paymentClient}>Cliente: {payment.client}</Text>
      </View>

      <Text style={styles.sectionTitle}>Distribución a Colaboradores</Text>
      
      {payment.collaborators.map((collab, index) => (
        <View key={index} style={styles.collaboratorRow}>
          <Text style={styles.collabEmail}>{collab.email}</Text>
          <Text style={styles.collabAmount}>${collab.amount} ({collab.percentage}%)</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Confirmar y Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  paymentCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  paymentAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#16a34a",
    marginBottom: 10
  },
  paymentClient: {
    fontSize: 16,
    color: "#475569"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
  collaboratorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  collabEmail: {
    fontSize: 16,
    fontWeight: "500"
  },
  collabAmount: {
    fontSize: 16,
    color: "#16a34a",
    fontWeight: "600"
  },
  payButton: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20
  },
  payButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  processingText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#475569"
  },
  successIcon: {
    fontSize: 64,
    textAlign: "center",
    marginBottom: 20
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  successText: {
    fontSize: 16,
    textAlign: "center",
    color: "#475569",
    marginBottom: 20
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#16a34a",
    textAlign: "center",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});