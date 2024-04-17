import { useQuery } from 'react-query';
import { getProductDetailService } from './product-detailed.service';

export const useGetProductDetail = (productId: string) => {
  return useQuery(['product', productId], () => getProductDetailService(productId));
};
