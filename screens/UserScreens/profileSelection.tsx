/**
 * Support View
 */

import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import {
    Button,
    Text,
    TextInput,
    Title,
} from 'react-native-paper';
import store, { useReduxDispatch, useReduxSelector } from '../../src/redux/store';
import { useSelector } from "react-redux";
import { ProfileSelector, NewProfileSelector } from '../../components/user';

import {
    RootState,
} from '../../src/redux';


import styles from './styles';
import { PropsProfileSelection } from '../RootStackParams';

export function ProfileSelectionScreen({ route, navigation }: PropsProfileSelection) {
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();

    const profileAction = () => {
        navigation.navigate('Home');
    };

    // getProfiles(dispatch);

    return (
        <SafeAreaView>
            <View
                style={[styles.container, styles.profile_selection]}
            >
                <Title
                    style={[styles.profile_selection_title, styles.t1]}
                > Perfiles </Title>
                <Text
                    style={[styles.profile_selection_description, styles.p1]}
                > ¿Quien está viendo hoy? </Text>
                <FlatList
                    data={useSelector((state: RootState) => state.profiles.profiles)}
                    renderItem={({ item }) => <ProfileSelector profile={item} action={profileAction} />}
                > </FlatList>
                <NewProfileSelector navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};