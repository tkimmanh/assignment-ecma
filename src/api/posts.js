import instance from "./config";

export const getAllPost = (params) => {
    return instance.get(`posts${params}`);
}
export const getOnePost = (id) => {
    return instance.get(`posts/${id}`)
}
export const addPosts = (posts) => {
    return instance.post(`post`,posts)
}
export const updatePost = (posts) => {
    return instance.put(`posts/${posts.id}`,posts)
}
export const deletePost = (id) => {
    return instance.delete(`posts/${id}`)
}