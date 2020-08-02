import React from 'react'
import './RecommendVideo.css'
import { Link } from 'react-router-dom'
function RecommendVideo() {
    return (
        <div className='RecommendVideo'>
            <h1>Recommended</h1>
            <div className='containner_video'>
                {
                    mockUpVideo.map((ele) => <RowVideo props={ele}/>)
                }
            </div>
        </div>
    )
}

export default RecommendVideo

const RowVideo = ({props: {id, imgVideo, imgChanel, view, time, title, chanel}}) => {
    return (
        <Link to={`/watch?v=${id}`} className='box__video'>
            <div className='video'>
                <img src={imgVideo} />
            </div>
            <div className='video__detail'>
                <img src={`${imgChanel}`} />
                <div className='video__text'>
                    <div className='video__title'>
                        {title}
                    </div>
                    <div className='video__chanel_name'>
                        {chanel}
                    </div>
                    <div className='video__view'>
                        {view} -  {time}
                    </div>
                </div>
            </div>
        </Link>
    )
}

const mockUpVideo = [
    {
        id: 'tCAt8eEKPDc',
        imgVideo: 'https://i.ytimg.com/vi/ogfk-sbxb3w/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBG6YlmCKQD5kq6GR5PRT98A7SzjA',
        imgChanel: 'https://yt3.ggpht.com/a-/AOh14GhFSOFba1cC35ZPCmZX0itVeOPMqcTeufUDqw=s68-c-k-c0x00ffffff-no-rj-mo',
        view: '400 views',
        time: '44 minutes ago',
        title: 'โอกาสของ แทมมี่ คนอเมริกาเชื้อสายไทย กับตำแหน่งรองประธานาธิบดีอเมริกา| The Key',
        chanel: 'TNN ONLINE'
    },
    {
        id: 'IaJqMcOMuDM',
        imgVideo: 'https://i.ytimg.com/vi/IaJqMcOMuDM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCeXQBqeT71DW7mg7da-vENDO0QOw',
        imgChanel: 'https://yt3.ggpht.com/a-/AOh14GhsPMReHx0LFOV0t7dpA7IwtGf_rf6hErq6CA=s68-c-k-c0x00ffffff-no-rj-mo',
        view: '400 views',
        time: '44 minutes ago',
        title: 'Build and Deploy a React PWA - Why Progressive Web Apps are the Future of the Web',
        chanel: 'JavaScript Mastery'
    },
    {
        id: 'Kp3HGwlXwCk',
        imgVideo: 'https://i.ytimg.com/vi/Kp3HGwlXwCk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLACM0dU6ib4KXhe-tvloTh8T_78Fw',
        imgChanel: 'https://yt3.ggpht.com/a/AATXAJyYNqJwk4aGRpnCGiyZIS29DW_UvzZGkdkazzoPeA=s88-c-k-c0xffffffff-no-rj-mo',
        view: '492,441 view',
        time: 'Jul 10, 2018',
        title: 'Basic Javascript Projects',
        chanel: 'Coding Addict'
    },
]