import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Pressable } from 'react-native'
import VideoReproduction from '../components/videoReproduction';
import {CreateClickCountMetadata} from '../services';

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

const descriptionView = (props: VideoPlayerProps) => {
    const poster = 'https://storage.googleapis.com/crowstream-data/CatalogueImages/django_unchained_2012.jpeg';
    const prueba = 'https://storage.googleapis.com/crowstream-data/CatalogueVideos/Django%20Unchained%20Official%20Trailer%20%231%20(2012)%20Quentin%20Tarantino%20Movie%20HD.mp4';
    const episode = {
        poster,
        video: prueba
    }
    return (
        <View>
            <VideoReproduction episode={episode}></VideoReproduction>
            <View style={{padding: 12}}>
                <Text style={styles.title}>Django</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>2019</Text>
                </View>

                <Pressable onPress={() => {console.warn('Plage')}} style={styles.playButton}>
                    <Text style={styles.playButtonText}>
                        Play
                    </Text>
                </Pressable>
                <Text style={{marginVertical: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sem lobortis risus semper viverra sit amet ac nisi. Nulla velit quam, cursus et sapien ut, feugiat vulputate quam. Nunc hendrerit dui et ultrices gravida. Morbi augue dui, luctus et nulla elementum, pharetra iaculis odio. Phasellus ornare neque eu fringilla porta.</Text>

                {/* Row with icon button */}
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Pressable style={{alignItems: 'center', marginHorizontal: 20}}>
                       <Text style={{color: 'black'}}>Mi lista</Text> 
                    </Pressable>

                    <Pressable onPress={async () => {
                            const res: String = await CreateClickCountMetadata("942854e5-6783-4853-955b-bdd04d15280e", 3242);
                            console.log("la res", res)
                        }}style={{alignItems: 'center', marginHorizontal: 20}}>
                       <Text style={{color: 'black'}}>Me gusta</Text> 
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   image: {
       width: '100%',
       height: 250,
       resizeMode: 'cover'
   },
   title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
   },
   match:{
    color: '#00aa00',
    fontWeight: 'bold',
    marginRight: 10,
   },
   year:{
    color: '#757575'
   },
   
   //Button
   playButton:{
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    marginVertical: 5
   },
   playButtonText:{
    color: 'white'
   }
});

export default descriptionView
