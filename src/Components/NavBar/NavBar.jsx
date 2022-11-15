import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';
import SearchNavBar from '../SearchNavBar/SearchNavBar';
import './NavBar.css';

const NavBar = ({ onClick }) => {
  return (
    <div className='navbar'>
        <LeftNavBar onClick={onClick} />
        <SearchNavBar />
        <RightNavBar />
    </div>
  )
}

export default NavBar