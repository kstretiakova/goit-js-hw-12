import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '46120842-ac048520c916a442959d8cc3a';

async function searchImages(str, page) {
  const params = {
    q: str,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  };
  const { data } = await axios(URL, {
    params,
  });
  return data;
}

export { searchImages };