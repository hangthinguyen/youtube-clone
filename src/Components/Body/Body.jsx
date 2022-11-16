import MainContent from '../MainContent/MainContent';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import NavBar from '../NavBar/NavBar';
import './Body.css';

const Body = ({ isdraweropen, onClick, sideBarItems }) => {
  return (
    <div className='body'>
        <NavBar onClick={onClick} />
        <MainContent isdraweropen={isdraweropen} sideBarItems={sideBarItems} />
        <MenuDrawer isdraweropen={isdraweropen} onClick={onClick} sideBarItems={sideBarItems}/>
    </div>
  )
}

export default Body