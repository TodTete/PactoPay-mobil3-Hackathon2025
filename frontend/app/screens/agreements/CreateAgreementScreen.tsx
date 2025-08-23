import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Collaborator {
  email: string;
  percentage: string;
}

export default function CreateAgreementScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [collaborators, setCollaborators] = useState<Collaborator[]>([{ email: "", percentage: "" }]);

  const addCollaborator = () => {
    setCollaborators([...collaborators, { email: "", percentage: "" }]);
  };

  const updateCollaborator = (index: number, field: keyof Collaborator, value: string) => {
    const updated = [...collaborators];
    updated[index][field] = value;
    setCollaborators(updated);
  };

  const handleCreateAgreement = () => {
    // Lógica para crear el acuerdo
    console.log({
      title,
      description,
      amount,
      clientEmail,
      collaborators
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Crear Nuevo Acuerdo</Text>

      <TextInput
        style={styles.input}
        placeholder="Título del proyecto"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descripción del trabajo"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <TextInput
        style={styles.input}
        placeholder="Monto total ($)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Email del cliente"
        value={clientEmail}
        onChangeText={setClientEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.sectionTitle}>Colaboradores</Text>
      
      {collaborators.map((collab, index) => (
        <View key={index} style={styles.collaboratorRow}>
          <TextInput
            style={[styles.input, styles.collabInput]}
            placeholder="Email del colaborador"
            value={collab.email}
            onChangeText={(value) => updateCollaborator(index, "email", value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.input, styles.percentageInput]}
            placeholder="%"
            value={collab.percentage}
            onChangeText={(value) => updateCollaborator(index, "percentage", value)}
            keyboardType="numeric"
          />
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={addCollaborator}>
        <Text style={styles.addButtonText}>+ Añadir Colaborador</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateAgreement}>
        <Text style={styles.createButtonText}>Crear Acuerdo</Text>
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
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#94a3b8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  },
  textArea: {
    height: 100,
    textAlignVertical: "top"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  collaboratorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  collabInput: {
    flex: 2,
    marginRight: 10
  },
  percentageInput: {
    flex: 1
  },
  addButton: {
    backgroundColor: "#e2e8f0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20
  },
  addButtonText: {
    color: "#475569",
    fontWeight: "bold"
  },
  createButton: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  createButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});