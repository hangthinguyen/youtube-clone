import { useCallback, useState, useEffect } from "react";
import CategoryTags from "../CategoryTags/CategoryTags";
import requests from "../../api/Requests";
import youtubeAPI from "../../api/YoutubeAPI";
import VideosFeed from "../VideosFeed/VideosFeed";
// import SideBarMenu from "../SideBarMenu/SideBarMenu";
import "./MainContent.css";

const MainContent = ({ isdraweropen, sideBarItems }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

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

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchVideoCategories();
  }, [fetchVideoCategories]);

  useEffect(() => {
    fetchVideosByCategoryId(selectedCategoryId);
  }, [selectedCategoryId, fetchVideosByCategoryId]);

  return (
    <div className="main-content-container">
      <CategoryTags categories={categories} onChange={setSelectedCategoryId} />
    </div>
  );
};

export default MainContent;
