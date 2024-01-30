import { useState } from 'react'
import './App.css'
import { ConfigProvider, theme } from 'antd'
import AppLayout from './layout/AppLayout'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const { defaultAlgorithm, darkAlgorithm } = theme

  return (
    <ConfigProvider theme={{ 
      token: {
        "colorPrimary": "#334250",
        "colorInfo": "#334250"
      },
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
    }}>
      <AppLayout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </ConfigProvider>
  )
}

export default App
