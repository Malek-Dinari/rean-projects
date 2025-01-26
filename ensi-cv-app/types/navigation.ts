import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Profil: undefined;
  Projets: undefined;
  Diplomes: undefined;
  Contact: undefined;
  ProjetDetails: { id: string };
  DiplomeDetails: { id: string };
};

export type DiplomesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Diplomes'
>;