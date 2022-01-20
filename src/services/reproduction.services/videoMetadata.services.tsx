/**
 * Click Metadata Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";

// Crowstream
import client from "../common.services";
import { UserVideoMetadata } from "../../redux/types";
import store from "../../redux/store";

const get_user_video_metadata: DocumentNode = gql`
    query getUserVideoMetadataById($user_id: String!, $video_id: Int!)   {
        getUserVideoMetadataById(user_id: $user_id, video_id: $video_id) {
            user_id
            video_id
            video_progress
            video_progress_time
        }
    }
`;

const create_user_video_metadata: DocumentNode = gql`
    mutation($video_id: Int!, $video_progress: Float!) {
        createUserVideoMetadata(userVideoMetadata: {
            video_id: $video_id
            video_progress: $video_progress
            video_progress_time: ""
        }){
            userVideoMetadata{
                ID
            }
        }
    }
`;

export async function GetUserVideoMetadataById(user_id: string, video_id: number){
    try{
        const result: ApolloQueryResult<any> = await client.query({
            query: get_user_video_metadata,
            context: {
                headers: {
                    authorization: `Bearer ${store.getState().user.token}`
                }
            },
            variables: {
                user_id: user_id,
                video_id: video_id
            }
        });

        let userVideoMetadata: UserVideoMetadata = {
            user_id: result.data.getUserVideoMetadataById.user_id,
            video_id: result.data.getUserVideoMetadataById,
            video_progress: result.data.getUserVideoMetadataById,
            video_progress_time: result.data.getUserVideoMetadataById
        }

        return userVideoMetadata;
    }catch(error){
        console.log("Error al obtener user video metadata ", error)
        let userVideoMetadata: UserVideoMetadata = {
            user_id: '',
            video_id: -1,
            video_progress: -1,
            video_progress_time: ''
        }
        return userVideoMetadata;
    }
}

export async function CreateUserVideoMetadata(video_id: Number, video_progress: Number){
    try{
        const result = await client.mutate({
            mutation: create_user_video_metadata,
            context: {
                headers: {
                    authorization: `Bearer ${store.getState().user.token}`
                }
            },
            variables: {
                video_id: video_id,
                video_progress: video_progress
            }
        });
        const resultado: String = result.data.createUserVideoMetadata.userVideoMetadata.ID;
        return resultado;
    }catch(error){
        console.log("Error al crear user video metadata", error)
        return "";
    }
}