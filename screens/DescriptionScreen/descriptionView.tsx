import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import VideoReproduction from '../../components/reproduction/videoReproduction';
import { CreateClickCountMetadata,GetClickCountMetadataById, LikeVideo } from '../../src/services';
import { PropsDescription } from '../RootStackParams';

const descriptionView = ({ route, navigation }: PropsDescription) => {
    const { episode } = route.params;
    const videoInfo = {
        id: episode.id,
        poster: episode.thumbnail_url,
        video: episode.video_url
    }

    //Llamamos metodo de que le dieron click a la descripcion del video
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            const exists = await GetClickCountMetadataById("c1539cc6-3cc5-4087-ab40-b73b8f579236", episode.id);
            if(!exists){
                await CreateClickCountMetadata(episode.id);
            }
        });

        return unsubscribe;
    }, [navigation]);
    
    return (
        <View>
            <VideoReproduction episode={videoInfo}></VideoReproduction>
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
                       <Text style={{color: 'black'}}>Me gusta</Text> 
                    </Pressable>

                    <Pressable onPress={async () => {
                            await LikeVideo("d1d71888-bbc5-4d34-933c-3fb244663dca", episode.id, 0);
                        }}style={{alignItems: 'center', marginHorizontal: 20}}>
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
