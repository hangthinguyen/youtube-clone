import { Stack , Box} from '@mui/material';
import './Feed.css';

const Feed = () => {
  return (
    <Stack
      className='feed-container'
      flexGrow={{ sm: 1, md: 5}}
    >
      <Box>
        Feed
      </Box>
    </Stack>
  )
}

export default Feed