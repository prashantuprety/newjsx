import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const Searchbar = () => {
  return (
  <Paper
  component="form"
  onSubmit={()=>{}}
  sx={{
    boderRadius:20,
    border: '1px solid #e3e3e3',
    p1:2,
    boxShadow: 'none',
    mr: { sm: 5}

  }}
  >
    <input
    className="search-bar"
    placeholder='Search...'
    value=""
    onChange={()=>{}}
    />
    <IconButton
    type='submit' sx ={{p:'10px',color:'red'}}
    >
    <Search/>
    </IconButton>

  </Paper>
    
  )
}

export default Searchbar