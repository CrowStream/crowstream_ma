/**
 * Forum Section
 */

// React
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { FAB } from 'react-native-paper';

// Crowstream
import Post from '../components/post';


const Forum = (): JSX.Element => {
    return (
        <View style={styles.view}>
            <ScrollView>
                <Post id_post='' title='Configurar' user='Ricardo' description='' />
                <Post id_post='' title='Configurar' user='Ricardo' description='' />
                <Post id_post='' title='Configurar' user='Ricardo' description='' />
                <Post id_post='' title='Configurar' user='Ricardo' description='' />
                <Post id_post='' title='Configurar' user='Ricardo' description='' />
                <Post id_post='' title='Configurar' user='Ricardo' description='' />
                <Post id_post='' title='Configurar' user='Ricardo' description='' />

            </ScrollView>
            <FAB
                style={styles.fab}
                icon="plus"
                small
                label="Crear Publicación"
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
};

Forum.title = 'Foro de discución';

export default Forum;

const styles = StyleSheet.create({
    view: {
        margin: 10,
        height: '100%'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 16,
        bottom: 16,
        backgroundColor: "#9D9FA2"
    }
});
