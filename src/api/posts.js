import instance from "./config";

export const getAllPost = (params) => {
    return instance.get(`posts${params}`);
}
export const getOnePost = (id) => {
    return instance.get(`posts/${id}`)
}
export const addNewPosts = (posts) => {
    return instance.post(`posts`,posts)
}
export const updatePost = (posts) => {
    return instance.put(`posts/${posts.id}`,posts)
}
export const deletePost = (id) => {
    return instance.delete(`posts/${id}`)
}