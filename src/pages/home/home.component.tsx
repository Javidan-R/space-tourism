import { useHomeStyles } from './home.style';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;
const HomeComponent = () => {
  const classes = useHomeStyles();
  return (
    <section className={classes.backgorundPage}>
      <div className={classes.contentContainer}>
        <div className={classes.textContainer}>
          <Title className={classes.title} level={4}>
            SO, YOU WANT TO TRAVEL TO
          </Title>
          <Title className={classes.name}>
            SPACE
          </Title>
          <Paragraph  className={classes.paragraph}>
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </Paragraph>
        </div>
      </div>
      <div className={classes.backgroundRight}>
      <div className={classes.imageContainer}>
        <div className={classes.imageText}>EXPLORE</div>
          <div className={classes.explore}></div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
