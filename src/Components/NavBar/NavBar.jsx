import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';
import SearchNavBar from '../SearchNavBar/SearchNavBar';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
        <LeftNavBar />
        <SearchNavBar />
        <RightNavBar />
    </div>
  )
}

export default NavBar