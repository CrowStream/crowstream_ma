import React, { useEffect, useState } from 'react';
import { ProfileSelector } from "../";
import { Profile } from '../../../../src/redux/types';

interface NewProfileSelector {
    navigation: any,
};

export function NewProfileSelector(props: NewProfileSelector) {
    const { navigation } = props;

    const profile: Profile = {
        id: '',
        name: '+  Crear un nuevo perfil',
    };
    
    const action = () => {
        navigation.navigate('ProfileCreation');
    };

    return (
        <ProfileSelector profile={profile} action={action} />
    );
}