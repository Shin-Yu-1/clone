import axios from 'axios';

import { BASE_URL, API_KEY_VALUE } from '@/constant/appConfig';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY_VALUE,
    language: 'ko-KR',
  },
});

export default instance;
