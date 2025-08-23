import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Importar las pantallas
import AjustesScreen from "../screens/ajustes";
import ContactosScreen from "../screens/contactos";
import CrearAhorroScreen from "../screens/crear-ahorro";
import DashboardScreen from "../screens/dashboard";
import InvitacionScreen from "../screens/invitacion";
import PerfilScreen from "../screens/perfil";
import HomeScreen from "../screens/home";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          switch (route.name) {
            case "Dashboard":
              iconName = "home";
              break;
            case "Perfil":
              iconName = "person";
              break;
            case "Ajustes":
              iconName = "settings";
              break;
            case "CrearAhorro":
              iconName = "add-circle";
              break;
            case "Contactos":
              iconName = "people";
              break;
            case "Invitacion":
              iconName = "mail";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1e293b",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Ajustes" component={AjustesScreen} />
      <Tab.Screen name="Contactos" component={ContactosScreen} />
      <Tab.Screen name="CrearAhorro" component={CrearAhorroScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Invitacion" component={InvitacionScreen} />
    </Tab.Navigator>
  );
}
