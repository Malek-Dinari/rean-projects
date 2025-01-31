import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const projetsData = [
  {
    id: '1',
    title: 'Bone Marrow Smear Segmentation',
    description: `
      Machine Learning/DL: Bone Marrow Smear Segmentation - ENSI GitHub Link
      4-month design and development project:
      • Built an AI pipeline to classify and segment bone marrow cells, providing biologists with a diagnostic tool to aid in disease monitoring.
      • Fine-tuned MobileNet for initial image segmentation, followed by inference with YOLOv8 to detect multiple cell types within smears, enabling comprehensive cell identification in a single workflow.
      • Deployed an interactive frontend using Gradio in a Colab Notebook for accessibility and ease of use in research or clinical settings.
      • This tool is tailored for biologists to facilitate bone marrow analysis and improve diagnostic accuracy through automated image analysis.
    `
  },
  {
    id: '2',
    title: 'WeeFizz Mobile Size Recommendation App',
    description: `
      Mobile Development: WeeFizz Mobile Size Recommendation App - Welyne GitHub Link
      3-month summer internship project:
      • Developed the mobile app for WeeFizz, a size recommendation tool, as part of a project with Welyne, an IT services startup. The app was built using React Native (community CLI, bare workflow) and integrates seamlessly with the existing WebApp.
      • Implemented core functionalities, including QR code scanning (or manual URL entry), user parameter collection (e.g., height, body type), and photo capture for personalized size suggestions.
      • Designed to support Prestashop users, the app enhances the shopping experience by offering precise clothing size recommendations based on individual body measurements.
      • Gained mobile development experience in the context of practical e-commerce solutions while developing a deeper interest in roles focused on ML and DevOps.
    `
  },
  {
    id: '3',
    title: 'Mini-GPT Model',
    description: `
      ML/NLP & AI: Mini-GPT Model - Self-Directed GitHub Link
      Mini-project (in progress):
      • Implemented a foundational GPT-like model from scratch using Shakespeare’s complete works as training data, with a focus on understanding core concepts in generative pre-trained transformers and attention mechanisms.
      • Designed and trained an initial Bigram Language Model as a baseline for autoregressive text generation, while exploring scalable architectures that enhance linguistic coherence and depth.
      • Expanding the model to incorporate trigram and n-gram components, with a future goal of integrating a multilayer perceptron (MLP) for increased capacity and scalability in handling more complex language structures.
      • This project aims to reinforce knowledge in natural language processing (NLP), particularly in attention-based architectures, while providing a stepping stone towards developing larger models or advanced text generation pipelines.
    `
  },
  {
    id: '4',
    title: '4D Facial Expression Recognition',
    description: `
      Computer Vision: 4D Facial Expression Recognition - ENSI (Ongoing) GitHub Link
      Part of a university research project supervised by Dr. Faouzi GHORBEL:
      • Developing algorithms for facial expression recognition using 3D representations (curved 2D surfaces, point clouds, or meshes).
      • Implementing geodesic potential descriptors for level curve extraction and geodesic distance computation (Dijkstra’s algorithm).
      • Exploring advanced Computer Vision techniques such as SIFT detectors and Iterative Closest Point (ICP) for mesh matching.
      • Aimed at creating robust 3D or 4D models for improved biometric and expression classification.
      • Tools & Skills: Python, Matplotlib, Plotly, PCA, Linear Algebra, 3D Visualization.
    `
  },
  {
    id: '5',
    title: 'Salary Calculator Interface',
    description: `
      ML: Salary Calculator Interface Github Link
      • Trained and deployed an AI model via Streamlit to calculate salaries based on the 2020 Stack Overflow Developer Survey.
    `
  },
  {
    id: '6',
    title: 'Selected Computer Vision & ML Notebooks',
    description: `
      Ongoing personal project:
      • Created a structured set of Jupyter notebooks covering fundamental techniques and algorithms in computer vision and machine learning, organized into four primary modules:
        – Pattern Recognition: Implementation of essential techniques such as Hu’s 7 moments, Ghorbel complex moments invariance, and Jan Flusser’s rotation invariants.
        – Mathematical Morphology: Exploration of morphological operations, including geodesic dilation reconstruction, erosion-dilation, and advanced Laplacian and top-hat transformations.
        – Image Processing and Restoration: Covering key concepts like DFT/IDFT, Fast Fourier Transform (FFT), Gaussian and motion blurring, kernel-based filtering, and Wiener filters, with additional introductory work in deep learning and optimization.
        – 3D Mesh Processing & Face Expression Analysis: Focused on facial expression recognition and 3D mesh representation, including level curve analysis using geodesic distances and methods for representing curves on facial meshes.
      • Aims to provide a comprehensive reference for foundational and advanced topics in computer vision and image processing, with ongoing updates and new notebooks planned or to be added.
    `
  },
  {
    id: '7',
    title: 'Provider Management System',
    description: `
      Full-Stack Application: Provider Management System GitHub Link
      • Developed a complete CRUD application using Spring Boot for the backend and Angular for the frontend, hosted on PHPMyAdmin for database management.
      • Implemented user-friendly features, such as a provider list display and a form for adding new providers, showcasing strong full-stack expertise.
      • Gained experience in Spring Suite 4, REST APIs, and Angular component-based design for dynamic web single-page applications.
    `
  },
  {
    id: '8',
    title: 'Semantic and syntactic analyzer',
    description: `
      NLP/C Programming: Semantic and syntactic analyzer Github Link
      • Created an app that performs semantic and syntactic analysis for sentences and expressions.
    `
  }
];

const ProjetsScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { title: item.title, description: item.description })}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={projetsData} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 20, marginVertical: 8, backgroundColor: '#8fb505', borderRadius: 5 },
  title: { fontSize: 18 },
});

export default ProjetsScreen;