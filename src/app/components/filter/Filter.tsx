import React from 'react'
import './filter.scss'
import Select from "react-select";
import { useState } from 'react';




// interface FilterProps {
//     filters: Filters;
//     setFilters: React.Dispatch<React.SetStateAction<Filters>>;
//     applyFilter: () => void;
//     resetFilter: () => void;
// }

const Filter = ({ data, filters, setFilters, applyFilter, resetFilter }: any) => {


    const [dataInfo, setDataInfo] = useState(data)

    const organisationData = dataInfo.map((data: any) => (data.organization))

    const organizationOptions = organisationData.map(org => ({
        value: org,
        label: org
    }));


    const statusOptions = [
        { value: "Active", label: "Active" },
        { value: "Pending", label: "Pending" },
        { value: "Inactive", label: "Inactive" },
        { value: "Blacklisted", label: "Blacklisted" },

    ];

    console.log('filters', filters)


    return (
        <>

            <div className='filter'>
                <div>
                    <p>Organisation</p>
                    <Select
                        options={organizationOptions}
                        value={organizationOptions.find(option => option.value === filters.organization)}
                        onChange={selected => setFilters({ ...filters, organization: selected ? selected.value : null })}

                    />
                </div>
                <div>
                    <p>Username</p>
                    <input
                        type='name'
                        placeholder='username'
                        value={filters.username}
                        onChange={e => setFilters({ ...filters, username: e.target.value })}
                    />
                </div>
                <div>
                    <p>Email</p>
                    <input
                        type='email'
                        placeholder='email'
                        value={filters.email}
                        onChange={e => setFilters({ ...filters, email: e.target.value })}
                    />
                </div>
                <div>
                    <p>Date</p>
                    <input type='date' placeholder='date'
                        value={filters.date}
                        onChange={e => setFilters({ ...filters, date: e.target.value })}
                    />

                </div>
                <div>
                    <p>Phone Numer</p>
                    <input type='number' placeholder='phone-number'
                        value={filters.phoneNumber}
                        onChange={e => setFilters({ ...filters, phoneNumber: e.target.value })}

                    />

                </div>
                <div>
                    <p>Status</p>
                    <Select

                        options={statusOptions}
                        value={statusOptions.find(option => option.value === filters.status)}
                        onChange={selected => setFilters({ ...filters, status: selected ? selected.value : null })}

                    />
                </div>

                <div className='filter_button'>
                    <button className='filter_button_reset' onClick={resetFilter}  >Reset</button>
                    <button className='filter_button_filter' onClick={applyFilter} >Filter</button>
                </div>
            </div>

        </>
    )
}

export default Filter
