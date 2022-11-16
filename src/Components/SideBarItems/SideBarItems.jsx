import SideBarItem from '../SideBarItem/SideBarItem';
import './SideBarItems.css';

const SideBarItems = ({ sideBarItems }) => {
  return (
    <div className='side-bar-wrapper'>
        {sideBarItems?.map((sideBarItem) =>
          <SideBarItem
            icon={sideBarItem.icon}
            name={sideBarItem.name} key={sideBarItem.id} id={sideBarItem.id} link={sideBarItem.link}
          />
        )}
    </div>
  )
}

export default SideBarItems