import Feed from '../Feed/Feed';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import './MainContent.css';

const MainContent = ({ isdraweropen }) => {
  return (
    <div>
        <SideBarMenu isdraweropen={isdraweropen} />
        <Feed />
    </div>
  )
}

export default MainContent