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

// Redux
import { AnyAction, Dispatch } from 'redux';

// Crowstream
import Post from '../../src/components/post';
import { retrieve_all_posts } from '../../src/redux/reducers/support';
import store, { useReduxDispatch } from '../../src/redux/store';
import { RetrieveAllPosts } from '../../src/services/support.services/post.services';

const retrieveAllPost = async() => {
    const dispatch: Dispatch<AnyAction> = useReduxDispatch();
    await dispatch(retrieve_all_posts(await RetrieveAllPosts()));
}

const Forum = (): JSX.Element => {
    const dispatch: Dispatch<AnyAction> = useReduxDispatch();
    //await dispatch(retrieve_all_posts(await RetrieveAllPosts()));
    retrieveAllPost();

    return (
        <View style={styles.view}>
            <ScrollView>
                {
                    store.getState().forum.posts.map((item: any) => (
                        <Post id_post={item.id} title={item.title} user={item.user} description={item.description} />
                    ))
                }
                
            </ScrollView>
            <FAB
                style={styles.fab}
                icon="plus"
                small
                label="Crear Publicación"
                //onPress={() => console.log('Pressed')}
                onPress={async() => {
                    await dispatch(retrieve_all_posts(await RetrieveAllPosts()))
                    console.log(store.getState().forum.posts);
                }}
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
