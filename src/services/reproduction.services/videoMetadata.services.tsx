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
        console.log("obtener meta", user_id)
        console.log("obtener meta", video_id)
        const result: ApolloQueryResult<any> = await client.query({
            query: get_user_video_metadata,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjZTUyOGQ1LTI1N2MtNDk3NC1iYmZlLTEyZGZkZDI5NjVmMyIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDI2NjEwNDMsImV4cCI6MTY0MjY2NDY0M30.geG7W2NfPBBDzDbiW3kId6-q9kaE3fRg_rjNJMjv1_I"
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

        console.log("que llego 1", userVideoMetadata)
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
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjZTUyOGQ1LTI1N2MtNDk3NC1iYmZlLTEyZGZkZDI5NjVmMyIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDI2NjEwNDMsImV4cCI6MTY0MjY2NDY0M30.geG7W2NfPBBDzDbiW3kId6-q9kaE3fRg_rjNJMjv1_I"
                }
            },
            variables: {
                video_id: video_id,
                video_progress: video_progress
            }
        });
        const resultado: String = result.data.createUserVideoMetadata.userVideoMetadata.ID;
        console.log("que llego 2", resultado)
        return resultado;
    }catch(error){
        console.log("Error al crear user video metadata", error)
        return "";
    }
}