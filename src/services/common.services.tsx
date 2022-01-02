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
    uri: 'http://35.202.187.95:5533/graphql/',
    cache: new InMemoryCache()
});

export default client;
