import React from 'react'
import Image from 'next/image'
import './login.scss'
import LendsqrLogo from '../../../public/images/LendsqrLogo.svg'
import Banner from '../../../public/images/LoginBanner.svg'


const page = () => {
    return (
        <>
            <div className='login_container'>
                <section>
                    <Image className='logo' alt='logo' src={LendsqrLogo} />
                    <Image className='banner' alt='banner' src={Banner} />
                </section>


                <section>
                    <div>
                        <p>Welcome!</p>
                        <p>Enter details to login.</p>
                    </div>
                    <form>

                        <input
                            className='email'
                            placeholder='Email' />
                        <div className='password'>
                            <input
                                placeholder='Password'
                            />
                            <p>SHOW</p>
                        </div>
                        <p>FORGOT PASSWORD?</p>
                        <button>LOG IN</button>
                    </form>


                </section>
            </div>


        </>
    )
}

export default page
