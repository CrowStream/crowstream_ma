/**
 * Support View
 */

import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import {
    Button,
    Text,
    TextInput,
    Title,
} from 'react-native-paper';
import store, { useReduxDispatch, useReduxSelector } from '../../src/redux/store';

import {
    getAllProfiles,
    signIn,
} from '../../src/services';

import {
    get_all_profiles,
    sign_in,
} from '../../src/redux';
import { PropsLogin } from '../RootStackParams';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import styles from './styles';

export function LoginScreen({ route, navigation }: PropsLogin) {
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView>
            <View style={[styles.container, styles.login]}>
                <Title
                    style={[styles.login_title, styles.t1]}
                > Crowstream TV </Title>
                <Text
                    style={[styles.login_email, styles.p1]}
                > Escribe tu correo electrónico: </Text>
                <TextInput
                    label="Correo"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    style={styles.login_email_input}
                ></TextInput>

                <Text
                    style={[styles.login_password, styles.p1]}
                > Escribe tu contraseña: </Text>
                <TextInput
                    label="Contraseña"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    style={styles.login_password_input}
                ></TextInput>


                <Pressable onPress={() => { navigation.navigate('Register') }}>
                    <Text style={[styles.p2, styles.login_register]}>
                        ¿No tienes una cuenta?  Registrate
                    </Text>
                </Pressable>

                <Button
                    disabled={ email.length < 8 || password.length < 8 }
                    onPress={
                        () => {
                            signIn(email, password)
                                .then((response) => {
                                    if (typeof response != 'string') {
                                        dispatch(sign_in(response));
                                        getAllProfiles()
                                            .then((response) => {
                                                dispatch(get_all_profiles(response));
                                            })
                                            .catch(console.error);
                                        navigation.navigate('ProfileSelection');
                                    }
                                });
                        }
                    }
                > Inicia sesión </Button>
            </View>
        </SafeAreaView>
    );
};