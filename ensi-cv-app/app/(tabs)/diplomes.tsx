import { useRouter } from "expo-router";
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface Diploma {
  id: string;
  titre: string;
  annee: string;
  institution: string;
}

const diplomes: Diploma[] = [
  {
    id: '1',
    titre: 'Baccalauréat Scientifique',
    annee: '2018-2019',
    institution: 'Lycée Privé l\'Excellence de Nabeul'
  },
  {
    id: '2',
    titre: 'Cycle Préparatoire',
    annee: '2019-2021',
    institution: 'IPEIN Nabeul'
  },
  {
    id: '3',
    titre: 'Diplôme d\'Ingénieur en Informatique',
    annee: '2021-2024',
    institution: 'ENSI, Université de la Manouba'
  }
];

export default function DiplomesScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: Diploma }) => (
    <TouchableOpacity
      style={styles.item}
      //onPress={() => router.push(`./diplome-details`)}
    >
      <Text style={styles.itemTitle}>{item.titre}</Text>
      <Text style={styles.itemSubtitle}>{item.institution}</Text>
      <Text style={styles.itemYear}>{item.annee}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={diplomes}
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
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  itemYear: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
});