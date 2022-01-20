import React, { useEffect, useState} from 'react'
import { Pressable, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../screens/RootStackParams';

import { Video } from '../../../src/redux/types';
import styles from './styles';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const VideoItem = ({ video }: {video: Video}) => {
    const navigation = useNavigation<homeScreenProp>();
    return (
        <Pressable onPress={()=> navigation.navigate('Description', {episode: video})}>
            <Image style={styles.image} source={{ uri: video.thumbnail_url }} />
        </Pressable>
    )
}

export default VideoItem