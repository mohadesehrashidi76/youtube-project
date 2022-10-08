import axios from 'axios'


const KEY = "AIzaSyBMAepA4OZilYT04t0SeVk8vnvV9Z5HgvI"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});