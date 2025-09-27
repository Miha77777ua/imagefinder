import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api"

const getPics = async (keyword, changeLoadingValue) => {
  try {
    changeLoadingValue();
    const response = await axios.get(`/?q=${keyword}&page=1&key=${import.meta.env.VITE_API_KEY}&image_type=photo&orientation=horizontal&per_page=15`);
    return response.data.hits.map(el => ({ id: el.id, webformatURL: el.webformatURL, largeImageURL: el.largeImageURL }));
  } finally {
    changeLoadingValue();
  }
}

const loadNewPage = async (keyword, pics, page, changeLoadingValue) => {
  try {
    changeLoadingValue();
    const response = await axios.get(`/?q=${keyword}&page=${page}&key=${import.meta.env.VITE_API_KEY}&image_type=photo&orientation=horizontal&per_page=15`);
    return [...pics, ...response.data.hits.map(el => ({ id: el.id, webformatURL: el.webformatURL, largeImageURL: el.largeImageURL }))];
  } finally {
    changeLoadingValue();
  }
}

export default {
  getPics,
  loadNewPage,
};
