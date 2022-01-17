/**
 * Recommendation Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { User } from "../../redux/types";

// Crowstream
import client from "../common.services";

const order_video_list_by_genre: DocumentNode = gql`
    query($profileId: String!, $genre: String!, $nVideos: Int!){
        rateVideoList(profileId:$profileId, genre:$genre, nVideos: $nVideos)
    }
`;

export async function orderVideoListByGenre(genre: string, nVideos?: number) {
    try {
        //const user: User = useSelector((state: RootState) => state.user);
        // let profileId = User.profile.id
        let profileId = '1e20df0b-f124-42ee-b9dc-b5c9136ae8a5'; //TODO quitar
        const result: ApolloQueryResult<any> = await client.query({
            query: order_video_list_by_genre,
            variables: {
                profileId: profileId,
                genre: genre,
                nVideos: nVideos
            }
        })
        return result.data.rateVideoList;
    } catch (error) {
        return []
    }
}