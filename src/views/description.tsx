import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import VideoPlayer from 'react-native-video-player'

const Description = () => {
    const prueba = require('../assets/Parte1.mp4');
    return (
        <SafeAreaView>
            <VideoPlayer 
                video={prueba}
                videoWidth={1600}
                videoHeight={900}
                disableFullscreen={false}
                disableSeek={false}
             />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        width: '100%',
        height: '100%'
  },
});

export default Description;