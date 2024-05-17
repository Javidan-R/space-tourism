import { useDestinationAccordionStyles } from './destination-accordion.style';
import { Flex, Divider, Row, Col, Typography } from 'antd';
import moon from 'assets/images/statics/moon.svg';
const { Title, Paragraph } = Typography;

const DestinationAccordion = () => {
    const classes = useDestinationAccordionStyles();
    return (
        <Flex align='top' gap={60} className={classes.contentContainer}>
            <div className={classes.imageContainer}>
                <img src={moon} alt='' className={classes.image} />
            </div>
            <div>
                <Title>MOON</Title>
                <Paragraph>
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </Paragraph>
                <Divider />
                <div className={classes.distanceContainer}>
                    <Row justify='space-between' gutter={[16, 16]}>
                        <Col>
                            <Title level={4}>AVG. DISTANCE</Title>
                            <Title level={3}>384,000 KM</Title>
                        </Col>
                        <Col>
                            <Title level={4}>Est. travel time</Title>
                            <Title level={3}>3 DAYS</Title>
                        </Col>
                    </Row>
                </div>
            </div>
        </Flex>
    );
};
export default DestinationAccordion;