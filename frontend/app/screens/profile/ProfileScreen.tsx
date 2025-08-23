import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../type/navigation";

type ProfileScreenProp = NativeStackNavigationProp<RootStackParamList, "MainTabs">;

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenProp>();

  // Datos de ejemplo del usuario
  const user = {
    name: "Juan Pérez",
    email: "juan.perez@ejemplo.com",
    phone: "+1 234 567 8900",
    joinedDate: "2025-01-15",
    completedAgreements: 12,
    totalEarnings: 8500,
  };

  // Para navegar a Settings, que es una pestaña, necesitamos un enfoque diferente
  const navigateToSupport = () => {
    navigation.navigate("Support");
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.completedAgreements}</Text>
          <Text style={styles.statLabel}>Acuerdos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>${user.totalEarnings}</Text>
          <Text style={styles.statLabel}>Ganancias</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4.8</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información Personal</Text>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Teléfono</Text>
          <Text style={styles.infoValue}>{user.phone}</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Miembro desde</Text>
          <Text style={styles.infoValue}>{user.joinedDate}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acciones</Text>
        
        {/* Settings ya está disponible en la barra de pestañas, no necesitamos navegar a ella */}
        <TouchableOpacity 
          style={[styles.actionButton, styles.supportButton]}
          onPress={navigateToSupport}
        >
          <Text style={styles.actionButtonText}>Soporte</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.logoutButton]}
          onPress={navigateToLogin}
        >
          <Text style={styles.actionButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "#64748b",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#64748b",
  },
  section: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  infoLabel: {
    fontSize: 16,
    color: "#64748b",
  },
  infoValue: {
    fontSize: 16,
    color: "#1e293b",
    fontWeight: "500",
  },
  actionButton: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  supportButton: {
    backgroundColor: "#475569",
  },
  logoutButton: {
    backgroundColor: "#dc2626",
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});