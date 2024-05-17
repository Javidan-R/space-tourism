import { Typography, Col, Row } from 'antd';
import { FC } from 'react';
import { useDestinationStyles } from './destionation.style';
const { Title } = Typography;
const DestinationComponent: FC = () => {
  const classes = useDestinationStyles();
  return (
    <section className={classes.destinationBackground}>
      <div className={classes.destinationContainer}>
        <Row align='middle' gutter={[16, 16]}>
          <Col>
            <Title style={{ marginRight: '10px' }}>01</Title>
          </Col>
          <Col>
            <Title level={2}>Pick your destination</Title>
          </Col>
        </Row>
      <DestinationComponent/>
      </div>
    </section>
  );
};

export default DestinationComponent;
