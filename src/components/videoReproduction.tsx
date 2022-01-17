import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import VideoPlayer from 'react-native-video-player'
import { UpdateClickCountMetadata } from '../services';

interface VideoPlayerProps {
    // episode: {
    //     id: string,
    //     title: string,
    //     poster: string,
    //     duration: string,
    //     plot: string,
    //     video: string,
    // }
    episode: {
        id: number,
        poster: string,
        video: string,
    }
}

const VideoReproduction = (props: VideoPlayerProps) => {
    const { episode } = props;

    async function updateClickCount(){
        const res = await UpdateClickCountMetadata("c1539cc6-3cc5-4087-ab40-b73b8f579236",episode.id);
    }

    return (
        <SafeAreaView>
            <VideoPlayer 
                video={{uri: episode.video}}
                thumbnail={{uri: episode.poster}}
                style={styles.backgroundVideo}
                resizeMode='contain'
                onStart={updateClickCount}
             />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        width: '100%',
        aspectRatio: 16/9
  },
});

export default VideoReproduction;