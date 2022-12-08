import { useRef, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Stack , Box } from '@mui/material';
import SlidingBar from '../SlidingBar/SlidingBar';
import VideosFeed from '../VideosFeed/VideosFeed';
import './Feed.css';
import classNames from 'classnames';
import requests from '../../api/Requests';
import youtubeAPI from '../../api/YoutubeAPI';
import { useEffect } from 'react';

// i want to show a caret when my horizontal list is scrolled

// how do i know when my horizonal list is scrolled?
  // javascript dom api allows u to get how many px from left the element is scrolled
  // if scrollLeft > 0

// how do i get/store this value?
  // useRef to get
  // useState to store

// how do i update this value?
 // set state on elemement scroll

// how do i run code when an element scrolls?
  // react onScroll listener with a useCallback function

const Feed = ({ isdraweropen }) => {
  const slideNavMenu = useRef(null);


  const [categories, setCategories] = useState([])

  const [slideMenuScrollLeft, setSlideMenuScrollLeft] = useState(0);


  const handleOnScroll = useCallback(() => {
    setSlideMenuScrollLeft(slideNavMenu.current.scrollLeft)
    // setSlideMenuScrollLeft(document.querySelector('.categories-container').scrollLeft)
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
  }, [])

  const isScrolledAwayFromLeft = slideMenuScrollLeft > 0;

  const fetchFromAPI = useCallback(async() => {
    try {
          const response = await youtubeAPI.get(requests.fetchVideoCategories);

          const Vcategories = response.data.items

          const itemsResult = [];

          Vcategories.map((Vcategory) => {
            itemsResult.push(
              {
                id: Vcategory.id,
                channelId: Vcategory.snippet.channelId,
                title: Vcategory.snippet.title
              }
            )
            return itemsResult;
          })

          setCategories(itemsResult)

        } catch (error) {
          console.error(error);
        }
  }, [])

  useEffect(() => {
    fetchFromAPI();
  }, [fetchFromAPI])

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
            className={classNames('left-arrow-container', {scrolled: isScrolledAwayFromLeft})}
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
              title={category.title}
            />)
          }
        </Box>
      </Stack>
    </Stack>
  )
}

export default Feed