
import { Stack } from '@mui/material';
import MiniSideBar from '../MiniSideBar/MiniSideBar';
import SideBarPart1 from '../SideBarPart1/SideBarPart1';
import './SideBarMenu.css';

const SideBarMenu = ({ isdraweropen, sideBarPart1Items }) => {
  return (
    <Stack className='side-bar-menu-container'>
        {window.innerWidth > 720 && !isdraweropen ? <SideBarPart1 sideBarPart1Items={sideBarPart1Items}/> : <MiniSideBar/> }
    </Stack>
  )
}

export default SideBarMenu