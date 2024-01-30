import Logo from "../logo/Logo";
import ThemeSwitch from "../theme-switch/ThemeSwitch"
import { Flex, theme } from 'antd';

type NavBarProps = {
    isDarkMode: boolean
    setIsDarkMode: any
}

const NavBar: React.FC<NavBarProps> = ({ isDarkMode, setIsDarkMode }) => {
    const { useToken } = theme
    const { token } = useToken()
    return (
        <>
            <Flex align="center" justify="space-between">
                <Logo />
                <Flex gap={"middle"} style={{ color: "white" }}>
                    <div>Skills</div>
                    <div>Experience</div>
                    <div>Projects</div>
                    <div>Resume</div>
                    <div>Contact</div>
                    <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar