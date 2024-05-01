import { useHomeStyles } from './home.style';
const HomeComponent = () => {
  const classes = useHomeStyles();
  return (
    <section  className={classes.backgorundPage}>
      <div className={classes.backgroundRight}>

      </div>

    </section>
  );
};

export default HomeComponent;