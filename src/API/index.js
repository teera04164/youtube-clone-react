import axios from 'axios'
const YT_API_V3_URL = 'https://www.googleapis.com/youtube/v3'

export const getVideoInfoById = async ({ id }) => {
    let result = await axios.get(`${YT_API_V3_URL}/videos?part=snippet,contentDetails,statistics&id=${id}&key=${process.env.REACT_APP_YT_TOKEN}`)
    return result.data
}

export const getVideoBySearch = async ({ q }) => {
    let result = await axios.get(`${YT_API_V3_URL}/search?part=snippet&&q=${q}&maxResults=15&type=video&key=${process.env.REACT_APP_YT_TOKEN}`)
    return result.data
}
