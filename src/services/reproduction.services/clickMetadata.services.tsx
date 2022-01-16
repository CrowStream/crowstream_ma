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


const create_click_count_metadata: DocumentNode = gql`
    mutation($video_id: Int!) {
        createClickCountMetadata(clickCountMetadata: {
            video_id: $video_id
            click_video: true
            click_description: false
        }){
            clickCountMetadata{
                ID
            }
        }
    }
`;

export async function CreateClickCountMetadata(user_id: String, video_id: Number){
    try{
        console.log("hace algo", user_id)
        console.log("hace algo2", video_id)
        const result = await client.mutate({
            mutation: create_click_count_metadata,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0Mjg1NGU1LTY3ODMtNDg1My05NTViLWJkZDA0ZDE1MjgwZSIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDIzMTI0ODYsImV4cCI6MTY0MjMxNjA4Nn0.Ff7yY3rNAilGarwBgBJedBj9eHMamXtYewuxXi4-ofY"
                }
            },
            variables: {
                video_id: video_id
            }
        });
        const resultado: String = result.data.createClickCountMetadata.clickCountMetadata.ID;
        return resultado;
    }catch(error){
        console.log("el erorr", error)
        return "";
    }
    
}