
import SideBarPart1 from '../SideBarPart1/SideBarPart1';
import './SideBarMenu.css';

const SideBarMenu = ({ isdraweropen, sideBarPart1Items }) => {
  return (
    <div
        className='side-bar-menu-container'
        style={{
            display: isdraweropen ? 'flex' : 'none'
        }}
    >
        <SideBarPart1 sideBarPart1Items={sideBarPart1Items}/>
    </div>
  )
}

export default SideBarMenu