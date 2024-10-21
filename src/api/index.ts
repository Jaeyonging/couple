import axios from 'axios'
let service_Key = import.meta.env.VITE_SERVICE_KEY

export const getNaverUser = (token: string) => {
    return axios.get(`https://openapi.naver.com/v1/nid/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    console.log(token)
}
