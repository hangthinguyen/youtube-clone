import { Stack } from '@mui/material';
import VideosFeed from '../VideosFeed/VideosFeed';
import './SlidingBar.css';

const SlidingBar = ({ title, id }) => {
  return (
    <Stack>
      <Stack className='category-container'>
        <button
          className='category-title'
        >
            {title}
        </button>
      </Stack>
      <VideosFeed id={id}/>
    </Stack>
  )
}

export default SlidingBar