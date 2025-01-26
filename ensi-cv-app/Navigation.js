// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilScreen from './app/(tabs)/home';
import ProjetsScreen from './app/(tabs)/projets';
import DiplomesScreen from './app/(tabs)/diplomes';
import ContactScreen from './app/(tabs)/contact';
import ProjetDetailsScreen from './app/projet-details';
import DiplomeDetailsScreen from './app/diplome-details';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2f95dc' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Profil"
          component={ProfilScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Projets"
          component={ProjetsScreen}
        />
        <Stack.Screen
          name="Diplomes"
          component={DiplomesScreen}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
        />
        <Stack.Screen
          name="ProjetDetails"
          component={ProjetDetailsScreen}
          options={{ title: 'Détails du Projet' }}
        />
        <Stack.Screen
          name="DiplomeDetails"
          component={DiplomeDetailsScreen}
          options={{ title: 'Détails du Diplôme' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}