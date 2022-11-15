import Feed from '../Feed/Feed';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import './MainContent.css';

const MainContent = ({ isdraweropen, sideBarItems }) => {
  return (
    <div className='main-content-container'>
        <SideBarMenu isdraweropen={isdraweropen} sideBarItems={sideBarItems} />
        <Feed />
    </div>
  )
}

export default MainContent