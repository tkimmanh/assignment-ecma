import instance from "./config";
const { accessToken } = JSON.parse(localStorage.getItem('userLogin')) || {}
const token = accessToken
export const signup = (data) => {
    return instance.post(`signup`,data)
}
export const signin = (data) => {
    return instance.post(`signin`,data)
}
export const logout = () => {
  return instance.post('logout', null, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
}