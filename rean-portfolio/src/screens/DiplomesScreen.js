import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const diplomesData = [
  {
    id: '1',
    title: 'Baccalaureate Mathematics',
    description: "Graduated with 14.08/20 in 2019."
  },
  {
    id: '2',
    title: 'Associate Degree (Engineering Preparatory Studies)',
    description: "Mathematics Physics (MP): ranked 193/1779 at IPEIN from 2019-2021."
  },
  {
    id: '3',
    title: 'Bachelor + Master Degree',
    description: `
      Bachelor’s Degree in Computer Science - ENSI SEPTEMBER 2021-PRESENT
      Expected Graduation Date: September 2025 Currently third-year engineering student
      Related Coursework: Object-oriented programming, Data Structures, Databases, Statistics, Computer Networks, Distributed Systems, Applied Mathematics, Computational Complexity, Quantization, Image Processing, Artificial Intelligence.
    `
  }
];

const DiplomesScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { title: item.title, description: item.description })}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={diplomesData} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 20, marginVertical: 8, backgroundColor: '#c9d2ff', borderRadius: 5 },
  title: { fontSize: 18 },
});

export default DiplomesScreen;