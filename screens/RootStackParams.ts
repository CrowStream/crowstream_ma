import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Video, UserVideoMetadata } from '../src/redux/types';

export type RootStackParamList = {
    Login: undefined;
    Description: { episode: Video };
    Home: undefined
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type PropsDescription = NativeStackScreenProps<RootStackParamList, 'Description'>;
export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;
