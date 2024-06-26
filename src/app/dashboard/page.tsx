"use client"
import React from 'react'
import './dashboard.scss'
import Image from 'next/image'
import Gender from '../../../public/images/male_female.svg'
import filterButton from '../../../public/images//filter-button.svg'
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
import Filter from '../components/filter/Filter'
import { useLendsqrUser } from '../hooks/useUser'




const dashboard = () => {


  const { lendsqrUserData,
    isLendsqrUserError,
    isLendsqrUserPending,
    lendsqrUserError, } = useLendsqrUser()

  console.log(lendsqrUserData)


  const [showFilter, setShowFilter] = useState(false)

  const router = useRouter();

  const filterHandler = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  }

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


  const getStatusStyles = (status: any) => {
    const baseStyles = {
      padding: '5px 10px',
      borderRadius: '100px',
      // display: 'inline-block',
      width: 'fit-content'
    };

    switch (status) {
      case 'Active':
        return { ...baseStyles, color: 'rgba(57, 205, 98, 1)', backgroundColor: '#EAF9DE' };
      case 'Pending':
        return { ...baseStyles, color: 'rgba(233, 178, 0, 1)', backgroundColor: 'lightyellow' };
      case 'Blacklisted':
        return { ...baseStyles, color: 'rgba(228, 3, 59, 1)', backgroundColor: '#FFFAEB' };
      case 'inactive':
        return { ...baseStyles, color: 'rgba(84, 95, 125, 1)', backgroundColor: 'red' };
      default:
        return baseStyles;
    }
  };



  return (
    <>
      <div className='dashboard_container' >

        <p className='header'>Users</p>


        <div className='card_container' >

          <div className='card'  >

            <Image alt='icon' src={Gender} />
            <p>USERS</p>
            <p>{lendsqrUserData?.data?.summary?.activeUsers}</p>

          </div>
          <div className='card'  >
            <Image alt='icon' src={People} />

            <p>ACTIVE USERS</p>
            <p>{lendsqrUserData?.data?.summary?.totalUsers}</p>


          </div>
          <div className='card'  >
            <Image alt='icon' src={Data} />

            <p>USERS WITH LOANS</p>
            <p>{lendsqrUserData?.data?.summary?.usersWithLoans}</p>


          </div>
          <div className='card'  >
            <Image alt='icon' src={Coins} />
            <p>USERS WITH SAVINGS</p>
            <p>{lendsqrUserData?.data?.summary?.usersWithSavings}</p>


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
                    <Image className='table__filter__icon' onClick={filterHandler} alt='filter' src={filterButton} />
                  </TableCell>
                  {showFilter && <div className='table__filter__wrapper'> <Filter />  </div>}
                  <TableCell sx={{ alignItems: 'center', gap: '10px' }}>USERNAME<Image alt='filter' src={filterButton} /></TableCell>
                  <TableCell>EMAIL<Image alt='filter' src={filterButton} /></TableCell>
                  <TableCell>PHONE NUMBER<Image alt='filter' src={filterButton} /></TableCell>
                  <TableCell>DATE JOINED<Image alt='filter' src={filterButton} /></TableCell>
                  <TableCell>STATUS<Image alt='filter' src={filterButton} /></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lendsqrUserData?.data?.users.map((row: any) => (

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
                    <TableCell

                    >
                      <div style={getStatusStyles(row.status)}  >
                        {row.status}

                      </div>

                    </TableCell>
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
