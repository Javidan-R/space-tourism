import { useParams } from 'react-router-dom';
import vector from '../../assets/images/statics/Vector.svg';
import { useGetProduct } from 'pages/products/actions/product.query';
import { Product } from 'pages/products/products';
import { ProductDetailedStyles } from './product-detailed.style';

// SVG components
import { Wallet, Calendar, LoanDownPayment, LoanInterestRate, CommissionFee } from '../../assets/images/icons/products';

const ProductDetailedComponent: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: products, isLoading, isError } = useGetProduct();
  const classes = ProductDetailedStyles();

  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }

  if (isError || !products) {
    return <div className={classes.error}>Error fetching product details</div>;
  }

  const product: Product | undefined = products.find((item: Product) => item.about.id.toString() === productId);

  if (!product) {
    return <div className={classes.error}>Product not found</div>;
  }

  return (
    <section>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h2 className={classes.productName}>
            Title for Products or Daşınmaz Əmlak krediti
          </h2>
        </div>
        <div className="col-md-6 col-sm-12 ">
          <img src={vector} alt="" className={classes.productImage} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className={classes.aboutLoan}>Kredit Haqqında</h4>
        </div>
        <div className="col-md-6 col-sm-12">
        <h3 className={classes.productTitle}>{product.about.title}</h3>
        </div>
        <div className="col-md-6 col-sm-12">
          <h3>{product.about.description}</h3>
        </div>
      </div>
      <div className="row py-50">
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="productCard">
            <div>
              <LoanDownPayment />
            </div>
            <div>Kreditin Məbləği</div>
            <div>{product.features.amount}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailedComponent;
