/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { ApolloProvider as ApolloProvider } from "@apollo/client";
import { name as appName } from './app.json';
import App from './App';
import store from './src/redux/store';
import client from './src/services/common.services';
import Login from './src/views/login';
import Forum from './src/views/forum.section';
import Support from './src/views/support';
import CreatePost from './src/views/create_post';
import Post from './src/views/post';



export default function Main() {
    return (
        <ApolloProvider client={client}>
            <StoreProvider store={store}>
                <PaperProvider>
                    {/* <App /> */}
                    {/* <Login /> */}
                    <Support/ >
                    {/* <CreatePost/> */}
                    {/* <Post/> */}
                </PaperProvider>
            </StoreProvider>
        </ApolloProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
