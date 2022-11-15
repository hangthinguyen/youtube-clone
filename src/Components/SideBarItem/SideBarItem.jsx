import './SideBarItem.css';

const SideBarItem = ({ icon, name, link }) => {
  return (
    <a href={link} className='side-bar-item-container'>
        {icon}
        {name}
    </a>
  )
}

export default SideBarItem