/**
 * Account Services
 */

// Apollo
import {
    DocumentNode,
    gql
} from "@apollo/client";

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
export async function WhoIAm() {
    return client.query({
        query: who_i_am,
        context: {
            headers: {
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwZTU4OTc5LTM3MWYtNDdhMy04ODdhLTQ2ZjNkZmM3MTc0MCIsImVtYWlsIjoidGVzdHVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NDAwMzgwMDQsImV4cCI6MTY0MDA0MTYwNH0.Kl77OEAEjMUmQmOBUh4ni3F-KikEx1hHKEr2Xzw3ot0"
            }
        }
    })
}