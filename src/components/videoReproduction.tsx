import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import VideoPlayer from 'react-native-video-player'

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
        poster: string,
        video: string,
    }
}

const VideoReproduction = (props: VideoPlayerProps) => {
    const { episode } = props;
    return (
        <SafeAreaView>
            <VideoPlayer 
                video={{uri: episode.video}}
                thumbnail={{uri: episode.poster}}
                style={styles.backgroundVideo}
                resizeMode='contain'
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