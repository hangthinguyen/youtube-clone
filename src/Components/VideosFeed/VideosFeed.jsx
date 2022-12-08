import { useState, useCallback, useEffect } from "react";
import youtubeAPI from "../../api/YoutubeAPI";
import API_KEY from "../../api/env";
import "./VideosFeed.css";

const VideosFeed = ({ id }) => {
  const [videos, setVideos] = useState([]);

  // const videosData = await youtubeAPI.get(`/videos?part=snippet%2CcontentDetails&chart=mostPopular&videoCategoryId=${id}&maxResults=25&key=${API_KEY}`)

  const fetchVideos = useCallback(async () => {
    try {
      const videosData = await youtubeAPI.get("/videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          videoCategoryId: id,
          maxResults: "25",
          key: API_KEY,
        },
      });
      console.log(videosData);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return <div>VideosFeed</div>;
};

export default VideosFeed;
