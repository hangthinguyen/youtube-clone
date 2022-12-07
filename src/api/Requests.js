import API_KEY from "./env";

const requests = {
    fetchChannels: `/channels?part=contentDetails&key=${API_KEY}`,
    fetchVideoCategories: `/videoCategories?part=snippet&regionCode=US&key=${API_KEY}`,
    fetchVideos: `/videos?part=snippet%2CcontentDetails&chart=mostPopular&maxResults=25&key=${API_KEY}`,
}

export default requests

//baseURL: https://www.googleapis.com/youtube/v3
//baseURL/endpoint?parameter=?key={API_KEY}

//async function getUser() {
    // try {
    //     const response = await axios.get('/user', {
    // params: {
    //     ID: 12345
    //   }
    // });
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }