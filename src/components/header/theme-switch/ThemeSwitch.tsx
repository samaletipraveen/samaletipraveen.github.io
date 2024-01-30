import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import './ThemeSwicth.css'
import { SunIcon } from '../../../assets/icons/SunIcon';
import { MoonIcon } from '../../../assets/icons/MoonIcon';

type ThemeSwitchProps = {
    isDarkMode: boolean;
    setIsDarkMode: any
}

const ThemeSwitch = ({isDarkMode, setIsDarkMode}: ThemeSwitchProps) => {
    function handleClick(checked: boolean){
        setIsDarkMode(checked)
    }
    return (
        <Switch
            checkedChildren={<SunIcon />}
            unCheckedChildren={<MoonIcon />}
            value={isDarkMode}
            onClick={handleClick}
            className='theme-swicth'
        />
    )
};

export default ThemeSwitch;