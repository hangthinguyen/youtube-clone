import VideoCard from "../VideoCard/VideoCard";
import "./VideosFeed.css";

const VideosFeed = ({ videos }) => {
  // const [videos, setVideos] = useState([]);

  // const fetchVideos = useCallback(async () => {
  //   try {
  //     const videosData = await youtubeAPI.get("/videos", {
  //       params: {
  //         part: "snippet",
  //         chart: "mostPopular",
  //         videoCategoryId: id,
  //         maxResults: "25",
  //         key: API_KEY,
  //       },
  //     });
  //     // console.log(videosData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   fetchVideos();
  // }, [fetchVideos]);

  return (
    <div className="videos-container">
      {videos?.map((video) => (
        <VideoCard
          key={video.key}
          id={video.catId}
          channelTitle={video.channelTitle}
          vTitle={video.vTitle}
          thumbnail={video.thumbnail}
        />
      ))}
    </div>
  );
};

export default VideosFeed;
