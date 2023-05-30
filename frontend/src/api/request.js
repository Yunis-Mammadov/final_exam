import { BASE_URL } from "./baseURL";
import axios from "axios"

export const getAll = async() => {
    let Server;
    await axios.get(`${BASE_URL}/server`)
    .then(res => {
        Server = res.data
    })
    return Server
}

export const getServerById = async(id) => {
    let Server;
    await axios.get(`${BASE_URL}/server/${id}`)
    .then(res => {
        Server = res.data
    })
    return Server
}

export const deleteServer = async(id) => {
    let message;
    await axios.delete(`${BASE_URL}/server/${id}`)
    .then(res => {
        message = res.data
    })
    return message
}

export const postServer = (load) => {
    axios.post(`${BASE_URL}/server`,load)
}