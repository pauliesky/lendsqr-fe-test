import React from 'react'
import './filter.scss'
import Select from "react-select";

const Filter = () => {
    return (
        <>

            <div className='filter'>
                <div>
                    <p>Organisation</p>
                    <Select />
                </div>
                <div>
                    <p>Username</p>
                    <input type='name' placeholder='username' />
                </div>
                <div>
                    <p>Email</p>
                    <input type='email' placeholder='email' />
                </div>
                <div>
                    <p>Date</p>
                    <input type='date' placeholder='date' />

                </div>
                <div>
                    <p>Phone Numer</p>
                    <input type='number' placeholder='phone-number' />

                </div>
                <div>
                    <p>Status</p>
                    <Select />
                </div>

                <div className='filter_button'>
                    <button className='filter_button_reset'>Reset</button>
                    <button className='filter_button_filter'>Filter</button>
                </div>
            </div>

        </>
    )
}

export default Filter
