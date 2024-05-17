import { FC } from 'react';
import { useDestinationStyles } from './destionation.style';
const DestinationComponent: FC = () => {
  const classes = useDestinationStyles();
  return (
    <section className={classes.destinationBackground}>
      <div className={classes.destinationContainer}>

      </div>
    </section>
  );
};

export default DestinationComponent;
