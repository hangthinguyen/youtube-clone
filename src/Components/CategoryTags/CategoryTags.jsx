import { useRef, useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Stack, Box } from "@mui/material";
import SlidingBar from "../SlidingBar/SlidingBar";
import "./CategoryTags.css";
import classNames from "classnames";

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

const CategoryTags = ({ categories, onChange }) => {
  const slideNavMenu = useRef(null);

  // const [categories, setCategories] = useState([]);

  const [slideMenuScrollLeft, setSlideMenuScrollLeft] = useState(0);

  const handleOnScroll = useCallback(() => {
    setSlideMenuScrollLeft(slideNavMenu.current.scrollLeft);
    // setSlideMenuScrollLeft(document.querySelector('.categories-container').scrollLeft)
  }, []);

  const handleBackButton = useCallback(() => {
    // const el = document.querySelector('.categories-container');
    // const el2 = document.getElementsByClassName('categories-container');
    const el3 = slideNavMenu.current;

    // console.log('el1', el)
    // console.log('el2', el2)
    // el3.scrollLeft -= 60
    el3.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const isScrolledAwayFromLeft = slideMenuScrollLeft > 0;

  return (
    <Stack className="feed-container">
      <Box
        className="categories-container"
        onScroll={handleOnScroll}
        ref={slideNavMenu}
      >
        <Box
          className={classNames("left-arrow-container", {
            scrolled: isScrolledAwayFromLeft,
          })}
        >
          <Box className="left-arrow-circle" onClick={handleBackButton}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Box>
        </Box>
        {categories?.map((category) => (
          <SlidingBar
            onClick={() => onChange(category.id)}
            id={category.id}
            key={category.id}
            title={category.title}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default CategoryTags;
