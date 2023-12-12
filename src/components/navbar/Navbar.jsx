import React from 'react'
import style from './navbar.module.css'
import { FaBars } from 'react-icons/fa'
import { navbar } from '../../data/data'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className={`${style.navbar}`}>
        <div className={`${style.nav_icon}`} onClick={() => openSidebar()}>
            <i aria-hidden='true'>
                <FaBars />
            </i>
        </div>
        <div className={`${style.navbar_left}`}>
            <Link href={'/'}>Produtos</Link>
            <Link href={'/'}>Usuários</Link>
            <Link href={'/'} className={`${style.active_link}`}>Admin</Link>
        </div>
        <div className={`${style.navbar_right}`}>
            {navbar.map((list, index) => (
                <Link href={list.path} key={index}>
                    <i>{list.icon}</i>
                </Link>
            ))}
            <Link href='/'>
                <img src="/images/logo.png" alt="login" />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar