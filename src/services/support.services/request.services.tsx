/**
 * Request Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    FetchResult,
    gql
} from "@apollo/client";
import { User } from "../../redux/types";

// Crowstream
import client, { token_protected_mutation, token_protected_query } from "../common.services";

/**
 * GraphQL Queries
 */

const retrieve_all_support_requests: DocumentNode = gql`
    query {
        retrieveAllSupportRequest{
            _id
            user_id
            request_type
            description
            response{
                _id
                responder
                description
                files
            }
            files
        }
    }
`;

const retrieve_support_request: DocumentNode = gql`
    query($id: ID!){
        retrieveSupportRequestById(id_support_request: $id){
            _id
            user_id
            request_type
            description
            response{
                _id
                responder
                description
                files
            }
            files
        }
    }
`;

const create_support_request: DocumentNode = gql`
    mutation($request_type: String!, $description: String! $image: [String!]) {
        createSupportRequest(support_request: {
            request_type: $request_type,
            description: $description,
            files: $image
        }){
        supportRequest{
            _id
            user_id
            request_type
            description
            response{
            _id
            responder
            description
            files
            }
            files
        }
        }
    }
`;

/**
 * Apollo Client Queries
 */

 export async function RetrieveAllSupportRequests() {
    try{
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_all_support_requests, {});
    }catch(error){
        console.error(error);
    }
}

export async function RetrieveSupportRequestByID(id: string) {
    try{
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_support_request, {id: id});
    }catch(error){
        console.error(error);
    }
}


/**
 * Apollo Client Mutations
 */

export async function CreateSupportRequest(description: string, files: [string]) {
    try{
        const result: FetchResult<any, Record<string, any>, Record<string, any>> = await token_protected_mutation(create_support_request, {description: description, files: files});
    }catch(error){
        console.error(error);
    }
}