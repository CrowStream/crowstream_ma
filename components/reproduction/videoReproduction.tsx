import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
//import VideoPlayer from 'react-native-video-player'
import { UpdateClickCountMetadata } from '../../src/services';
import { Video } from 'expo-av';

interface VideoPlayerProps {
    episode: {
        id: number,
        poster: string,
        video: string,
    },
    metadata: {
        user_id: string,
        video_id: number,
        video_progress: number,
        video_progress_time: string
    },
    func: Function
}

let updatedClick = false;

const VideoReproduction = (props: VideoPlayerProps) => {
    const { episode, metadata } = props;
    console.log("la meta llego ", metadata)
    const video = React.useRef(null);

    async function updateClickCount(){
        await UpdateClickCountMetadata("0ce528d5-257c-4974-bbfe-12dfdd2965f3",episode.id);
    }


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

                if(updatedClick == false){
                    updateClickCount()
                }

                props.func(playbackInstanceInfo.position);
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