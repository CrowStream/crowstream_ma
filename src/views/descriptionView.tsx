import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import VideoReproduction from '../components/videoReproduction';
import { CreateClickCountMetadata,GetClickCountMetadataById } from '../services';
import { PropsDescription } from './RootStackParams';
import store, {useReduxDispatch, useReduxSelector} from '../redux/store';

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
                    <Pressable style={{alignItems: 'center', marginHorizontal: 20}}>
                       <Text style={{color: 'black'}}>Mi lista</Text> 
                    </Pressable>

                    <Pressable onPress={async () => {
                            //const res: String = await CreateClickCountMetadata("942854e5-6783-4853-955b-bdd04d15280e", episode.id);
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
