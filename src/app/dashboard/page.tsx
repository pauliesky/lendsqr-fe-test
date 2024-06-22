"use client"
import React from 'react'
import './dashboard.scss'
import Image from 'next/image'
import Gender from '../../../public/images/male_female.svg'
import filter from '../../../public/images//filter-button.svg'
import Coins from '../../../public/images/coins.svg'
import Data from '../../../public/images/data.svg'
import People from '../../../public/images/people.svg'
import Eye from '../../../public/images/eyes.svg'
import activeUser from '../../../public/images/user_active.svg'
import deleteUser from '../../../public/images/delete-friend.svg'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { PageNavigation } from '../components/PageNavigation'
import { useRouter } from "next/navigation";




const dashboard = () => {

  const router = useRouter();



  const rows = [
    {
      organization: "Lendsqr",
      username: "Conner - Gerlach",
      email: " user@gmail.com ",
      phoneNumber: "09043372281",
      dateJoined: "2Months",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Conner - Gerlach",
      email: " user@gmail.com ",
      phoneNumber: "09043372281",
      dateJoined: "2Months",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Conner - Gerlach",
      email: " user@gmail.com ",
      phoneNumber: "09043372281",
      dateJoined: "2Months",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Conner - Gerlach",
      email: " user@gmail.com ",
      phoneNumber: "09043372281",
      dateJoined: "2Months",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Conner - Gerlach",
      email: " user@gmail.com ",
      phoneNumber: "09043372281",
      dateJoined: "2Months",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Conner - Gerlach",
      email: " user@gmail.com ",
      phoneNumber: "09043372281",
      dateJoined: "2Months",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Conner - Gerlach",
      email: " user@gmail.com ",
      phoneNumber: "09043372281",
      dateJoined: "2Months",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Conner - Gerlach",
      email: " user@gmail.com ",
      phoneNumber: "09043372281",
      dateJoined: "2Months",
      status: "Inactive",
    },

  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (event: any, row: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleMenuItemClick = (action: any) => {
    console.log(`${action} clicked for row:`, selectedRow);
    router.push('/user-details')
    handleClose();
  };

  const [page, setPage] = useState(0);


  const handlePageChange = (newPage: any) => {
    setPage(newPage - 1);

  };

  return (
    <>
      <div className='dashboard_container' >

        <p className='header'>Users</p>


        <div className='card_container' >

          <div className='card'  >

            <Image alt='icon' src={Gender} />
            <p>USERS</p>
            <p>4566</p>

          </div>
          <div className='card'  >
            <Image alt='icon' src={People} />

            <p>ACTIVE USERS</p>
            <p>4566</p>

          </div>
          <div className='card'  >
            <Image alt='icon' src={Data} />

            <p>USERS WITH LOANS</p>
            <p>4566</p>

          </div>
          <div className='card'  >
            <Image alt='icon' src={Coins} />
            <p>USERS WITH SAVINGS</p>
            <p>4566</p>

          </div>

        </div>




        <div className='table'>
          <TableContainer sx={{ borderColor: 'none', border: 'none', boxShadow: 'none' }} component={Paper}>
            <Table sx={{ minWidth: 0 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{
                    "& .MuiTableCell-head": {
                      boxShadow: 'none',
                      border: 'none',
                      borderColor: 'none',
                      paddingTop: '0px',
                      paddingLeft: '0px',
                      paddingBottom: '36px',
                    },
                  }}
                >
                  <TableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                    ORGANIZATION
                    <Image alt='filter' src={filter} />
                  </TableCell>
                  <TableCell sx={{ alignItems: 'center', gap: '10px' }}>USERNAME<Image alt='filter' src={filter} /></TableCell>
                  <TableCell>EMAIL<Image alt='filter' src={filter} /></TableCell>
                  <TableCell>PHONE NUMBER<Image alt='filter' src={filter} /></TableCell>
                  <TableCell>DATE JOINED<Image alt='filter' src={filter} /></TableCell>
                  <TableCell>STATUS<Image alt='filter' src={filter} /></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    // key={row.name}
                    sx={{
                      '&:last-child td, &:last-child th,': { border: 0 },
                      '& .MuiTableCell-body ': { paddingTop: '23px', paddingLeft: 0, paddingBottom: '23px', borderColor: 'rgba(33, 63, 125, 0.1)' },
                      '&:first-child td, &:first-child th,': { paddingTop: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.organization}
                    </TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.dateJoined}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      <IconButton onClick={(event) => handleClick(event, row)}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu

                        sx={{
                          "& .MuiPaper-root": {
                            boxShadow: 'none',// check it out later
                            border: 1,
                            borderColor: 'rgba(84, 95, 125, 0.04)',
                            backgroundColor: 'rgba(255, 255, 255, 1)',

                          },
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => handleMenuItemClick('View Details')}>
                          <Image alt='icon' src={Eye} />
                          View Details</MenuItem>
                        <MenuItem 
                        //  onClick={() => handleMenuItemClick('Blacklist User')}
                         >
                          <Image alt='icon' src={deleteUser} />
                          Blacklist User
                        </MenuItem>
                        <MenuItem 
                        //  onClick={() => handleMenuItemClick('Activate User')}
                         >
                          <Image alt='icon' src={activeUser} />

                          Activate User</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <PageNavigation
            page={page}
            totalRecords={2}
            handlePageChange={handlePageChange}
          />
        </div>


      </div>
    </>
  )
}

export default dashboard