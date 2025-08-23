import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type/navigation";

import LoginScreen from "./app/screens/auth/LoginScreen";
import RegisterScreen from "./app/screens/auth/RegisterScreen";
import TabsNavigator from "./app/(tabs)/index";
import AgreementDetailScreen from "./app/screens/agreements/AgreementDetailScreen";
import ReviewOfferScreen from "./app/screens/agreements/ReviewOfferScreen";
import PaymentScreen from "./app/screens/payment/PaymentScreen";
import SupportScreen from "./app/screens/support/SupportScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e293b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
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
        <Stack.Screen 
          name="MainTabs" 
          component={TabsNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="AgreementDetail" 
          component={AgreementDetailScreen} 
          options={{ title: "Detalles del Acuerdo" }} 
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}