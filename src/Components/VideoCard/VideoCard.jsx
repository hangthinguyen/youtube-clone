import { Card, Box } from "@mui/material";
import React from "react";

const VideoCard = ({ id, channelTitle, vTitle, thumbnail }) => {
  return (
    <Card className="video-card-container" id={id}>
      <img src={thumbnail} className="video-card-img" alt="thumbnail" />
      <Box>{channelTitle}</Box>
      <Box>{vTitle}</Box>
    </Card>
  );
};

export default VideoCard;
