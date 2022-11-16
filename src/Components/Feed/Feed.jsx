import { Stack , Box} from '@mui/material';
import './Feed.css';

const Feed = ({ isdraweropen }) => {
  return (
    <Stack
      className='feed-container'
      sx={{
        ml: window.innerWidth > 1200 && !isdraweropen ? 30 : 0
      }}
    >
      <Box>
        Feed
      </Box>
    </Stack>
  )
}

export default Feed