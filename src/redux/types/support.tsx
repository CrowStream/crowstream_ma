/**
 * Support Types
 */

// Posts

export interface Comment {
    id: string,
    user_id: string,
    description: string,
    files: [string]
}

export interface Post {
    id: string,
    user_id: string,
    description: string,
    comments: [Comment?],
    files: [string?]
}

export interface Forum {
    posts: [Post?],
    user_posts: [Post?]
}

// Support requests
export interface SupportResponse {

}

export interface SupportRequest {
    
}

export interface UserRequests {
    requests: [SupportRequest?]
}