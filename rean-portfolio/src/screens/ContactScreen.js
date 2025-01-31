import React, { useState } from 'react';
import { ScrollView, TextInput, Alert, Linking, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as MailComposer from 'expo-mail-composer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ContactScreen = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    if (!email || !message) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }
    try {
      await MailComposer.composeAsync({
        recipients: ['malek.dinari@ensi-uma.tn'],
        subject: 'Contact depuis l\'application',
        body: `Message de: ${email}\n\n${message}`
      });
    } catch (error) {
      Alert.alert('Erreur', 'Impossible d\'envoyer l\'email');
    }
  };

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/malek-dinari-99b431263/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Votre email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Message personnalisé"
        value={message}
        onChangeText={setMessage}
        style={[styles.input, styles.messageInput]}
        multiline
        numberOfLines={4}
      />
      <Button 
        mode="contained" 
        style={styles.sendButton}
        onPress={handleSendEmail}>
        Envoyer Message
      </Button>
      <Button
        mode="outlined"
        icon={() => <Entypo name="linkedin" size={20} color="#0077b5" />}
        style={styles.linkedinButton}
        onPress={openLinkedIn}>
        Contactez-moi via LinkedIn
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  sendButton: {
    marginTop: 10,
    backgroundColor: '#2f95dc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  linkedinButton: {
    marginTop: 20,
    borderColor: '#0077b5',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});

export default ContactScreen;