/**
 * Account Services
 */

// Apollo
import {
    DocumentNode,
    gql
} from "@apollo/client";

// Crowstream
import client, { token_protected_mutation, token_protected_query } from "../common.services";


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

const sign_up: DocumentNode = gql`
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
        client.mutate({ mutation: sign_in, variables: { email, password }})
            .then(resolve)
            .catch((err) => {
                console.error(err);
                return 'Error';
            });
    });
}

export function signUp(email: String, password: String) {
    return new Promise((resolve) => {
        client.mutate({ mutation: sign_up, variables: { email, password} })
            .then(resolve)
            .catch((err) => {
                console.error(err);
                return 'Error';
            });
    });
}

export function whoIAm() {
    return new Promise((resolve) => {
        token_protected_query(who_i_am, {})
            .then(resolve)
            .catch((err) => {
                console.error(err);
                return 'Error';
            });
    });
}