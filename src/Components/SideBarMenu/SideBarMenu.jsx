import './SideBarMenu.css';

const SideBarMenu = ({ isdraweropen }) => {
  return (
    <div
        style={{
            display: isdraweropen ? 'flex' : 'none'
        }}
    >
        SideBarMenu
    </div>
  )
}

export default SideBarMenu