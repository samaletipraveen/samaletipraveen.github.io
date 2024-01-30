import React from 'react';
import { Layout, theme } from 'antd';
import DummyContent from '../components/dummy/DummyContent';
import useScrollDirection from '../hooks/useScrollDirection';
import NavBar from '../components/header/navbar/NavBar';
import './AppLayout.css';
import About from '../components/about/About';

const { Header, Content, Footer } = Layout;

type AppLayoutProps = {
  isDarkMode: boolean;
  setIsDarkMode: any
}

const AppLayout: React.FC<AppLayoutProps> = ({isDarkMode, setIsDarkMode}) => {
  const { useToken } = theme
  const { token } = useToken()
  
  const scrollDirection = useScrollDirection();

  return (
    <Layout>
      <Header
        className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
      >
        <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      </Header>
      <Content style={{ padding: '0 200px', width: '100%', color: token.colorTextBase }}>
        <About/>
        <div style={{height: '500vh'}}></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Developed by Praveen Samaleti in ReactJs & Antd ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default AppLayout;