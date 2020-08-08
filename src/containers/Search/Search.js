import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import './Search.css'
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import { store } from '../../hooks/store'
import axios from 'axios'

function Search({ select }) {
    const useQuery = () => new URLSearchParams(useLocation().search)
    let [dataVideo, setDataVideo] = useState([])
    const globalState = useContext(store)
    const [, updateState] = React.useState();
    let history = useHistory()
    const forceUpdate = React.useCallback(() => updateState({}), []);
    useEffect(() => {
        initialSearch()
    }, [globalState.state])

    const initialSearch = async () => {
        setDataVideo(globalState.state || [])
        console.log('dataVideo', dataVideo);
        // forceUpdate()
        console.log("initialSearch -> globalState.state.data", globalState)
    }

    const onClickVideo = async (id) => {
        history.push(`/watch?v=${id}`)
    }

    return (
        <div>
            <LeftMenu select={select} />
            <div className='container__search'>
                <div className='container__search_filter'>
                    <i class="fa fa-filter" /> <h1>FILTER</h1>
                </div>
                <div className='line' />
                <div className='video_search'>
                    {
                        dataVideo.length > 0 && dataVideo.map(({ title, description, url, channelTitle, videoId },index) =>
                            <RenderVideo
                                title={title}
                                description={description}
                                key={index}
                                link={url}
                                channelTitle={channelTitle}
                                videoId={videoId}
                                onClickVideo={onClickVideo}
                            />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Search


const RenderVideo = ({ title, description, link, channelTitle,videoId, onClickVideo }) => {
    return (
        <div className='video_box' onClick={()=> onClickVideo(videoId)} >
            <img src={link} />
            <div className='video_box_detail'>
                <div className='video_box_title'>
                    {title}
                </div>
                <div className='video_box_info'>
                    {channelTitle} 2.4M views 2 years ago
                 </div>
                <div className='video_box_desc'>
                    {description}
                </div>
            </div>
        </div>
    )
}