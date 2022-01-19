/**
 * Post Component
 */

// React
import React from "react";
import { StyleSheet } from "react-native";

// React Native Paper
import { Avatar, Button, Card, Paragraph } from "react-native-paper";


const Post: React.FC<{
    id_post: string,
    title: string,
    user: string,
    description: string
}> = ({ title, user, description}) => {
    return (
        <Card style={styles.card} mode={'outlined'}>
            <Card.Title
                title={title}
                subtitle={user}
                left={(props: any) => <Avatar.Icon style={styles.avatar} {...props} icon="account" />}
            />
            <Card.Content>
                <Paragraph>
                    {description}
                </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button
                    {...styles.button}
                    mode='contained'
                    style={styles.button.style}
                    onPress={() => { console.log("Ver más!") }}
                >
                    Ver más
                </Button>
            </Card.Actions>
        </Card>
    );
};

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
        margin: 4,
    }
});
