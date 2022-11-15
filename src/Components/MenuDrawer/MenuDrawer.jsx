import { Drawer, Box } from '@mui/material';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import SideBarItems from '../SideBarItems/SideBarItems';
import './MenuDrawer.css';

const MenuDrawer = ({ onClick, isdraweropen }) => {
  return (
    <Drawer
      anchor='left'
      variant='temporary'
      open={window.innerWidth < 720 && isdraweropen}
    >
        <Box width='240px' textAlign='center'>
            <LeftNavBar onClick={onClick} />
            <SideBarItems />
            <div>hello</div>
        </Box>
    </Drawer>
  )
}

export default MenuDrawer