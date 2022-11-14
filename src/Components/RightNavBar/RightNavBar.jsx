import { HiOutlineDotsVertical } from 'react-icons/hi';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import './RightNavBar.css';

const RightNavBar = () => {
  return (
    <div className='right-nav-bar'>
        <HiOutlineDotsVertical className='settings'/>
        <button className='sign-in-btn'>
            <HiOutlineUserCircle className='user-icon'/>
            <h3 className='sign-in-text'>Sign In</h3>
        </button>
    </div>
  )
}

export default RightNavBar