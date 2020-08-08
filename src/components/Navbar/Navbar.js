import React, { useState, useEffect, useContext } from 'react'
import './style.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { store } from '../../hooks/store'
import { getVideoBySearch } from '../../API'
import { search } from '../mock'
function Navbar() {
    let [query, setQuery] = useState('')
    let history = useHistory()
    const globalState = useContext(store)
    useEffect(() => {
        initParam()
    }, [])

    const handleClick = async () => {
        console.log('handleClick');
        await callApi()
        history.push(`/results?search_query=${query}`)

    }

    const callApi = async () => {
        console.log('in call api');       
        let data =  await getVideoBySearch({q: query})
        console.log("callApi -> data", data)
        // let data = search.items
        let fomat = data.items.map((ele) => {
            let { id: { videoId }, snippet: { title, description, thumbnails: { medium: { url } }, channelTitle } } = ele
            return { title, description, url, channelTitle, videoId }
        })

        const { dispatch } = globalState;
        dispatch({ type: 'ADD_DATA', playload: fomat })
        console.log("callApi -> globalState", globalState)


    }

    const initParam = () => {
        let currQuery = new URLSearchParams(window.location.search).get("search_query")
        currQuery ? setQuery(currQuery) : setQuery('')
    }

    return (
        <div className='navbar'>
            <div className="navbar__left">
                <i className="fa fa-align-justify" style={{ fontSize: '24px', marginRight: '10px' }} />
                <Link to='/'>
                    <img src='/img/logo.png' style={{ height: '50px' }} />
                </Link>
            </div>
            <div className="navbar__center">
                <input value={query} type='text' onChange={({ target: { value } }) => setQuery(value)} />
                <button to='/results' className="navbar__search" onClick={() => handleClick()}>
                    <i className="fa fa-search" />
                </button>
                {/* <button className="navbar__search"><i class="fa fa-search" /></button> */}
            </div>
            <div className="navbar__right">
                <Link to='/feed/trending'>
                    <i className="fa fa-plus-square" style={{ fontSize: '24px', marginRight: '20px' }} />
                </Link>
                <i className='fas fa-grip-horizontal' style={{ fontSize: '24px', marginRight: '20px' }} />
                <i className='fas fa-ellipsis-v' style={{ fontSize: '24px', marginRight: '20px' }} />
            </div>
        </div>
    )
}

export default Navbar
