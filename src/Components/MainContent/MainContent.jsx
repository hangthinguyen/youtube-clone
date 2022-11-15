import Feed from '../Feed/Feed';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import './MainContent.css';

const MainContent = ({ isdraweropen, sideBarPart1Items }) => {
  return (
    <div className='main-content-container'>
        <SideBarMenu isdraweropen={isdraweropen} sideBarPart1Items={sideBarPart1Items} />
        <Feed />
    </div>
  )
}

export default MainContent