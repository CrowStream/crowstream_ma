/**
 * Common Services
 */

// Apollo
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject
} from "@apollo/client";


const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://35.192.92.41:5000/graphql/',
    cache: new InMemoryCache()
});

export default client;
