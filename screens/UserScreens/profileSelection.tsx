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
    getAllProfiles,
} from '../../src/services';

import {
    get_all_profiles,
    RootState,
} from '../../src/redux';


import styles from './styles';
import { Profile } from '../../src/redux/types';

export function ProfileSelectionScreen() {
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();

    const profileAction = () => {

    };

    // getAllProfiles()
    //     .then((response) => {
    //         dispatch(get_all_profiles(response));
    //     })
    //     .catch(console.error);

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
                <NewProfileSelector />
            </View>
        </SafeAreaView>
    );
};