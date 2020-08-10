import axios from 'axios'
import { search, videoById } from '../components/mock'
const YT_API_V3_URL = 'https://www.googleapis.com/youtube/v3'
// const YT_API_V3_URL = 'http://localhost:3002/youtube/v3'

const fakeApi = false
// const API_KEY = ""

const customAxios = axios.create({
    baseURL: YT_API_V3_URL,
    params: {
        key: process.env.REACT_APP_YT_TOKEN
    }
})

export const getVideoInfoById = async (id) => {
    console.log(" getVideoInfoById ", id);
    if (fakeApi) return videoById
    let result = await customAxios.get(`/videos?part=snippet,contentDetails,statistics&id=${id}`)
    return result.data

}

export const getVideoBySearch = async (q) => {
    console.log(" getVideoBySearch ", q);
    if (fakeApi) return search
    let result = await customAxios.get(`/search?part=snippet&q=${q}&maxResults=15&type=video`)
    return result.data
}

export const getVideoRelateById = async (id) => {
    console.log(" getVideoRelateById ", id);
    if (fakeApi) return search
    let result = await customAxios.get(`/search?part=snippet&type=video&relatedToVideoId=${id}&maxResults=15`)
    return result.data

}
