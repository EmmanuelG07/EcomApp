import axios from 'axios';
import {BASE_URL} from './apiConfig';

const apiEndponit = BASE_URL;

export const getAllProduct = async () => {
  try {
    const response = await axios.get(apiEndponit);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
