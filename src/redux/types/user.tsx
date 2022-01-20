/**
 * User Types
 */

export interface User {
    id: string,
    email: string,
    is_email_verified: boolean,
    token: string
};

export interface Profile {
    id: String,
    name: String,
};

export interface Profiles {
    profiles: [Profile],
};