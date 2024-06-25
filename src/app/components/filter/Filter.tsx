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
                    <input type='name' />
                </div>
                <div>
                    <p>Email</p>
                    <input type='email' />
                </div>
                <div>
                    <p>Date</p>
                    <input type='date' />

                </div>
                <div>
                    <p>Phone Numer</p>
                    <input type='number' />

                </div>
                <div>
                    <p>Status</p>
                    <Select />
                </div>

                <div>
                    <button>Reset</button>
                    <button>Filter</button>
                </div>
            </div>

        </>
    )
}

export default Filter
