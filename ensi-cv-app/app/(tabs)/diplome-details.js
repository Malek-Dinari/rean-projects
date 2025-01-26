import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DiplomeDetailsScreen({ route }) {
  const { id } = route.params;

  // Récupérez les détails du diplôme en fonction de l'ID
  const diplome = {
    id: '1',
    titre: 'Baccalauréat Scientifique',
    annee: '2018-2019',
    institution: 'Lycée Privé l\'Excellence de Nabeul',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{diplome.titre}</Text>
      <Text style={styles.subtitle}>{diplome.institution}</Text>
      <Text style={styles.year}>{diplome.annee}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f95dc',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  year: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
});