import { Stack } from "@mui/material";
import "./SlidingBar.css";

const SlidingBar = ({ title, id, onClick }) => {
  return (
    <Stack className="category-container">
      <button className="category-title" onClick={onClick}>
        {title}
      </button>
    </Stack>
  );
};

export default SlidingBar;
