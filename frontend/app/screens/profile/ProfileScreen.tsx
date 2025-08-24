import React, { useMemo, useState } from "react";
import { 
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../../../type/navigation";

type ProfileScreenProp = NativeStackNavigationProp<RootStackParamList, "MainTabs">;

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenProp>();

  // Datos “mock” para que se vea funcional
  const user = {
    name: "Cristian Example",
    email: "correo.example.com",
    wallet: "1a2b3c4d5e6f7g8h9i",
    contracts: 12,
    earnings: 1000,
    delivered: 4,
  };

  const initial = useMemo(() => (user.name?.trim()?.[0] || "U").toUpperCase(), [user.name]);
  const [walletVisible, setWalletVisible] = useState(false);

  const maskedWallet = useMemo(() => {
    if (walletVisible) return user.wallet;
    // máscara simple
    if (!user.wallet) return "";
    const start = user.wallet.slice(0, 4);
    const end = user.wallet.slice(-4);
    return `${start}••••••••${end}`;
  }, [walletVisible, user.wallet]);

  const handleBell = () => Alert.alert("Notificaciones", "No hay alertas nuevas por ahora.");

  const handleCopySim = (label: string) => {
    // Simulación de copiado (sin dependencias externas)
    Alert.alert("Copiado", `${label} copiado al portapapeles.`);
  };

  const confirmLogout = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Seguro que quieres salir?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Salir", style: "destructive", onPress: () => navigation.navigate("Login") },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Perfil</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={handleBell} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Ionicons name="notifications-outline" size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.brand}>
            PACTO<Text style={{ color: "#3b82f6" }}>Pay</Text>
          </Text>
        </View>
      </View>

      {/* Avatar + Nombre */}
      <View style={styles.centerBox}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
      </View>

      <View style={styles.separator} />

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{user.contracts}</Text>
          <Text style={styles.statLabel}>Contratos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>${user.earnings.toLocaleString()}</Text>
          <Text style={styles.statLabel}>Ganancias</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{user.delivered}</Text>
          <Text style={styles.statLabelSmall}>Contratos{'\n'}Entregados</Text>
        </View>
      </View>

      <View style={styles.separator} />

      {/* Correo */}
      <Text style={styles.fieldLabel}>Correo</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.inputPill}
        onLongPress={() => handleCopySim("Correo")}
      >
        <Text style={styles.inputText}>{user.email}</Text>
      </TouchableOpacity>

      {/* Wallet */}
      <Text style={styles.fieldLabel}>Wallet</Text>
      <View style={[styles.inputPill, styles.inputRow]}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onLongPress={() => handleCopySim("Wallet")}
          activeOpacity={0.8}
        >
          <Text style={styles.inputText}>{maskedWallet}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWalletVisible(v => !v)}>
          <Ionicons
            name={walletVisible ? "eye-off" : "eye"}
            size={18}
            color="#1e293b"
          />
        </TouchableOpacity>
      </View>

      {/* Botón Cerrar Sesión */}
      <TouchableOpacity style={styles.logoutBtn} onPress={confirmLogout}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1e293b", paddingHorizontal: 18, paddingTop: 16 },

  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerTitle: { color: "#ffffff", fontSize: 16, fontWeight: "700" },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 8 },
  brand: { color: "#ffffff", fontWeight: "800", letterSpacing: 0.4 },

  centerBox: { alignItems: "center", marginTop: 18 },
  avatar: {
    width: 84, height: 84, borderRadius: 42,
    backgroundColor: "#3b82f6", justifyContent: "center", alignItems: "center"
  },
  avatarText: { color: "white", fontSize: 42, fontWeight: "800" },
  name: { color: "#ffffff", fontSize: 20, fontWeight: "700", marginTop: 10 },

  separator: { height: 1, backgroundColor: "rgba(255,255,255,0.2)", marginVertical: 16 },

  statsRow: { flexDirection: "row", justifyContent: "space-between" },
  statCard: {
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    width: "31%",
    alignItems: "center",
  },
  statNumber: { color: "#ffffff", fontSize: 18, fontWeight: "800" },
  statLabel: { color: "#ffffff", marginTop: 6, fontWeight: "600" },
  statLabelSmall: { color: "#ffffff", marginTop: 6, fontWeight: "600", textAlign: "center", fontSize: 12 },

  fieldLabel: { color: "#3b82f6", fontWeight: "700", marginTop: 10, marginBottom: 6 },

  inputPill: {
    backgroundColor: "#eef2f7",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  inputRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  inputText: { color: "#1e293b", fontWeight: "600" },

  logoutBtn: {
    backgroundColor: "#0f172a",
    borderRadius: 22,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 24,
  },
  logoutText: { color: "#ffffff", fontWeight: "800" },
});
