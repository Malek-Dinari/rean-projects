import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjetDetailsScreen({ route }) {
  const { id } = route.params;

  // Récupérez les détails du projet en fonction de l'ID
  const projet = {
    id: '1',
    titre: 'Segmentation de Frottis Médullaire',
    duree: '4 mois',
    points: [
      'Pipeline AI pour classification cellulaire',
      'Fine-tuning MobileNet + YOLOv8',
      'Interface Gradio pour biologistes',
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{projet.titre}</Text>
      <Text style={styles.duration}>{projet.duree}</Text>
      <View style={styles.pointsContainer}>
        {projet.points.map((point, index) => (
          <Text key={index} style={styles.point}>• {point}</Text>
        ))}
      </View>
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
  duration: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  pointsContainer: {
    marginLeft: 8,
  },
  point: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});