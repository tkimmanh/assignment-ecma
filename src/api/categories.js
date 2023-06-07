import instance from "./config";

export const getAllCategories = (params) => {
    return instance.get(`categories${params}`)
}