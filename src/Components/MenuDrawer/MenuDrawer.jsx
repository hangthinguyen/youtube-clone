import { Drawer, Box } from '@mui/material';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import './MenuDrawer.css';

const MenuDrawer = ({ onClick, isdraweropen }) => {
  return (
    <Drawer
      anchor='left'
      variant='temporary'
      open={isdraweropen}
    >
        <Box width='240px' textAlign='center'>
            <LeftNavBar onClick={onClick} />
            <SideBarMenu />
        </Box>
    </Drawer>
  )
}

export default MenuDrawer