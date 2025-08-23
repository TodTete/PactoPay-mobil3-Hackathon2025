import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from "react-native";

export default function SupportScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const faqs = [
    {
      question: "¿Cómo crear un nuevo acuerdo?",
      answer: "Ve a la pestaña 'Crear Acuerdo', completa los datos y envía las invitaciones."
    },
    {
      question: "¿Puedo modificar un acuerdo después de crearlo?",
      answer: "Solo puedes modificar acuerdos que estén en estado 'Pendiente'."
    },
    {
      question: "¿Cómo recibo mis pagos?",
      answer: "Los pagos se procesan automáticamente cuando el cliente confirma el pago."
    }
  ];

  const handleSubmit = () => {
    console.log("Mensaje de soporte enviado:", { name, email, message });
    // Limpiar formulario
    setName("");
    setEmail("");
    setMessage("");
    alert("¡Mensaje enviado! Te contactaremos pronto.");
  };

  const openEmail = () => {
    Linking.openURL("mailto:soporte@goalguard.com");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Soporte</Text>
      
      <Text style={styles.sectionTitle}>Preguntas Frecuentes</Text>
      
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqCard}>
          <Text style={styles.faqQuestion}>Q: {faq.question}</Text>
          <Text style={styles.faqAnswer}>A: {faq.answer}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Contacto Directo</Text>
      
      <TouchableOpacity style={styles.contactButton} onPress={openEmail}>
        <Text style={styles.contactButtonText}>📧 Enviar correo a soporte</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Formulario de Contacto</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe tu problema o consulta"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
      </TouchableOpacity>

      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>Estado del Sistema</Text>
        <View style={styles.statusItem}>
          <View style={[styles.statusIndicator, { backgroundColor: '#22c55e' }]} />
          <Text style={styles.statusText}>Servicio operativo</Text>
        </View>
        <Text style={styles.statusNote}>Última actualización: Hoy 15:20</Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
    color: "#1e293b"
  },
  faqCard: {
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
  faqQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1e293b"
  },
  faqAnswer: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20
  },
  contactButton: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20
  },
  contactButtonText: {
    color: "white",
    fontWeight: "bold"
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
  submitButton: {
    backgroundColor: "#16a34a",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  statusContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10
  },
  statusText: {
    fontSize: 16,
    color: "#475569"
  },
  statusNote: {
    fontSize: 14,
    color: "#6b7280",
    fontStyle: "italic",
    textAlign: "center"
  }
});