'use client'
import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Main from '../components/main/Main'


export default function Home() {
   const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () =>{setSidebarOpen(true)};
  const closeSidebar = () =>{setSidebarOpen(false)};

  return (
   <div className='container'>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main />
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
   </div>
  );
}
  


