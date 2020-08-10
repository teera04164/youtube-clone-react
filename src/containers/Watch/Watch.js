import React, { useState, useEffect, useMemo } from 'react'
import './Watch.css'
import { getVideoInfoById, getVideoRelateById } from '../../API'
import { videoById } from '../../components/mock'
import RelateVideo from '../../components/RelateVideo/RelateVideo'
import moment from 'moment'
import VideoList from '../../components/VideoList/VideoList';
function Watch() {
    let [id, setId] = useState(null)
    let [videoInfo, setSideoInfo] = useState(null)
    let [videoRelate, setVideoRelate] = useState(null)

    const getVideoDetail = async () => {
        let vid = new URLSearchParams(window.location.search).get("v")
        let videoInfo = await getVideoInfoById(vid)
        let _videoRelate = await getVideoRelateById(vid)
        console.log("getVideoDetail -> _videoRelate", _videoRelate)
        setVideoRelate(_videoRelate.items)
        setSideoInfo(videoInfo.items)
        setId(vid)
        console.log("getVideoDetail -> videoRelate", videoRelate)
    }

    useEffect(() => {
        getVideoDetail()
    }, [])

    return (
        <div className="watch__containner">
            {
                id && videoRelate && <>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <VideoEmbed id={id} />
                            <VideoDetail id={id} data={videoInfo} />
                        </div>
                        <div style={{ marginLeft: '20px', width: '100%' }}>
                            {
                                videoRelate.map(({ id: { videoId }, snippet: { title, description, link, channelTitle, thumbnails: { medium: { url } } } }, index) =>
                                    <VideoList
                                        title={title}
                                        description={description}
                                        link={link}
                                        channelTitle={channelTitle}
                                        url={url}
                                        videoId={videoId}
                                        getVideoDetail={getVideoDetail}
                                        key={index}
                                    />)
                            }

                        </div>

                    </div>

                </>
            }
        </div>
    )
}

export default Watch

const VideoEmbed = ({ id }) => {
    console.log("VideoEmbed -> id", id)
    return (
        <div className="video__embeded">
            <iframe width="722" height="406" src={`https://www.youtube.com/embed/${id}?rel=0;&autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}
const VideoDetail = ({ id, data }) => {

    const { statistics: { viewCount, likeCount, dislikeCount, commentCount } } = data[0]
    const { title, publishedAt } = data[0].snippet
    let dataFomat = moment(publishedAt).format("MMM, D y");

    return (
        <span className='video__detail_containner'>
            <div className='video__detail__title'>
                {title}
            </div>
            <div className='video__detail__box'>
                <div className='video__detail__view'>
                    <div>{formatNumber(viewCount)} views • {dataFomat}</div>
                </div>
                <div className='video__detail__like__box'>
                    <div className='video__detail__like__Item'>
                        <i class="fa fa-thumbs-up" aria-hidden="true" /><span className='video__detail__like'> {likeCount}</span>
                    </div>
                    <div className='video__detail__like__Item'>
                        <i class="fa fa-thumbs-down" aria-hidden="true" /><span className='video__detail__disLike'> {dislikeCount}</span>
                    </div>
                    <div className='video__detail__like__Item'>
                        <i class="fa fa-share" aria-hidden="true" /><span className='video__detail__share'> SHARE</span>
                    </div>
                    <div className='video__detail__like__Item'>
                        <i class="fa fa-save" aria-hidden="true" />
                        <span className='video__detail__save'> SAVE</span>
                    </div>
                </div>
            </div>


        </span>
    )
}

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}