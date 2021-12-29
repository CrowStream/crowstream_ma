/**
 * Account Services
 */

// Apollo
import {
    ApolloQueryResult,
    DocumentNode,
    gql
} from "@apollo/client";
import { User } from "../../redux/types";

// Crowstream
import client from "../common.services";


const who_i_am: DocumentNode = gql`
    query {
        whoAmI {
            id
            email
            is_email_verified
        }
    }
`;

// TODO: Fix token usage
export async function WhoIAm(){
    try{
        const result: ApolloQueryResult<any> = await client.query({
            query: who_i_am,
            context: {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwZTU4OTc5LTM3MWYtNDdhMy04ODdhLTQ2ZjNkZmM3MTc0MCIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDA3NDc2NjksImV4cCI6MTY0MDc1MTI2OX0.d3Dx41-nwOlYRxJw6dHvL5GgL4xSjLcnIJb49vjcDso"
                }
            }
        });
        const user: User = {
            id: result.data.whoAmI.id,
            email: result.data.whoAmI.email,
            is_email_verified: result.data.whoAmI.id
        }
        return user;
    }catch(error){
        const user: User = {
            id: '',
            email: '',
            is_email_verified: '' != ''
        }
        return user;
    }
    
}