export const useActionsTypes = {
    retrieveAllPosts: 'retrieve_all_post',
    retrievePostByID: 'retrieve_post_by_id',
    createPost: 'create_post',
    updatePost: 'update_post',
    deletePost: 'delete_post',
    createComment: 'create_comment'
}
  
export const retrieveAllPosts = ( payload: any) => {
    return ({
        type: useActionsTypes.retrieveAllPosts,
        payload,
    })
}

export const retrievePostByID = ( payload: any) => {
    return ({
        type: useActionsTypes.retrievePostByID,
        payload,
    })
}

export const createPost = ( payload: any) => {
    return ({
        type: useActionsTypes.createPost,
        payload,
    })
}

export const updatePost = ( payload: any) => {
    return ({
        type: useActionsTypes.updatePost,
        payload,
    })
}

export const deletePost = ( payload: any) => {
    return ({
        type: useActionsTypes.deletePost,
        payload,
    })
}

export const createComment = ( payload: any) => {
    return ({
        type: useActionsTypes.deletePost,
        payload,
    })
}