import { FaYoutube } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import './LeftNavBar.css';

const LeftNavBar = () => {
  return (
    <div className='left-nav-bar-container'>
        <div className='menu-bar-container'>
            <HiMenu className='menu-bar'/>
        </div>
        <div className='youtube-icon-container'>
            <FaYoutube className='youtube-icon-1'/>
            <h2 className='youtube-icon-2'>YouTube</h2>
        </div>
    </div>
  )
}

export default LeftNavBar