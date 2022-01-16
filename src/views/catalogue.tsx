/**
 * App View
 */

// React
import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';

// React Native Paper
import { Button, TextInput } from 'react-native-paper';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { generate_home } from '../redux/reducers';
import store, { useReduxDispatch, useReduxSelector } from '../redux/store';
import { generateHome } from '../services';
import { useSelector } from "react-redux";
import { RootState } from "../redux";

const Section: React.FC<{
    title: string;
}> = ({ children, title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};



const Catalogue = () => {
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();

    
    return (
        <SafeAreaView>
            
                <Button 
                    icon="check" 
                    mode="contained" 
                    accessibilityLabel='Genera la vistia inicial de videos para el usuario'
                    onPress={async() => {
                        console.log("ANTES:" + JSON.stringify(store.getState()))
                        await dispatch(generate_home(await generateHome()));
                        console.log("DESPUES:" + JSON.stringify(store.getState()))
                    }}>
                </Button>        
                <FlatList
                    data = {useSelector((state: RootState) => state.catalogue.videos.length > 0 ? state.catalogue.videos : [])}
                    renderItem={({item}) => (
                        <View>
                            <Text>
                                {item.description}
                            </Text>
                            <FlatList
                                data= {item.video_list}
                                horizontal = {true}
                                renderItem={({item}) => (
                                    <View>
                                        <Image
                                            style={styles.poster}
                                            source={{uri: item.thumbnail_url}}
                                        ></Image>                                        
                                        <Text>
                                            {item.video_name}
                                        </Text>
                                    </View>
                                    
                                )}
                                
                            >
                            </FlatList>
                        </View>
                    )}
                >
                </FlatList>
            
        </SafeAreaView>
    );
};

const width_poster = 200
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    poster:{
        width: width_poster * 5/7,
        height: width_poster,
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Catalogue;
