import { Row, Col, Typography, Button } from 'antd';
import React from 'react';
import HexGrid from '../hex-grid/HexGrid';
import { useInView } from "react-intersection-observer";

const { Title } = Typography;

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.25, // Adjust threshold as needed
      });
    return (
        <div style={{height: '90vh',width:'100%'}} >
            <Row gutter={[32,32]} align={"middle"} style={{height: '100%'}} ref={ref}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{width: '100%'}}>
                    <Title level={3}>HI, I AM PRAVEEN & I AM A</Title>
                    <Title>FULL STACK DEVELOPER</Title>
                    <Title level={5}>I am a Software Developer at CITCO. I have 10 years of experience 
                        in Application Development. I am currently focussed on learning new technologies 
                        which can help in building scalable products</Title>
                    <Button size='large'>Default Button</Button>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{width: '100%'}}>
                    <div ref={ref}><HexGrid inView={inView}/></div>
                </Col>
            </Row>
        </div>
    )
}

export default About