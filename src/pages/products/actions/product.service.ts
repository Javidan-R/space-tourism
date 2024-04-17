import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import { Product } from '../products';

export const getProductCardService = () => {
  return axiosInstance.get(API.products).then((res) => {
    return res.data.record as Product[];
  });
};
