import axios from "axios";

const KEY = "AIzaSyAqvm2tNOQyB8Q_KmxSPVpwFe7Gvgo4ANo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
