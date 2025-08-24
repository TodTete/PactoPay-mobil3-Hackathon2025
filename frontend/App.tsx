import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type/navigation";

// Screens
import LoginScreen from "./app/screens/auth/LoginScreen";
import RegisterScreen from "./app/screens/auth/RegisterScreen";
import DashboardScreen from "./app/screens/dashboard/DashboardScreen";
import AgreementsListScreen from "./app/screens/agreements/AgreementsListScreen";
import AgreementDetailScreen from "./app/screens/agreements/AgreementDetailScreen";
import CreateAgreementScreen from "./app/screens/agreements/CreateAgreementScreen";
import ReviewOfferScreen from "./app/screens/agreements/ReviewOfferScreen";
import PaymentScreen from "./app/screens/payment/PaymentScreen";
import SupportScreen from "./app/screens/support/SupportScreen";
import ProfileScreen from "./app/screens/profile/ProfileScreen";
import SettingsScreen from "./app/screens/profile/SettingsScreen";

// Tabs
import TabsNavigator from "./app/(tabs)/index";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#1e293b" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        {/* Auth */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        {/* Tabs */}
        <Stack.Screen
          name="MainTabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />

        {/* Main */}
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="Agreements"
          component={AgreementsListScreen}
          options={{ title: "Mis Acuerdos" }}
        />
        <Stack.Screen
          name="AgreementDetail"
          component={AgreementDetailScreen}
          options={{ title: "Detalles del Acuerdo" }}
        />
        <Stack.Screen
          name="CreateAgreement"
          component={CreateAgreementScreen}
          options={{ title: "Crear Acuerdo" }}
        />

        {/* Otros */}
        <Stack.Screen
          name="ReviewOffer"
          component={ReviewOfferScreen}
          options={{ title: "Revisar Oferta" }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ title: "Procesar Pago" }}
        />
        <Stack.Screen
          name="Support"
          component={SupportScreen}
          options={{ title: "Soporte" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Configuración" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
