import React from 'react'
import './navbar.scss'
import Image from 'next/image'
import search from '../../../../public/images/search.png'
import bell from '../../../../public/images/bell.png'
import dropdown from '../../../../public/images/dropdown.svg'

const page = () => {
    return (
        <>
            <nav>

                <section>

                    <div className='search_bar'>
                        <input type='search' placeholder='Search for anything' />
                        <div className='search_icon'>
                            <Image alt='search' src={search} />
                        </div>
                    </div>


                </section>
                <section>
                    <div>Docs</div>
                    <Image alt='bell' src={bell} />

                    <Image alt='user' src={bell} />


                    <div>
                        <p>Ayodeji</p>
                        <Image src={dropdown} alt='arrow' />
                    </div>


                </section>
            </nav>


        </>
    )
}

export default page
