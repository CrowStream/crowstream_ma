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

const get_click_count_metadata: DocumentNode = gql`
    query getClickCountMetadataById($user_id: String!, $video_id: Int!)   {
        getClickCountMetadataById(user_id: $user_id, video_id: $video_id) {
            user_id
            video_id
            click_video
            click_description
        }
    }
`;

const create_click_count_metadata: DocumentNode = gql`
    mutation($video_id: Int!) {
        createClickCountMetadata(clickCountMetadata: {
            video_id: $video_id
            click_video: false
            click_description: true
        }){
            clickCountMetadata{
                ID
            }
        }
    }
`;

const update_click_count_metadata: DocumentNode = gql`
    mutation($user_id: String!, $video_id: Int!) {
        updateClickCountMetadata(clickCountMetadata: {
            user_id: $user_id
            video_id: $video_id
            click_video: true
            click_description: true
        }){
            clickCountMetadata{
                ID,
                user_id,
                video_id,
                click_description,
                click_video
            }
        }
    }
`;

export async function GetClickCountMetadataById(user_id: string, video_id: number){
    try{
        const result: ApolloQueryResult<any> = await client.query({
            query: get_click_count_metadata,
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
        const existsData = result.data.getClickCountMetadataById.user_id != null ? true : false
        return existsData;
    }catch(error){
        console.log("Error al obtener click count metadata ", error)
        return null;
    }
}

export async function CreateClickCountMetadata(video_id: Number){
    try{
        const result = await client.mutate({
            mutation: create_click_count_metadata,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjZTUyOGQ1LTI1N2MtNDk3NC1iYmZlLTEyZGZkZDI5NjVmMyIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDI2NjEwNDMsImV4cCI6MTY0MjY2NDY0M30.geG7W2NfPBBDzDbiW3kId6-q9kaE3fRg_rjNJMjv1_I"
                }
            },
            variables: {
                video_id: video_id,
            }
        });
        const resultado: String = result.data.createClickCountMetadata.clickCountMetadata.ID;
        return resultado;
    }catch(error){
        console.log("Error al crear click count metadata", error)
        return "";
    }
}

export async function UpdateClickCountMetadata(user_id: String, video_id: Number){
    try{
        const result = await client.mutate({
            mutation: update_click_count_metadata,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjZTUyOGQ1LTI1N2MtNDk3NC1iYmZlLTEyZGZkZDI5NjVmMyIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDI2NjEwNDMsImV4cCI6MTY0MjY2NDY0M30.geG7W2NfPBBDzDbiW3kId6-q9kaE3fRg_rjNJMjv1_I"
                }
            },
            variables: {
                user_id: user_id,
                video_id: video_id,
            }
        });
        const resultado: String = result.data.updateClickCountMetadata.clickCountMetadata.ID;
        return resultado;
    }catch(error){
        console.log("Error al actualizar click metadata", error)
        return "";
    }
}