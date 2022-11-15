import { Stack , Box} from '@mui/material';
import './Feed.css';

const Feed = () => {
  return (
    <Stack
      className='feed-container'
      ml={{ sm: 72, md: 240 }}
    >
      <Box>
        Feed
      </Box>
    </Stack>
  )
}

export default Feed