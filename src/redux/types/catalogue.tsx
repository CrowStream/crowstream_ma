/**
 * Catalogue Types
 */

export interface Video {
    id: number,
    video_name: string,
    release_year: number,
    description: string,
    producer: string,
    director: string,
    genre: string,
    thumbnail_url: string,
    video_url: string
}
export interface VideoSet {
    video_list: Video[]
    description: string
}

export interface Catalogue {
    videos: VideoSet[]
}