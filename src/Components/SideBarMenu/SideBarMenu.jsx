
import { Stack } from '@mui/material';
import MiniSideBar from '../MiniSideBar/MiniSideBar';
import SideBarItems from '../SideBarItems/SideBarItems';
import './SideBarMenu.css';

const SideBarMenu = ({ isdraweropen, sideBarItems }) => {
  return (
    <Stack className='side-bar-menu-container'>
        {window.innerWidth > 1200 && !isdraweropen ? <SideBarItems sideBarItems={sideBarItems}/> : <MiniSideBar/> }
    </Stack>
  )
}

export default SideBarMenu