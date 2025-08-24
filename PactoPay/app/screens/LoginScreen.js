// app/screens/LoginScreen.js
import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert
} from "react-native";
import { AppKitButton } from "@reown/appkit-wagmi-react-native";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAccount } from "wagmi";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { address } = useAccount();

  const onLogin = () => {
    // --- Aquí agregarías autenticación tradicional (backend) si la vas a implementar
    Alert.alert("Login", "Función de login tradicional no implementada (placeholder).");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Dejar espacio para que pongas tu imagen luego */}
        <View style={styles.logoBox}>
          <Text style={styles.logoTextBlue}>PACTO</Text><Text style={styles.logoTextWhite}>Pay</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputRow}>
          <Ionicons name="mail-outline" size={18} style={styles.inputIcon} />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="example@example.com"
            placeholderTextColor="#9aa0b0"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={[styles.label, { marginTop: 12 }]}>Password</Text>
        <View style={styles.inputRow}>
          <Ionicons name="lock-closed-outline" size={18} style={styles.inputIcon} />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="********"
            placeholderTextColor="#9aa0b0"
            style={styles.input}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        {/* Botón de AppKit (abre modal de Reown para wallet connect) */}
        <View style={{ marginBottom: 10 }}>
          <AppKitButton buttonProps={{ style: styles.reownButton, textStyle: styles.reownText }}>
            Conectar Wallet
          </AppKitButton>
        </View>

        {/* Botones sociales (placeholders) */}
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#1877F2" }]}>
          <FontAwesome name="facebook" size={18} color="#fff" />
          <Text style={styles.socialText}>  Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#fff", borderWidth:1, borderColor:'#ddd' }]}>
          <FontAwesome name="google" size={18} />
          <Text style={[styles.socialText, { color: "#222" }]}>  Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#000" }]}>
          <MaterialCommunityIcons name="twitter" size={18} color="#fff" />
          <Text style={styles.socialText}>  Continue with X</Text>
        </TouchableOpacity>

        {/* Mostrar dirección si wallet conectada */}
        {address ? (
          <Text style={styles.addressText}>Wallet conectada: {address}</Text>
        ) : null}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2b2f36", alignItems: "center", justifyContent: "flex-start", paddingTop: 40 },
  header: { width: "90%", marginBottom: 8 },
  logoBox: { height: 90, borderRadius: 14, backgroundColor: "#1f2226", alignItems: "center", justifyContent: "center", marginBottom: 8 },
  logoTextBlue: { color: "#2b8cff", fontSize: 28, fontWeight: "700", letterSpacing: 2 },
  logoTextWhite: { color: "#fff", fontSize: 28, fontWeight: "700" },
  card: { width: "90%", backgroundColor: "#121316", padding: 18, borderRadius: 16, marginTop: 10 },
  title: { color: "#fff", fontSize: 20, textAlign: "center", marginBottom: 12 },
  label: { color: "#9aa0b0", fontSize: 12, marginBottom: 6 },
  inputRow: { flexDirection: "row", alignItems: "center", backgroundColor: "#1b1d21", borderRadius: 8, paddingHorizontal: 10, marginBottom: 6 },
  inputIcon: { color: "#9aa0b0", marginRight: 8 },
  input: { flex: 1, color: "#fff", height: 42 },
  loginButton: { backgroundColor: "#2b8cff", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginTop: 8 },
  loginText: { color: "#fff", fontWeight: "600" },
  orRow: { flexDirection: "row", alignItems: "center", marginVertical: 12 },
  line: { height: 1, backgroundColor: "#2b2f36", flex: 1 },
  orText: { color: "#9aa0b0", marginHorizontal: 8 },
  reownButton: { backgroundColor: "#2948ff", paddingVertical: 11, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  reownText: { color: "#fff", fontWeight: "700" },
  socialBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 10, borderRadius: 10, marginBottom: 8 },
  socialText: { color: "#fff", fontWeight: "600" },
  addressText: { color: "#9aa0b0", marginTop: 8, textAlign: "center" }
});
