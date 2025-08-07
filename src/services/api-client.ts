import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "a75db37c36a64e4fb0777ad91de3fa57",
  },
});
