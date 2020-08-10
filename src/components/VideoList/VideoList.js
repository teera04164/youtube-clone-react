import React from 'react'
import { useHistory } from 'react-router-dom'
const VideoList = ({ title, description, link, channelTitle, videoId, url, getVideoDetail }) => {
    let history = useHistory()
    const onClickVideo = async (id) => {
        history.push(`/watch?v=${id}`)
        getVideoDetail()
    }
    return (
        <div className='video_box' style={{marginTop: '0', marginBottom: '10px'}} onClick={() => onClickVideo(videoId)}>
            <img src={url} style={{height: '156px'}}/>
            <div className='video_box_detail'>
                <div className='video_box_title'>
                    {title}
                </div>
                <div className='video_box_info'>
                    {channelTitle}
                </div>
                <div className='video_box_info'>
                    2.4M views 2 years ago
                 </div>
            </div>
        </div>
    )
}

export default VideoList
