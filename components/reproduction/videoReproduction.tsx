import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
//import VideoPlayer from 'react-native-video-player'
import { UpdateClickCountMetadata } from '../../src/services';
import { Video } from 'expo-av';

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
    const video = React.useRef(null);
    /*
    async function updateClickCount(){
        console.warn("holi")
        await UpdateClickCountMetadata("c1539cc6-3cc5-4087-ab40-b73b8f579236",episode.id);
    }
    */
    const [playbackInstanceInfo, setPlaybackInstanceInfo] = React.useState({
        position: 0,
        duration: 0,
        state: 'Buffering'
        });

    const updatePlaybackCallback = (status: any) => {
        if (!status.isLoaded) {
            if (status.error) {
                console.log(`Encountered a fatal error during playback: ${status.error}`);
                // Send Expo team the error on Slack or the forums so we can help you debug!
            }
        } else {
            if (status.isPlaying) {
                // Update your UI for the playing state
                setPlaybackInstanceInfo({
                    ...playbackInstanceInfo,
                    position: status.positionMillis,
                    duration: status.durationMillis || 0,
                    state: status.didJustFinish ? 'Ended' :
                    status.isBuffering ? 'Buffering':
                    status.shouldPlay ? 'Playing' : 'Paused'
                })
               UpdateClickCountMetadata("c1539cc6-3cc5-4087-ab40-b73b8f579236",episode.id);
            } else {
                // Update your UI for the paused state
                console.log("tiempo: ", playbackInstanceInfo.position)
            }

            if (status.isBuffering) {
            // Update your UI for the buffering state
            }

            if (status.didJustFinish && !status.isLooping) {
            // The player has just finished playing and will stop. Maybe you want to play something else?
            }
        }
    }

    return (
        <SafeAreaView>
            {/* <VideoPlayer 
                video={{uri: episode.video}}
                thumbnail={{uri: episode.poster}}
                style={styles.backgroundVideo}
                resizeMode='contain'
                onStart={updateClickCount}
             /> */}
             <Video
                ref={video}
                style={styles.backgroundVideo}
                source={{
                uri: episode.video,
                }}
                posterSource={{
                    uri: episode.poster
                }}
                posterStyle={{
                    resizeMode: 'cover'
                }}
                volume={1.0}
                usePoster={true}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={updatePlaybackCallback}
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