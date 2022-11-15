import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiUserCircle } from 'react-icons/bi'
import './RightNavBar.css';

const RightNavBar = () => {
  return (
    <div className='right-nav-bar'>
        <HiOutlineDotsVertical className='settings'/>
        <button className='sign-in-btn'>
            <BiUserCircle className='user-icon'/>
            <h3 className='sign-in-text'>Sign In</h3>
        </button>
    </div>
  )
}

export default RightNavBar