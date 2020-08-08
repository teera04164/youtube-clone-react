import React from 'react'
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import RecommendVideo from '../../components/RecommendVideo/RecommendVideo';

function Home() {
    return (
        <div>
            <LeftMenu select={0} />
            <RecommendVideo/>
        </div>
    )
}

export default Home
