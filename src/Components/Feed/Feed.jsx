import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Stack , Box } from '@mui/material';
import { useState } from 'react';
import SlidingBar from '../SlidingBar/SlidingBar';
import VideosFeed from '../VideosFeed/VideosFeed';
import './Feed.css';

const Feed = ({ isdraweropen }) => {
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
  ])

  return (
    <Stack
      className='feed-container'
      sx={{
        ml: window.innerWidth > 1200 && !isdraweropen ? 30 : 0
      }}
    >
      <Stack>
        <Box className='categories-container'>
          <Box className='left-arrow-container'>
            <FontAwesomeIcon icon={faChevronLeft} />
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