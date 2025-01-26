import { Linking, StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfilScreen() {
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/malek-dinari-99b431263/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../../assets/images/leMEcin2024.jpg')}
        style={styles.photo}
      />
      <Text style={styles.name}>Malek Dinari</Text>
      
      <View style={styles.infoSection}>
        <MaterialIcons name="email" size={20} color="#2f95dc" />
        <Text style={styles.infoText}>malek.dinari@ensi-uma.tn</Text>
      </View>

      <View style={styles.infoSection}>
        <MaterialIcons name="location-on" size={20} color="#2f95dc" />
        <View>
          <Text style={styles.infoText}>Adresse principale: AFH 2 Nabeul</Text>
          <Text style={styles.infoText}>Adresse secondaire: Rue l'égalité, Manouba</Text>
        </View>
      </View>

      <Button 
        mode="contained" 
        icon="linkedin" 
        style={styles.linkedinButton}
        onPress={openLinkedIn}>
        Profil LinkedIn
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#2f95dc'
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10
  },
  infoText: {
    fontSize: 16,
    color: '#333'
  },
  linkedinButton: {
    marginTop: 20,
    backgroundColor: '#0077b5',
    borderRadius: 8
  }
});