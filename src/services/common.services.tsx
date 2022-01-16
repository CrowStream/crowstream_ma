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
    uri: 'http://34.133.57.155:5533/graphql/',
    cache: new InMemoryCache()
});

export default client;
