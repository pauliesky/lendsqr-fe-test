import React from 'react'
import './user-details.scss'
import Image from 'next/image'
import backButton from '../../../public/images/back-button.svg'
import picture from '../../../public/images/profile-dp.svg'
import star from '../../../public/images/start.svg'




const page = () => {
  return (
    <>
      <div className='user_container'>
        <div className='back'> <Image alt='back' src={backButton} />  Back to users</div>
        <div className='header'>
          <p>User Details</p>
          <div className='header_buttons'>
            <div className='blacklist'>BLACKLIST USERS</div>
            <div className='activate'>ACTIVATE USERS</div>
          </div>
        </div>
        <section>
          <div className='basic_info'>
            <Image src={picture} alt='image' />
            <div>
              <p>Grace Effiom</p>
              <p>LSQFf587g90</p>
            </div>
            <div>
              <p>User’s Tier</p>
              <span>
                <Image src={star} alt='image' />
                <Image src={star} alt='image' />
                <Image src={star} alt='image' />
              </span>
            </div>
            <div>
              <p>₦200,000.00</p>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page
