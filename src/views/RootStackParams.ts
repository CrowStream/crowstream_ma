import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined;
    Description: { episode: {
        id: number,
        video_name: string,
        release_year: number,
        description: string,
        producer: string,
        director: string,
        genre: string,
        thumbnail_url: string,
        video_url: string
    }};
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type PropsDescription = NativeStackScreenProps<RootStackParamList, 'Description'>;
