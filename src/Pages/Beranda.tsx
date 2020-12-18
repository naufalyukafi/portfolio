import React from 'react';
import { Layout, Menu, Typography, Row, Col, Drawer, Button, Anchor } from 'antd';
import { AlignRightOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';
function App() {
    const [visible, setVisible] = React.useState(false);
    const handleVisible = React.useCallback(() => {
        setVisible(prev => !prev)
    }, [])

    return (
        <Layout className="layout" style={{ height: '100vh' }}>
            <Layout.Header style={{ backgroundColor: '#fff' }}>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Typography.Title level={4} style={{ fontWeight: "bold" }}>Yukafi<span style={{ color: 'blueviolet' }}>.Dev</span></Typography.Title>
                    </Col>
                    <Col className="mobileHidden">
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><Link to="/">Beranda</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/sertifikat">Sertifikat</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/portfolio">Portfolio</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/cv">CV</Link></Menu.Item>
                            <Menu.Item key="5"><a href="https://majangstories.blogspot.com">Blog</a></Menu.Item>
                        </Menu>
                    </Col>
                    <Col className="mobileVisible">
                        <Button onClick={handleVisible}>
                            <AlignRightOutlined />
                        </Button>
                        <Drawer
                            placement="right"
                            closable={false}
                            onClose={handleVisible}
                            visible={visible}
                        >
                            <Link to="/">Beranda</Link><br /> <br />
                            <Link to="/sertifikat">Sertifikat</Link> <br /> <br />
                            <Link to="/portfolio">Portfolio</Link> <br /> <br />
                            <Link to="/cv">CV</Link> <br /><br />
                            <a href="https://majangstories.blogspot.com">Blog</a>
                        </Drawer>
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content className="background-content" style={{ padding: '20px 50px', backgroundColor: 'blueviolet' }}>
                <div>
                    <Particles className="particles"
                        params={{
                            particles: {
                                line_linked: {
                                    shadow: {
                                        enable: true,
                                        color: "#3CA9D1",
                                        blur: 5
                                    }
                                }
                            }

                        }}
                    />
                    <div className="box__about">
                        <img src="/img/foto.jpg" alt="myfoto" className="box__image" />
                        <Typography.Title level={1} style={{ color: '#fff' }}>Naufal Yukafi Ridlo</Typography.Title>
                        <Typography.Title level={3} style={{ color: '#fff' }}>Enthusiast Javascript</Typography.Title>
                        <Row gutter={[16, 16]} justify="center" style={{ marginTop: 10 }}>
                            <Col>
                                <FacebookOutlined style={{ fontSize: '30px' }} />

                            </Col>
                            <Col><InstagramOutlined style={{ fontSize: '30px' }} /></Col>
                            <Col><LinkedinOutlined style={{ fontSize: '30px' }} /></Col>
                            <Col><GithubOutlined style={{ fontSize: '30px' }} /></Col>
                        </Row>
                    </div>
                </div>
            </Layout.Content>
        </Layout>
    );
}

export default App;
