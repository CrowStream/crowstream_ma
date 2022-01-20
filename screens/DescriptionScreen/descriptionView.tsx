import React, { Suspense } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { IconButton } from 'react-native-paper';
import VideoReproduction from '../../components/reproduction/videoReproduction';
import { CreateClickCountMetadata,GetClickCountMetadataById, LikeVideo, GetUserVideoMetadataById, CreateUserVideoMetadata } from '../../src/services';
import { PropsDescription } from '../RootStackParams';
import { UserVideoMetadata } from '../../src/redux/types'

const descriptionView = ({ route, navigation }: PropsDescription) => {
    const { episode } = route.params;
    let progressVideo = 0;

    const videoInfo = {
        id: episode.id,
        poster: episode.thumbnail_url,
        video: episode.video_url
    }

    let userVideoMetadata = {
        user_id: '',
        video_id: -1,
        video_progress: -1,
        video_progress_time: '',
        load : false
    };

    const pull_data = (progress: number) => {
        progressVideo = progress // LOGS DATA FROM CHILD 
    }
    
    //Llamamos metodo de que le dieron click a la descripcion del video
    React.useLayoutEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            let res = await GetUserVideoMetadataById("0ce528d5-257c-4974-bbfe-12dfdd2965f3", episode.id)
            userVideoMetadata.user_id = res.user_id
            userVideoMetadata.video_id = res.video_id
            userVideoMetadata.video_progress = res.video_progress
            userVideoMetadata.video_progress_time = res.video_progress_time
            userVideoMetadata.load = true

            const exists = await GetClickCountMetadataById("0ce528d5-257c-4974-bbfe-12dfdd2965f3", episode.id);
            if(!exists){
                await CreateClickCountMetadata(episode.id);
            }
        });

        return unsubscribe;
    }, [navigation]);

    //Llamamos metodo antes de cerrar la vista
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', async () => {
            CreateUserVideoMetadata(episode.id, progressVideo)
        });

        return unsubscribe;
    }, [navigation]);
    
    return (
        <View>
            <VideoReproduction func={pull_data} episode={videoInfo} metadata={userVideoMetadata}/>
            <View style={{padding: 12}}>
                <Text style={styles.title}>{episode.video_name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>{episode.release_year}</Text>
                </View>

                <Pressable onPress={() => {console.warn('Plage')}} style={styles.playButton}>
                    <Text style={styles.playButtonText}>
                        Play
                    </Text>
                </Pressable>

                <Text style={{marginVertical: 10, color: 'black', fontWeight: '500'}}>{episode.description}</Text>
                <Text style={styles.year}>Productor: {episode.producer}</Text>
                <Text style={styles.year}>Director: {episode.director}</Text>
                <Text style={styles.year}>Generos: {episode.genre}</Text>

                {/* Row with icon button */}
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Pressable onPress={async () => {
                            await LikeVideo("d1d71888-bbc5-4d34-933c-3fb244663dca", episode.id, 1);
                        }}style={{alignItems: 'center', marginHorizontal: 20}}>
                        <IconButton icon="thumb-up"/>
                       <Text style={{color: 'black'}}>Me gusta</Text> 
                    </Pressable>

                    <Pressable onPress={async () => {
                            await LikeVideo("d1d71888-bbc5-4d34-933c-3fb244663dca", episode.id, 0);
                        }}style={{alignItems: 'center', marginHorizontal: 20}}>
                        <IconButton icon="thumb-down"/>
                       <Text style={{color: 'black'}}>No me gusta</Text> 
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
