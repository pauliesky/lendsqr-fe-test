import React from 'react'
import Navbar from "@/app/components/navbar/page"
import Sidebar from "@/app/components/sidebar/page"
import './navigation.scss'

const page = () => {
    return (
        <div className='navigation' >
            <Navbar />
            <Sidebar />
        </div>
    )
}

export default page
