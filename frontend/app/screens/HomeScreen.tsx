import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../src/types/navigation";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a GoalSaver 🎯</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8fafc", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, color: "#1e293b", textAlign: "center" },
  button: { backgroundColor: "#ef4444", padding: 14, borderRadius: 8, width: "60%", alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
