// App.tsx
import React, { useState } from "react";
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
import { AgreementsProvider } from "./app/context/AgreementsContext";
import { LogBox } from "react-native";

// Tabs
import TabsNavigator from "./app/(tabs)/index";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  LogBox.ignoreAllLogs(true); // Oculta todas las advertencias y errores
  // 🚀 estado para simular login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AgreementsProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#1e293b" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          {isLoggedIn ? (
            // ✅ Usuario logueado → mostrar MainTabs
            <Stack.Screen
              name="MainTabs"
              component={TabsNavigator}
              options={{ headerShown: false }}
            />

          ) : (
            // ❌ Usuario NO logueado → mostrar Login/Register
            <>
              <Stack.Screen name="Login" options={{ headerShown: false }}>
                {(props) => (
                  <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />
                )}
              </Stack.Screen>
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
            </>
          )}

          {/* Pantallas extra */}
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Agreements" component={AgreementsListScreen} />
          <Stack.Screen
            name="AgreementDetail"
            component={AgreementDetailScreen}
          />
          <Stack.Screen
            name="CreateAgreement"
            component={CreateAgreementScreen}
          />
          <Stack.Screen name="ReviewOffer" component={ReviewOfferScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="Support" component={SupportScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AgreementsProvider>
  );
}
