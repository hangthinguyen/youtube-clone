import Body from './Components/Body/Body';
import { useCallback, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './App.css';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const [items, setItems] = useState([
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home'
    },
  ])

  const handleDrawer = useCallback(() => {
    setDrawerOpen(!isDrawerOpen)
    console.log(!isDrawerOpen)
  }, [isDrawerOpen]);

  return (
    <div className="App">
      <Body isdraweropen={isDrawerOpen} onClick={handleDrawer} />
    </div>
  );
}

export default App;
