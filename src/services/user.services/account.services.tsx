/**
 * Account Services
 */

// Apollo
import {
    DocumentNode,
    gql
} from "@apollo/client";

// Crowstream
import { token_protected_mutation, token_protected_query } from "../common.services";


const sign_in: DocumentNode = gql`
    mutation($email: String!, $password: String!) {
        signin(accountCredentials: {
            email: $email
            password: $password
        }) {
            token {
                token
            }
        }
    }
`;

const sing_up: DocumentNode = gql`
    mutation($email: String!, $password: String!) {
        signup(accountCredentials: {
            email: $email
            password: $password
        }) {
            account {
                id
                email
                is_email_verified
            }
        }
    }
`;

const who_i_am: DocumentNode = gql`
    query {
        whoAmI {
            id
            email
            is_email_verified
        }
    }
`;

export function signIn(email: String, password: String) {
    return new Promise((resolve) => {
        token_protected_mutation(sign_in, { email, password })
            .then(resolve)
            .catch(console.error);
    });
}

export function singUp(email: String, password: String) {
    return new Promise((resolve) => {
        token_protected_mutation(sing_up, { email, password })
            .then(resolve)
            .catch(console.error);
    });
}

export function whoIAm() {
    return new Promise((resolve) => {
        token_protected_query(who_i_am, {})
            .then(resolve)
            .catch(console.error);
    });
}