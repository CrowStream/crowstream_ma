/**
 * Create Post
 */

// React
import React from 'react';
import { StyleSheet, View } from 'react-native';

// React Native Paper
import { FAB, Paragraph, Card, Avatar } from 'react-native-paper';


const Post = (): JSX.Element => {
    return (
        <View style={styles.view}>
            <Card style={styles.card} mode={'outlined'}>
                <Card.Title
                    title='Titulo del post'
                    subtitle='Autor del post'
                    left={(props: any) => <Avatar.Icon style={styles.avatar} {...props} icon="account" />}
                />
                <Card.Content>
                    <Paragraph>
                        Contenido del post
                    </Paragraph>
                </Card.Content>
            </Card>
            <Card style={styles.card} mode={'outlined'}>
                <Card.Title
                    title='Autor del comentario'
                    left={(props: any) => <Avatar.Icon style={styles.avatar} {...props} icon="account" />}
                />
                <Card.Content>
                    <Paragraph>
                        Contenido del commentario
                    </Paragraph>
                </Card.Content>
            </Card>
            <FAB
                style={styles.fab}
                icon="plus"
                small
                label="Crear Comentario"
                onPress={() => console.log('Pressed')}
            />
        </View>

    );
};

Post.title = 'Crear publicación';

export default Post;

const styles = StyleSheet.create({
    button: {
        color: "#222255",
        compact: true,
        style: {
            margin: 4
        }
    },
    avatar: {
        backgroundColor: '#A7A9AC'
    },
    card: {
        maxHeight: '100%',
        height: 'auto'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 16,
        bottom: 16,
        backgroundColor: "#9D9FA2"
    },
    view: {
        margin: 10,
        height: '100%'
    },
});