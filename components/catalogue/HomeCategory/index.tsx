import React, { useEffect, useState } from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import VideoItem from '../VideoItem';

import styles from './styles';
import { VideoSet, Video } from '../../../src/redux/types';

interface HomeCategoryProps {
    category: VideoSet,
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    return (
        <>
            <Text style={styles.title}>{category.description}</Text>
            <FlatList
                data={category.video_list}
                renderItem={({item}) => <VideoItem video={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}

export default HomeCategory;