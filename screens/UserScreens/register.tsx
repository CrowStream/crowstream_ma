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
     signUp,
 } from '../../src/services';
import { PropsRegister } from '../RootStackParams';
 
 
 import styles from './styles';
 
 export function RegisterScreen({ route, navigation }: PropsRegister) {
     const value = useReduxSelector(state => state);
     const dispatch = useReduxDispatch();
 
     const [email, setEmail] = React.useState('');
     const [password, setPassword] = React.useState('');
     const [passwordConf, setPasswordConf] = React.useState('');
 
     return (
        <SafeAreaView>
        <View style={[styles.container, styles.register]}>
            <Title
                style={[styles.register_title, styles.t1]}
            > Registro </Title>
            <Text
                style={[styles.register_email, styles.p1]}
            > Escribe tu correo electrónico: </Text>
            <TextInput
                label="Correo"
                value={email}
                onChangeText={email => setEmail(email)}
                style={styles.register_email_input}
            ></TextInput>

            <Text
                style={[styles.register_password, styles.p1]}
            > Escribe tu contraseña: </Text>
            <TextInput
                secureTextEntry={true}
                label="Contraseña"
                value={password}
                onChangeText={password => setPassword(password)}
                style={styles.register_password_input}
            ></TextInput>

            <Text
                style={[styles.register_password_conf, styles.p1]}
            > Confirma tu contraseña: </Text>
            <TextInput
                secureTextEntry={true}
                label="Coonfirmación de contraseña"
                value={passwordConf}
                onChangeText={passwordConf => setPasswordConf(passwordConf)}
                style={styles.register_password_conf_input}
            ></TextInput>

            <Button
                disabled={ email.length < 8 || password.length < 8 || password !== passwordConf }
                onPress={
                    () => {
                        signUp(email, password)
                            .then((response) => {
                                if (typeof response != 'string') {
                                    navigation.navigate('Login');
                                }
                            });
                    }
                }
            > Regístrate </Button>
        </View>
    </SafeAreaView>
     );
 };