import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, 
  StyleSheet, ScrollView, Alert 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Collaborator {
  email: string;
  wallet: string;
  percentage: string;
}

export default function CreateAgreementScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [collaboratorEmail, setCollaboratorEmail] = useState("");
  const [collaboratorWallet, setCollaboratorWallet] = useState("");
  const [collaboratorPercentage, setCollaboratorPercentage] = useState("");
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setClientEmail("");
    setAmount("");
    setCollaboratorEmail("");
    setCollaboratorWallet("");
    setCollaboratorPercentage("");
    setCollaborators([]);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const validateWallet = (wallet: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(wallet);
  };

  const addCollaborator = () => {
    if (!validateEmail(collaboratorEmail)) {
      Alert.alert("Error", "El correo del colaborador no es válido.");
      return;
    }
    if (!validateWallet(collaboratorWallet)) {
      Alert.alert("Error", "La wallet debe tener formato válido (0x + 40 caracteres hexadecimales).");
      return;
    }
    if (!collaboratorPercentage || isNaN(Number(collaboratorPercentage))) {
      Alert.alert("Error", "Ingresa un porcentaje válido para el colaborador.");
      return;
    }

    setCollaborators([
      ...collaborators,
      { 
        email: collaboratorEmail, 
        wallet: collaboratorWallet, 
        percentage: collaboratorPercentage 
      }
    ]);
    setCollaboratorEmail("");
    setCollaboratorWallet("");
    setCollaboratorPercentage("");
  };

  const handleSave = () => {
    if (!title || !description || !clientEmail || !amount) {
      Alert.alert("Error", "Completa todos los campos del proyecto y cliente.");
      return;
    }
    if (!validateEmail(clientEmail)) {
      Alert.alert("Error", "El correo del cliente no es válido.");
      return;
    }
    if (collaborators.length === 0) {
      Alert.alert("Error", "Agrega al menos un colaborador.");
      return;
    }

    const totalPercentage = collaborators.reduce(
      (sum, c) => sum + Number(c.percentage), 
      0
    );

    if (totalPercentage !== 100) {
      Alert.alert("Error", `La suma de porcentajes de colaboradores debe ser 100%. Actualmente: ${totalPercentage}%`);
      return;
    }

    // Simulación de guardado exitoso
    Alert.alert("Éxito", "Contacto creado correctamente.");
    resetForm();
  };

  const handleCancel = () => {
    resetForm();
    Alert.alert("Cancelado", "Se limpiaron todos los campos.");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Contrato</Text>
        <Ionicons name="notifications-outline" size={22} color="white" />
        <Text style={styles.headerLogo}>PACTO<Text style={{color:"#3b82f6"}}>Pay</Text></Text>
      </View>

      {/* Proyecto */}
      <Text style={styles.label}>Nombre del Proyecto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del proyecto"
        placeholderTextColor="#94a3b8"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        placeholder="Descripción del proyecto"
        placeholderTextColor="#94a3b8"
        value={description}
        onChangeText={setDescription}
      />

      {/* Colaboradores */}
      <Text style={styles.sectionTitle}>Colaboradores</Text>

      <Text style={styles.labelSmall}>Correo del colaborador</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#94a3b8"
        value={collaboratorEmail}
        onChangeText={setCollaboratorEmail}
      />

      <Text style={styles.labelSmall}>Dirección de wallet</Text>
      <TextInput
        style={styles.input}
        placeholder="0x..."
        placeholderTextColor="#94a3b8"
        value={collaboratorWallet}
        onChangeText={setCollaboratorWallet}
      />

      <Text style={styles.labelSmall}>Porcentaje (%)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 25"
        placeholderTextColor="#94a3b8"
        value={collaboratorPercentage}
        onChangeText={setCollaboratorPercentage}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.addButton} onPress={addCollaborator}>
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>

      {/* Lista de colaboradores */}
      {collaborators.map((c, idx) => (
        <View key={idx} style={styles.chip}>
          <Text style={styles.chipText}>
            {c.email} - {c.percentage}% 
          </Text>
        </View>
      ))}

      {/* Cliente */}
      <Text style={styles.sectionTitle}>Cliente</Text>

      <Text style={styles.labelSmall}>Email del Cliente</Text>
      <TextInput
        style={styles.input}
        placeholder="cliente@email.com"
        placeholderTextColor="#94a3b8"
        value={clientEmail}
        onChangeText={setClientEmail}
      />

      <Text style={styles.labelSmall}>Cantidad a Pagar</Text>
      <TextInput
        style={styles.input}
        placeholder="Monto en $"
        placeholderTextColor="#94a3b8"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      {/* Botones */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Listo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#1e293b" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerTitle: { color: "white", fontSize: 16, fontWeight: "bold" },
  headerLogo: { color: "white", fontSize: 16, fontWeight: "bold" },

  label: { color: "#3b82f6", fontSize: 14, marginTop: 15 },
  labelSmall: { color: "#3b82f6", fontSize: 12, marginTop: 10 },
  sectionTitle: { color: "white", fontSize: 16, fontWeight: "bold", marginTop: 20 },

  input: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    marginTop: 8
  },

  addButton: {
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 15
  },
  addButtonText: { color: "white", fontWeight: "bold" },

  chip: {
    backgroundColor: "#22c55e",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginTop: 8,
    alignSelf: "flex-start"
  },
  chipText: { color: "white", fontWeight: "bold" },

  buttonsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 30 },
  cancelButton: {
    backgroundColor: "#ef4444",
    flex: 1,
    marginRight: 10,
    borderRadius: 20,
    padding: 15,
    alignItems: "center"
  },
  cancelButtonText: { color: "white", fontWeight: "bold" },

  saveButton: {
    backgroundColor: "#3b82f6",
    flex: 1,
    marginLeft: 10,
    borderRadius: 20,
    padding: 15,
    alignItems: "center"
  },
  saveButtonText: { color: "white", fontWeight: "bold" }
});
