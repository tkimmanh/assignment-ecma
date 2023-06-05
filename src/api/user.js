import instance from "./config";

export const signup = (data) => {
    return instance.post(`signup`,data)
}
export const signin = (data) => {
    return instance.post(`signin`,data)
}