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
import { LoginScreen }  from './screens/UserScreens';



export default function Main() {
    return (
        <ApolloProvider client={client}>
            <StoreProvider store={store}>
                <PaperProvider>
                    <LoginScreen />
                </PaperProvider>
            </StoreProvider>
        </ApolloProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
