import { useQuery } from 'react-query';
import { getProductCardService  } from './product.service';
import { Product } from '../products';

export const useGetProduct = () => {
  return useQuery<Product[], Error>('Partner Company Card', () => {
    return getProductCardService();
  });
};

