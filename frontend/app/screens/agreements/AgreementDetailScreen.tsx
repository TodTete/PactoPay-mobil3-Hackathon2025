import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../type/navigation";
import { useAgreements } from "../../context/AgreementsContext";

type AgreementDetailRouteProp = RouteProp<RootStackParamList, "Detail">;

export default function AgreementDetailScreen() {
  const route = useRoute<AgreementDetailRouteProp>();
  const { agreements } = useAgreements();
  const { id } = route.params;

  const agreement = agreements.find((a) => a.id === id);
  if (!agreement) return <Text>No encontrado</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{agreement.title}</Text>
      <Text style={styles.description}>{agreement.description}</Text>
      <Text style={styles.amount}>Monto: ${agreement.amount}</Text>
      <Text style={styles.client}>Cliente: {agreement.clientEmail}</Text>
      <Text style={styles.status}>Estado: {agreement.status}</Text>
      <Text style={styles.sectionTitle}>Colaboradores</Text>
      {agreement.collaborators.map((col, idx) => (
        <Text key={idx}>
          {col.email} - {col.percentage}% ({col.status})
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold" },
  description: { marginVertical: 10, fontSize: 16 },
  amount: { fontSize: 16, fontWeight: "bold" },
  client: { fontSize: 16 },
  status: { fontSize: 16, marginTop: 5 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
});
