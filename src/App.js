import Body from './Components/Body/Body';
import { useCallback, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './App.css';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const [sideBarPart1Items] = useState([
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

  const handleDrawer = useCallback(() => {
    setDrawerOpen(!isDrawerOpen)
  }, [isDrawerOpen]);

  return (
    <div className="App">
      <Body isdraweropen={isDrawerOpen} onClick={handleDrawer} sideBarPart1Items={sideBarPart1Items} />
    </div>
  );
}

export default App;
