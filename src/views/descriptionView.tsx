import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Pressable } from 'react-native'

const descriptionView = () => {
    const poster = require('../assets/venom.jpg');
 
    return (
        <View>
            <Image style={styles.image} source={poster}/>
            <View style={{padding: 12}}>
                <Text style={styles.title}>Venom</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>2019</Text>
                </View>

                <Pressable onPress={() => {console.warn('Plage')}} style={styles.playButton}>
                    <Text style={styles.playButtonText}>
                        Play
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   image: {
       width: '100%',
       height: 300,
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
    borderRadius: 5
   },
   playButtonText:{
    color: 'white'
   }
});

export default descriptionView
