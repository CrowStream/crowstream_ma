import React, { useEffect, useState } from 'react';
import { ProfileSelector } from "../";
import { Profile } from '../../../../src/redux/types';

export function NewProfileSelector() {
    const profile: Profile = {
        id: '',
        name: '+  Crear un nuevo perfil',
    };
    
    const action = () => {
        console.log('Crear nuevo perfil');
        return;
    };

    return (
        <ProfileSelector profile={profile} action={action} />
    );
}