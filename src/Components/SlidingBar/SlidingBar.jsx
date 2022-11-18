import { Link, Box } from '@mui/material';
import './SlidingBar.css';

const SlidingBar = ({ catName, catLink }) => {
  return (
    <Box className='category-container'>
        <Link href={catLink} className='category-title'>
            {catName}
        </Link>
    </Box>
  )
}

export default SlidingBar