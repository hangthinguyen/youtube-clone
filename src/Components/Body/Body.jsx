import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './Body.css';

const Body = ({ isdraweropen, onClick}) => {
  return (
    <div className='body'>
        <NavBar onClick={onClick} />
        <MainContent isdraweropen={isdraweropen}/>
    </div>
  )
}

export default Body