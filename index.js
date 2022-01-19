/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { ApolloProvider as ApolloProvider } from "@apollo/client";
import { name as appName } from './app.json';
import store from './src/redux/store';
import client from './src/services/common.services';
import Login from './screens/LoginScreen/login';
import HomeScreen from './screens/HomeScreen'
import Support from './screens/SupportScreen';



export default function Main() {
    return (
        <ApolloProvider client={client}>
            <StoreProvider store={store}>
                <PaperProvider>
                    {/* <App /> */}
                    {/* <Login /> */}
                    {/* <Catalogue/> */}
                    <HomeScreen/>
                    {/* <CreatePost/> */}
                    {/* <Post/> */}
                </PaperProvider>
            </StoreProvider>
        </ApolloProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
