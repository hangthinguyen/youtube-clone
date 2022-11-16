import { Drawer, Box } from '@mui/material';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import SideBarItems from '../SideBarItems/SideBarItems';
import './MenuDrawer.css';

const MenuDrawer = ({ onClick, isdraweropen, sideBarItems }) => {
  return (
    <Drawer
      anchor='left'
      variant='temporary'
      open={window.innerWidth < 1200 && isdraweropen}
    >
        <Box width='240px' textAlign='center'>
            <LeftNavBar onClick={onClick} />
            <SideBarItems sideBarItems={sideBarItems}/>
        </Box>
    </Drawer>
  )
}

export default MenuDrawer