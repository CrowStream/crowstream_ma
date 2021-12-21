/**
 * Common Services
 */

// Apollo
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject
} from "@apollo/client";


import { API_URL } from "@env";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache()
});

export default client;
