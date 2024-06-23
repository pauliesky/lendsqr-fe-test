'use client'
import React from 'react'
import './user-details.scss'
import Image from 'next/image'
import backButton from '../../../public/images/back-button.svg'
import picture from '../../../public/images/profile-dp.svg'
import star from '../../../public/images/start.svg'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react'

import GeneralDetails from '../components/general-details/GeneralDetails'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const page = () => {



  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



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
        <section className='basic_info-container'>
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

          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
              <Tabs

                sx={{
                  "& .MuiTab-selected": {
                    color: '#39CDCC',
                    textDecorationColor: '#39CDCC'

                  },

                  //check it later


                }}

                value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab



                  label="General Details" {...a11yProps(0)} />
                <Tab label="Documents" {...a11yProps(1)} />
                <Tab label="Bank Details" {...a11yProps(2)} />
                <Tab label="Loans" {...a11yProps(3)} />
                <Tab label="Savings" {...a11yProps(4)} />
                <Tab label="App and System" {...a11yProps(5)} />

              </Tabs>
            </Box>
          </Box>
        </section>
        <section>
          <CustomTabPanel value={value} index={0}>
            <GeneralDetails />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </section>
      </div>
    </>
  )
}

export default page
