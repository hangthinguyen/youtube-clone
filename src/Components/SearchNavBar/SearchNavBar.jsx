import { IoIosSearch } from 'react-icons/io';
import { HiMicrophone } from 'react-icons/hi';
import './SearchNavBar.css';

const SearchNavBar = () => {
  return (
    <div className='search-nav-container'>

      <div className='search-box-container'>
        <form action="submit" className='search-form'>
          <input type="text" className='search-input' placeholder='Search'/>
        </form>
        <button className='search-icon-btn'>
          <IoIosSearch className='search-icon'/>
        </button>
      </div>

        <div className='microphone-icon-container'>
          <HiMicrophone className='microphone-icon'/>
        </div>

    </div>
  )
}

export default SearchNavBar