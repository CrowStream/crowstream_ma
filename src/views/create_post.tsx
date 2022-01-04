/**
 * Create Post View
 */

// React
import React from 'react';
import { StyleSheet, View } from 'react-native';

// React Native Paper
import { FAB, TextInput, Button, DataTable, Switch, Text, Paragraph } from 'react-native-paper';


const CreatePost = (): JSX.Element => {
    const [title, setTitle] = React.useState('');
    const [autor, setAuthor] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [anonymous, setAnonymous] = React.useState(false);
    return (
        <View style={styles.view}>
            <TextInput
                activeUnderlineColor='#9D9FA2'
                style={styles.input}
                label="Titulo del post"
                value={title}
                onChangeText={title => setTitle(title)}
            />
            <TextInput
                disabled={anonymous}
                activeUnderlineColor='#9D9FA2'
                style={styles.input}
                label="Nombre del autor"
                value={autor}
                onChangeText={title => setAuthor(title)}
            />
            <View style={styles.row}>
                <Paragraph>Autor Anónimo</Paragraph>
                <Switch
                    value={anonymous}
                    color='white'
                    onValueChange={flag => {
                        setAnonymous(flag);
                        setAuthor('');
                    }}
                />
            </View>

            <TextInput
                activeUnderlineColor='#9D9FA2'
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
        margin: 5,
        color: 'white'
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

});