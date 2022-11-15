import { Drawer, Box } from '@mui/material';
import { useState } from 'react';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import './MenuDrawer.css';

const MenuDrawer = ({ isDraweropen, setDawerOpen}) => {
  return (
    <Drawer
      anchor='left'
      variant='temporary'
      open={isDraweropen}
      onClose={setDawerOpen}
    >
        <Box width='240px' textAlign='center'>
            <LeftNavBar />
            Sliding Bar
        </Box>
    </Drawer>
  )
}

export default MenuDrawer