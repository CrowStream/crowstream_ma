export interface Comment {
    id: string,
    user_id: string,
    description: string
    files: string[]
}

export interface Post {
    id: string,
    user_id: string,
    description: string,
    comments: Comment[]
    files: string[]
}