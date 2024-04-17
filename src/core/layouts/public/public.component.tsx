import HeaderComponent from './components/header/header.component';
import { Outlet } from 'react-router-dom';
import FooterComponent from './components/footer/footer.component';
import { usePublicLayoutStyles } from './public.style';
import classNames from 'classnames';

const PublicComponent = () => {
  const classes = usePublicLayoutStyles();
  const publicClasses = classNames({
    [classes.content]: true,
  });
  return (
    <>
    <div className={publicClasses}>
      <HeaderComponent />
      
        <Outlet />
      </div>
    <FooterComponent />
      </>
  );
};

export default PublicComponent;
