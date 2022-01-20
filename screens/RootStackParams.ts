import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Video, UserVideoMetadata } from '../src/redux/types';

export type RootStackParamList = {
    Login: undefined;
    Register: undefined,
    ProfileSelection: undefined,
    ProfileCreation: undefined,
    Description: { episode: Video};
    Home: undefined
};

export type PropsLogin = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type PropsRegister = NativeStackScreenProps<RootStackParamList, 'Register'>;
export type PropsProfileSelection = NativeStackScreenProps<RootStackParamList, 'ProfileSelection'>;
export type PropsProfileCreation = NativeStackScreenProps<RootStackParamList, 'ProfileCreation'>;
export type PropsDescription = NativeStackScreenProps<RootStackParamList, 'Description'>;
export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;
