import SideBarItem from '../SideBarItem/SideBarItem';
import './SideBarPart1.css';

const SideBarPart1 = ({ sideBarPart1Items }) => {
  return (
    <div className='side-bar-each-section-wrapper'>
        {sideBarPart1Items.map((sideBarPart1Item) =>
          <SideBarItem
            icon={sideBarPart1Item.icon}
            name={sideBarPart1Item.name} key={sideBarPart1Item.id} id={sideBarPart1Item.id} link={sideBarPart1Item.link}
          />
        )}
    </div>
  )
}

export default SideBarPart1