/**
 * Support View
 */

import React from 'react';
import { SafeAreaView, View } from 'react-native';
import {
    Button,
    Text,
    TextInput,
    Title,
} from 'react-native-paper';
import store, { useReduxDispatch, useReduxSelector } from '../../src/redux/store';

import {
    createProfile, getAllProfiles,
} from '../../src/services';

import {
    create_profile, get_all_profiles,
} from '../../src/redux';


import styles from './styles';
import { PropsProfileCreation } from '../RootStackParams';

export function ProfileCreationScreen({ route, navigation }: PropsProfileCreation) {
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();

    const [name, setName] = React.useState('');

    return (
        <SafeAreaView>
            <View style={[styles.container, styles.profile_creation]}>
                <Title
                    style={[styles.profile_creation_title, styles.t1]}
                > Creación de perfil </Title>
                <Text
                    style={[styles.profile_creation_name, styles.p1]}
                > Escribe el nombre del perfil: </Text>
                <TextInput
                    label="Nombre"
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.profile_creation_name_input}
                ></TextInput>

                <Button
                    disabled={name.length < 1}
                    onPress={
                        () => {
                            createProfile(name)
                                .then((response) => {
                                    dispatch(create_profile(response));
                                    getAllProfiles()
                                        .then((response) => {
                                            dispatch(get_all_profiles(response));
                                        })
                                        .catch(console.error);
                                    navigation.navigate('ProfileSelection');
                                }).catch(console.error);
                        }
                    }
                > Crear perfil </Button>
            </View>
        </SafeAreaView>
    );
};