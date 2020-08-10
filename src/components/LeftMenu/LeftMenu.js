import React, { useState } from 'react'
import './LeftMenu.css'
import { Link } from 'react-router-dom'
const fakeData = [
    {
        icon: 'fa fa-home',
        title: 'HOME',
        link: '/'
    },
    {
        icon: 'fa fa-fire',
        title: 'Trending',
        link: '/feed/trending'
    },
    {
        icon: 'fa fa-plus-square',
        title: 'Subscriptions',
        link: '/feed/subscriptions'
    },
]


function LeftMenu({ select }) {
    let [isActive, setIsActive] = useState(select !== undefined ? select : null)

    const handleClickMenu = (key) => {
        setIsActive(key)

    }

    return (
        <div className="left__menu">
            {
                fakeData.map(({ icon, title, link }, index) =>
                    <SubMenu
                        icon={icon}
                        title={title}
                        index={index}
                        key={index}
                        handleClickMenu={handleClickMenu}
                        isActive={isActive}
                        link={link}
                    />)
            }
        </div>
    )
}

const SubMenu = ({ icon, title, index, handleClickMenu, isActive, link }) => {
    return (
        <Link to={link} className={`${isActive === index ? 'left__menuSub__active' : 'left__menuSub'}`} onClick={() => handleClickMenu(index)}>
            <i class={`${icon}`} />
            <div className='left__menu__title'>
                {title}
            </div>
        </Link>
    )
}

export default LeftMenu
