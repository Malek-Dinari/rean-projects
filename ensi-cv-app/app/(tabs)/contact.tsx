import React, { useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Alert, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import * as MailComposer from 'expo-mail-composer';

export default function ContactScreen() {
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
        icon="linkedin"
        style={styles.linkedinButton}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/malek-dinari-99b431263/')}>
        Contactez-moi via LinkedIn
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
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top'
  },
  sendButton: {
    marginTop: 10,
    backgroundColor: '#2f95dc',
    borderRadius: 8,
    padding: 5
  },
  linkedinButton: {
    marginTop: 20,
    borderColor: '#0077b5',
    borderRadius: 8
  }
});