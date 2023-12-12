import React from 'react'
import { FaBars, FaMinusSquare, FaTimes } from 'react-icons/fa'
import { sidebarTitle, sidebarMenu_adm, sidebarMenu_use, Log_off } from '../../data/data'
import Link from 'next/link';
// style
import style from './sidebar.module.css';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
  return (
    <div className={sidebarOpen ? `${style.sidebar_responsive}` : ''} id={`${style.sidebar}`}>
        <div className={`${style.sidebar_title}`}>
            {sidebarTitle.map((list, index) => (
                <>
                    <div className={`${style.sidebar_img}`} key={index}>
                        <img src={list.logo} alt="logo" /> 
                        <h1>{list.title}</h1>
                    </div>
                    <i onClick={() => closeSidebar()} id='sidebarIcon' aria-hidden='true'>
                        <FaTimes />
                    </i>
                </>
            ))}
        </div>
        <div className={`${style.sidebar_menu}`}>
            <div className={`${style.sidebar_link} ${style.active_menu_link}`}>
                <i><FaMinusSquare /></i>
                <Link href={'/'}>Home</Link>
            </div>
            {/* admin */}
            <h2>ADMIN</h2>
            {sidebarMenu_adm.map((list, index) => (
                <div className={`${style.sidebar_link}`} key={index}>
                    <i>{list.icon}</i>
                    <Link href={list.path}> {list.name} </Link>
                </div>         
            ))}
            {/* user */}
            <h2>PESSOAS</h2>
            {sidebarMenu_use.map((list, index) => (
                <div className={`${style.sidebar_link}`}  key={index}>
                    <i>{list.icon}</i>
                    <Link href={list.path}>{list.name}</Link>
                </div> 
            ))}
            {/* log out */}
            {Log_off.map((list, index) => (
                <div className={`${style.sidebar_logout}`}  key={index}>
                    <i>{list.icon}</i>
                    <Link href={list.path}>{list.name}</Link>
                </div> 
            ))}
        </div>
    </div>
  )
}

export default Sidebar