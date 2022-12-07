import { Stack, Box } from '@mui/material';
import './SlidingBar.css';

const SlidingBar = ({ title }) => {
  return (
    <Stack className='category-container'>
        <Box className='category-title'>
            {title}
        </Box>
    </Stack>
  )
}

export default SlidingBar