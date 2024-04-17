import { useQuery } from 'react-query';
import { getHomeAboutService, getHomeVideoService } from './home.service';

export const useGetHomeVideo = () => {
  return useQuery<any, Error>('Partner Company Card', () => {
    return getHomeVideoService();
  });
};

export const useAGomeAbout = () => {
  return useQuery<any[], Error>('About Partners', () => {
    return getHomeAboutService();
  });
};
