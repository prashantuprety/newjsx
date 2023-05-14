import React from 'react'
import{useState,useEffect} from 'react'
import{Box,Stack,Typography} from '@mui/material'

import {fetchFromAPI} from '../utils/fetchFromapi'

import {Sidebar, Videos } from './'

const Feed = () => {
const[selectedcategory, setselectedcategory]= useState('New')

useEffect(()=>{  
 fetchFromAPI(`search?part=snippet&q=${selectedcategory}`)
},[selectedcategory])

return(
  <Stack sx={{ flexDirection:{sx:"column", md: "row"}  }}>
  <Box sx={{ height: {sx:"auto", md: "92vh" } , borderRight: "1px solid #3d3d3d", px: 2 }}>
   <Sidebar
   selectedcategory={selectedcategory}
   setselectedcategory={setselectedcategory}
   />
   <Typography className='Copyright' variant="body2" sx={{mt:1.5,color:'#fff'}}>
    copyright 2023 prashant uprety

   </Typography>

  </Box>

  <Box p={2} sx ={{overflowY:'auto',height:'90vh',flex:2}}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
      {selectedcategory}
      <span style={{color:'#F31503' }}>
        Videos
      </span>
    </Typography>
    <Videos videos={[]}/>
  </Box>
 </Stack>

)
}

export default Feed