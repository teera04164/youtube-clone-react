import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './Search.css'
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import { store } from '../../hooks/store'
import { getVideoBySearch } from '../../API'

function Search({ select }) {
    const globalState = useContext(store)
    let history = useHistory()
    const { dispatch, state } = globalState;

    useEffect(() => {
        initialSearch()
    }, [])

    const initialSearch = async () => {
        let currQuery = new URLSearchParams(window.location.search).get("search_query")
        let id = currQuery ? currQuery : null
        if (id)
            callApi(id)
    }

    const onClickVideo = async (id) => {
        history.push(`/watch?v=${id}`)
    }

    const callApi = async (query) => {
        console.log("in callApi");
        let data = await getVideoBySearch(query)
        let fomat = data.items.map((ele) => {
            let { id: { videoId }, snippet: { title, description, thumbnails: { medium: { url } }, channelTitle } } = ele
            return { title, description, url, channelTitle, videoId }
        })
        dispatch({ type: 'ADD_DATA', playload: fomat })
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
                        state.search.length > 0 && state.search.map(({ title, description, url, channelTitle, videoId }, index) =>
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


const RenderVideo = ({ title, description, link, channelTitle, videoId, onClickVideo }) => {
    return (
        <div className='video_box' onClick={() => onClickVideo(videoId)} >
            <img src={link} alt={title}/>
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