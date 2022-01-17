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
    uri: 'http://34.134.110.218:5533/graphql/',
    cache: new InMemoryCache()
});

export default client;
