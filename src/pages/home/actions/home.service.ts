import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
export const getHomeVideoService = (): Promise<any[]> => {
  return axiosInstance.get(API.video).then((res: { data: any }) => {
    return res.data.record;
  });
};
export const getHomeAboutService = (): Promise<any[]> => {
  return axiosInstance.get(API.leads).then((res: { data: any }) => {
    return res.data.record;
  });
};
