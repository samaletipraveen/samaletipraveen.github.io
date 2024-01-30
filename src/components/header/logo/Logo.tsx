import { Flex, theme } from 'antd';
import './Logo.css';

const Logo: React.FC = () => {
    const { useToken } = theme
    const { token } = useToken()
    return (
        <Flex justify="center" vertical={true} className='logo'>
            <Flex gap="middle">
                <div style={{ lineHeight: '12px', color: "white"}}>PRAVEEN</div>
                <div style={{ lineHeight: '12px', color: "white" }}>SAMALETI</div>
            </Flex>
            <p style={{ backgroundColor: token.colorBgBlur, lineHeight: '12px', color: "white" }}>FULL STACK DEVELOPER</p>
        </Flex>
    )
}

export default Logo