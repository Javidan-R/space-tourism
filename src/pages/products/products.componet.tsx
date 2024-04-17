import { AboutHeading } from 'core/shared/about-heading/about-heading.component';
import ProductCard from 'core/shared/product-card/product-card.component';
import { useGetProduct } from './actions/product.query';

const ProductsComponent: React.FC = () => {
  const { data, isLoading, isError } = useGetProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products</div>;
  }
  console.log(data);
  return (
    <div>
      <AboutHeading
        heading={'Title for about us or Lorem Ipsum motto'}
        title={'Lectus mauris pulvinar sit?'}
        desc={
          'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. '
        }
      />
      {/* Products Cards */}
      <div>
        { data && data.map((product) => (
          <ProductCard key={product.about.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
