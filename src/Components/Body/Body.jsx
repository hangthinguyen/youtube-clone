import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './Body.css';

const Body = ({ isdraweropen, onClick, sideBarPart1Items}) => {
  return (
    <div className='body'>
        <NavBar onClick={onClick} />
        <MainContent isdraweropen={isdraweropen} sideBarPart1Items={sideBarPart1Items} />
    </div>
  )
}

export default Body