import { useCallback, useState, useEffect } from "react";
import CategoryTags from "../CategoryTags/CategoryTags";
import requests from "../../api/Requests";
import youtubeAPI from "../../api/YoutubeAPI";
// import SideBarMenu from "../SideBarMenu/SideBarMenu";
import "./MainContent.css";
import VideosFeed from "../VideosFeed/VideosFeed";

const MainContent = ({ isdraweropen, sideBarItems }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [videos, setVideos] = useState([]);

  const fetchVideoCategories = useCallback(async () => {
    try {
      const response = await youtubeAPI.get(requests.fetchVideoCategories);

      const Vcategories = response.data.items;

      const itemsResult = [];

      Vcategories.map((Vcategory) => {
        itemsResult.push({
          id: Vcategory.id,
          channelId: Vcategory.snippet.channelId,
          title: Vcategory.snippet.title,
        });
        return itemsResult;
      });

      setCategories(itemsResult);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchVideosByCategoryId = useCallback(async (categoryId) => {
    try {
      const response = await youtubeAPI.get(requests.fetchVideos, {
        params: {
          videoCategoryId: categoryId,
        },
      });

      const dataV = response.data.items;

      const VideosByCatId = [];
      // const CategoriesId = [];

      dataV.map((video) => {
        VideosByCatId.push({
          catId: video.snippet.categoryId,
          channelTitle: video.snippet.channelTitle,
          vTitle: video.snippet.title,
          thumbnail: video.snippet.thumbnails.medium.url,
        });
        return VideosByCatId;
      });

      // // dataV.map((video) => {
      // //   console.log(video.snippet.categoryId);
      // //   CategoriesId.push({
      // //     catId: video.snippet.categoryId,
      // //   });
      // //   return CategoriesId;
      // // });

      // setSelectedCategoryId(CategoriesId);
      setVideos(VideosByCatId);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchVideoCategories();
  }, [fetchVideoCategories]);

  useEffect(() => {
    fetchVideosByCategoryId(selectedCategoryId);
  }, [fetchVideosByCategoryId, selectedCategoryId]);

  return (
    <div className="main-content-container">
      <CategoryTags
        categories={categories}
        onChange={setSelectedCategoryId}
        selectedCategoryId={selectedCategoryId}
      />
      <VideosFeed videos={videos} />
    </div>
  );
};

export default MainContent;
