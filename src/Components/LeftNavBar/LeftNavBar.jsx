import { FaYoutube } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import './LeftNavBar.css';

const LeftNavBar = ({ onClick }) => {
  return (
    <div className='left-nav-bar-container'>
        <div
          className='menu-bar-container'
          onClick={onClick}
        >
            <HiMenu className='menu-bar'/>
        </div>
        <a href='https://www.youtube.com/' className='youtube-icon-container'>
            <FaYoutube className='youtube-icon-1'/>
            <h2 className='youtube-icon-2'>YouTube</h2>
        </a>
    </div>
  )
}

export default LeftNavBar