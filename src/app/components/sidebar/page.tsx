'use client'
import React from 'react'
import './sidebar.scss'
import Image from 'next/image'
import LendSqrLogo from '../../../../public/images/DashboardLogo.png'
import ArrowDown from '../../../../public/images/arrow_down.png'
import Badge from '../../../../public/images/badge-percent 1.png'
import Bank from '../../../../public/images/bank.png'
import Briefcase from '../../../../public/images/briefcase.png'
import Chart from '../../../../public/images/chart-bar 2.png'
import clipboard from '../../../../public/images/clipboard-list 1.png'
import Coins from '../../../../public/images/coins-solid 1.png'
import Hand from '../../../../public/images/Hand.png'
import Handshake from '../../../../public/images/handshake-regular 1.png'
import Piggybank from '../../../../public/images/piggy-bank 1.png'
import Sack from '../../../../public/images/sack 1.png'
import Scroll from '../../../../public/images/scroll 1.png'
import Sliders from '../../../../public/images/sliders-h 1.png'
import Transcations from '../../../../public/images/transaction.png'
import check from '../../../../public/images/user-check 1.png'
import cog from '../../../../public/images/user-cog 1.png'
import friends from '../../../../public/images/user-friends.png'
import times from '../../../../public/images/user-times 1.png'
import users from '../../../../public/images/users.png'
import Home from '../../../../public/images/home 1.png'
import temple from '../../../../public/images/temple.png'
import galaxy from '../../../../public/images/galaxy 1.png'

const page = () => {
    return (
        <div className='sidebar_container' >
            <Image className='logo' alt='logo' src={LendSqrLogo} />

            <section className='menus'>

                <div>
                    <Image className='' alt='logo' src={Briefcase} />
                    <p>Switch Organization</p>
                    <Image className='' alt='logo' src={ArrowDown} />

                </div>
                <div>
                    <Image className='' alt='logo' src={Home} />

                    <p>Dashboard</p>
                </div>
                <div>
                    <p>CUSTOMERS</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={friends} />

                    <p>Users</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={users} />

                    <p>Guarantors</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Sack} />

                    <p>Loans</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Handshake} />

                    <p>Decision Models</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Piggybank} />

                    <p>Savings</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Hand} />

                    <p>Loan Requests</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={check} />

                    <p>Whitelist</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={times} />

                    <p>Karma</p>
                </div>
                <div>

                    <p>BUSINESSES</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Briefcase} />


                    <p>Organization</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Hand} />

                    <p>Loan Products</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={temple} />

                    <p>Savings Products</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Coins} />

                    <p>Fees and Charges</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Transcations} />

                    <p>Transactions</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={galaxy} />

                    <p>Services</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={cog} />

                    <p>Service Account</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Scroll} />

                    <p>Settlement</p>
                </div>
                <div>
                    <Image className='' alt='logo' src={Chart} />

                    <p>Reports</p>
                </div>
                <div>
                    <p>SETTINGS</p>
                </div> <div>
                    <Image className='' alt='logo' src={Sliders} />

                    <p>Preferences</p>
                </div> <div>
                    <Image className='' alt='logo' src={Badge} />
                    <p>Fees and Pricing</p>
                </div> <div>
                    <Image className='' alt='logo' src={clipboard} />
                    <p>Audit Logs</p>
                </div>

            </section>

        </div>
    )
}

export default page
