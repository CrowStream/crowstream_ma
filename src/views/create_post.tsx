/**
 * Create Post View
 */

// React
import React from 'react';
import { StyleSheet, View } from 'react-native';

// React Native Paper
import { FAB, TextInput, Button, DataTable } from 'react-native-paper';


const CreatePost = (): JSX.Element => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                label="Titulo del post"
                value={title}
                onChangeText={title => setTitle(title)}
            />
            <TextInput
                label="Descripción del post"
                multiline
                style={[styles.textArea, styles.input]}
                value={description}
                onChangeText={description => setDescription(description)}
            />
            <Button
                style={styles.input}
                icon='upload'
                mode='contained'
                compact
                color='#222255'
            >
                Subir archivo
            </Button>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title
                        style={styles.first}
                    >
                        Archivo
                    </DataTable.Title>
                    <DataTable.Title>Borrar</DataTable.Title>
                </DataTable.Header>
            </DataTable>
            <FAB
                style={styles.fab}
                icon="check"
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
};

CreatePost.title = 'Crear publicación';

export default CreatePost;

const styles = StyleSheet.create({
    textArea: {
        height: 250
    },
    input: {
        margin: 5
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
    first: {
        flex: 2
    }

});