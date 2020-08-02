import React from 'react'
import './Watch.css'
import { useLocation } from 'react-router-dom'
function Watch() {
    const useQuery = () => new URLSearchParams(useLocation().search)

    return (
        <div className="watch__containner">
            <VideoEmbed id={useQuery().get('v')} />
            <VideoDetail />

        </div>
    )
}

export default Watch

const VideoEmbed = ({ id }) => {
    console.log("VideoEmbed -> id", id)
    return (
        <div className="video__embeded">
            <iframe width="640" height="360" src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
const VideoDetail = () => {
    return (
        <span className='video__detail_containner'>
            <div className='video__detail__title'>
                Top 5 Programming Languages to Learn in 2020 to Get a Job Without a College Degree
             </div>
            <div className='video__detail__box'>
                <div className='video__detail__view'>
                    <div>1,370,390 views•Dec 13, 2019</div>
                </div>
                <div className='video__detail__like__box'>
                    <div className='video__detail__like__Item'>
                        <i class="fa fa-thumbs-up" aria-hidden="true" /><span className='video__detail__like'> 120K</span>
                    </div>
                    <div className='video__detail__like__Item'>
                        <i class="fa fa-thumbs-down" aria-hidden="true" /><span className='video__detail__disLike'> 120K</span>
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