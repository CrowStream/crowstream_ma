/**
 * Post Services
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

const retrieve_all_posts: DocumentNode = gql`
    query {
        retrieveAllPost {
            _id
            user_id
            user_nick
            title
            description
            comments {
                _id
                user_nick
                user_id
                description
                files
            }
            files
        }
    }
`;

const retrieve_post: DocumentNode = gql`
    query($id: ID!) {
        retrievePostById(id_post: $id) {
            _id
            user_id
            description
            comments {
                _id
                user_id
                description
                files
            }
            files
        }
    }
`;

const create_post: DocumentNode = gql`
    mutation($description: String!, $files: [String!]){
        createPost(post: {
            description: $description
            files: $files
        })
        {
            post{
                _id
                user_id
                description
                comments {
                    _id
                    user_id
                    description
                    files
                }
                files  
            }
        }
    }
`;

const create_comment: DocumentNode = gql`
    mutation($id_post: ID!, $description: String!, $image: [String!]){
        createComment(id_post: $id_post, comment:{
            description: $description
            files: $image
        }){
        comment{
            _id
            user_id
            description
            files
            }
        }
    }
`

/**
 * Apollo Client Queries
 */

export async function RetrieveAllPosts() {
    try{
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_all_posts, {});
        return result.data.retrieveAllPost;
    }catch(error){
        console.error(error);
    }
}

export async function RetrievePostByID(id: string) {
    try{
        const result: ApolloQueryResult<any> = await token_protected_query(retrieve_post, {id: id});
    }catch(error){
        console.error(error);
    }
}


/**
 * Apollo Client Mutations
 */

export async function CreatePost(description: string, files: [string]) {
    try{
        const result: FetchResult<any, Record<string, any>, Record<string, any>> = await token_protected_mutation(create_post, {description: description, files: files});
    }catch(error){
        console.error(error);
    }
}

export async function CreateComment(id_post: string, description: string, files: [string]) {
    try{
        const result: FetchResult<any, Record<string, any>, Record<string, any>> = await token_protected_mutation(create_comment, {id_post: id_post, description: description, files: files});
    }catch(error){
        console.error(error);
    }
}