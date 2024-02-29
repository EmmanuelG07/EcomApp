import axios from 'axios';
import {BASE_URL} from './apiConfig';

const apiEndponit = BASE_URL;

export const getProductById = async (productId: number) => {
  try {
    const response = await axios.get(`${apiEndponit}/${productId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
