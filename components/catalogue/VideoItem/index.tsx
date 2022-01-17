import React, { useEffect, useState} from 'react'
import { Pressable, Image } from 'react-native'

import { Video } from '../../../src/redux/types';
import styles from './styles';

const VideoItem = ({ video }: {video: Video}) => {
    return (
        <Pressable onPress={()=> console.log(video.id)}>
            <Image style={styles.image} source={{ uri: video.thumbnail_url }} />
        </Pressable>
    )
}

export default VideoItem