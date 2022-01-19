import {
    DocumentNode,
    gql
} from "@apollo/client";

// Crowstream
import client from "../common.services";
import { LikedVideo } from "../../redux/types";

const likevideo: DocumentNode = gql`
    mutation($user_id: String!, $video_id: Int!, $like: Int!) {
        liking(liked: {
            user_id: $user_id
            video_id: $video_id
            like: $like
        }) {
            liked {
                user_id
                video_id
                like
            }
        }
    }
`;

export async function LikeVideo(user_id: String, video_id: number, like: number){
    try{
        const result = await client.mutate({
            mutation: likevideo,
            variables: {
                user_id: user_id,
                video_id: video_id,
                like: like
            }
        });
        const liked: LikedVideo = {
            user_id: result.data.liking.liked.user_id,
            video_id: result.data.liking.liked.video_id,
            like: result.data.liking.liked.like
        }
        return liked;
    }catch(error){
        console.log("un error", error)
        const liked: LikedVideo = {
            user_id: '',
            video_id: '',
            like: 0
        }
        return liked;
    }

}