import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Profile } from '../../../../src/redux/types';

import styles from './styles';

interface ProfileSelectorProps {
    profile: Profile,
    action: Function,
}

export function ProfileSelector(props: ProfileSelectorProps) {
    const { profile, action } = props;
    return (
        <Pressable onPress={() => action()}>
            <Card style={styles.card}>
                <Text style={styles.profile_name}>
                    {profile.name}
                </Text>
            </Card>
        </Pressable>
    );
}