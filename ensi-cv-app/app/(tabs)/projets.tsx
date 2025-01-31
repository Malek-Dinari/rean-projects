import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface Projet {
  id: string;
  titre: string;
  duree: string;
  points: string[];
}

const projets: Projet[] = [
  {
    id: '1',
    titre: 'Segmentation de Frottis Médullaire (ENSI)',
    duree: '4 mois',
    points: [
      'Pipeline AI pour classification cellulaire',
      'Fine-tuning MobileNet + YOLOv8',
      'Interface Gradio pour biologistes'
    ]
  },
  {
    id: '2',
    titre: 'Application WeeFizz (Welyne)',
    duree: '3 mois',
    points: [
      'Développement React Native',
      'Scan QR code + recommandations',
      'Intégration avec Prestashop'
    ]
  },
  {
    id: '3',
    titre: 'Modèle Mini-GPT (NLP)',
    duree: 'En cours',
    points: [
      'Implémentation from scratch d\'un architecture GPT-like',
      'Entraînement sur œuvres de Shakespeare',
      'Mécanismes d\'attention et génération de texte',
      'Future intégration MLP pour complexité accrue'
    ]
  },
  {
    id: '4',
    titre: 'Reconnaissance 4D d\'Expressions Faciales (ENSI)',
    duree: '12 mois',
    points: [
      'Algorithmes de traitement de maillages 3D',
      'Descripteurs géodésiques et calcul de distances',
      'Détection SIFT + appariement ICP',
      'Classification biométrique avancée'
    ]
  },
  {
    id: '5',
    titre: 'Notebooks Vision par Ordinateur',
    duree: 'Projet continu',
    points: [
      '4 modules complets : reconnaissance de formes, morphologie mathématique',
      'Traitement d\'images DFT/FFT + débruitage Wiener',
      'Analyse de maillages 3D et courbes géodésiques',
      'Référence éducative pour concepts avancés'
    ]
  },
  {
    id: '6',
    titre: 'Système de Gestion de Fournisseurs (Full-Stack)',
    duree: '2 mois',
    points: [
      'Application CRUD Spring Boot + Angular',
      'Architecture REST API avec PHPMyAdmin',
      'Interface utilisateur dynamique single-page',
      'Gestion complète de données relationnelles'
    ]
  },
  {
    id: '7',
    titre: 'Calculateur de Salaires (ML)',
    duree: '1 mois',
    points: [
      'Analyse du Stack Overflow Survey 2020',
      'Entraînement de modèle prédictif',
      'Interface Streamlit interactive',
      'Visualisation des données salariales'
    ]
  }
];

export default function ProjetsScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: Projet }) => (
    <TouchableOpacity
      style={styles.item}
      //onPress={() => router.push(`./projet-details`)}
    >
      <Text style={styles.itemTitle}>{item.titre}</Text>
      <Text style={styles.itemDuration}>{item.duree}</Text>
      <View style={styles.pointsContainer}>
        {item.points.map((point, index) => (
          <Text key={index} style={styles.point}>• {point}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={projets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2f95dc',
    marginBottom: 4,
  },
  itemDuration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
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