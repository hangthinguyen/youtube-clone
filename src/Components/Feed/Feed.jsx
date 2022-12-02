import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Stack , Box } from '@mui/material';
import { useCallback, useState } from 'react';
import SlidingBar from '../SlidingBar/SlidingBar';
import VideosFeed from '../VideosFeed/VideosFeed';
import './Feed.css';
import classNames from 'classnames';

const Feed = ({ isdraweropen }) => {
  const slideNavMenu = useRef(null);

  const [categories] = useState([
    {
      id: Math.random()*1000,
      catName: 'All',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Computer programming',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Live',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Gaming',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Podcasts',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Colleges',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Sales',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Thoughts',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Nursing',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'K-pop',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Soundtracks',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Social Science',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Comedy',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Chill-out Music',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Action-adventure games',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Basketball',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Visual Arts',
      catLink: 'https://www.youtube.com/'
    },
    {
      id: Math.random()*1000,
      catName: 'Calculus',
      catLink: 'https://www.youtube.com/'
    },
  ])

  const [scrolled, setScrolled] = useState(false);

  const handleOnScroll = useCallback((e) => {
    if (window.innerWidth > 86.34) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }, [])

  const handleBackButton = useCallback(() => {
    // const el = document.querySelector('.categories-container');
    // const el2 = document.getElementsByClassName('categories-container');
    const el3 = slideNavMenu.current;

    // console.log('el1', el)
    // console.log('el2', el2)
    // el3.scrollLeft -= 60
    el3.scrollTo({
      left: 0,
      behavior: 'smooth'
    });

    console.log('scrooll',  el3)
  }, [])

  return (
    <Stack
      className='feed-container'
      sx={{
        ml: window.innerWidth > 1200 && !isdraweropen ? 30 : 0
      }}
    >
      <Stack>
        <Box
          className='categories-container'
          onScroll={handleOnScroll}
          ref={slideNavMenu}
        >
          <Box
            className={classNames('left-arrow-container', {scrolled: scrolled})}
          >
              <Box
                className='left-arrow-circle'
                onClick={handleBackButton}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Box>
          </Box>
          {categories.map((category) =>
            <SlidingBar
              id={category.id}
              key={category.id}
              catName={category.catName}
              catLink={category.catLink}
            />)
          }
        </Box>
        <VideosFeed />
      </Stack>
    </Stack>
  )
}

export default Feed