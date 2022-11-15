import Body from './Components/Body/Body';
import { useCallback, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './App.css';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const [sideBarItems] = useState([
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
    {
      id: Math.random() * 10000,
      icon: <HomeIcon />,
      name: 'Home',
      link: 'https://www.youtube.com/'
    },
  ])

  const handleDrawer = useCallback((e) => {
      setDrawerOpen(!isDrawerOpen)
  }, [isDrawerOpen]);

  return (
    <div className="App">
      <Body isdraweropen={isDrawerOpen} onClick={handleDrawer} sideBarItems={sideBarItems} />
    </div>
  );
}

export default App;
