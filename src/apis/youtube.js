import axios from "axios";

//google api secret key
const KEY = "AIzaSyAqvm2tNOQyB8Q_****************";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
