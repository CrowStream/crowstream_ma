/**
 * Account Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { ViewPagerAndroidBase } from "react-native";
import { Catalogue, VideoSet, Video } from "../../redux/types";

// Crowstream
import client from "../common.services";


const retrieve_video_by_id: DocumentNode = gql`
    query($id: Int!){
        retrieveVideoById(videoId: $id){
            id,
            video_name,
            release_year,
            thumbnail_url,
            video_url
        }
    }
`;

export async function fill_genre_list(genre: string, genre_list_id: number[]){
    try{
        let video_set: VideoSet = {
            video_list: [],
            description: `Videos del género ${genre}`
        }
        for (let video_id of genre_list_id){
            const result: ApolloQueryResult<any> = await client.query({
                query: retrieve_video_by_id,
                variables: {
                    id: video_id
                }
            });
            let video: Video = {
                id: result.data.retrieveVideoById.id,
                video_name: result.data.retrieveVideoById.video_name,
                released_year: result.data.retrieveVideoById.released_year,
                description: result.data.retrieveVideoById.description,
                thumbnail_url: result.data.retrieveVideoById.thumbnail_url,
                video_url: result.data.retrieveVideoById.emavideo_url
            }
            video_set.video_list.push(video)
        }        
        return video_set;
    }catch(error){
        let video_set: VideoSet = {
            video_list: [],
            description: ''
        }
        return video_set;
    }
    
}

export async function generateHome(){
    try{
        let catalogue: Catalogue = {
            videos: []
        }

        // Lista de géneros para mostrar
        let genres: string[] = ['Drama', 'Terror', 'Accion'];
        for(let genre of genres){
            //Llamada a petición de recomendación
            // ---
            /*--*/let genre_list_id = [0, 20, 24, 28, 31];
            // 
            let video_set: VideoSet = await fill_genre_list(genre, genre_list_id);
            if (video_set.video_list.length){
                catalogue.videos.push(video_set)
            }            
        }
        return catalogue;
    }catch(error){
        let catalogue: Catalogue = {
            videos: []
        }
        return catalogue;
    }
    
}