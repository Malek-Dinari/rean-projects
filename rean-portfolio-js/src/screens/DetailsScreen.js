import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, description } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  description: { fontSize: 16 },
});

export default DetailsScreen;