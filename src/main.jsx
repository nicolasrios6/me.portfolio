import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme} from '@chakra-ui/react'

const colors = {
  primary: '#9F7AEA',
  bg: '#1A202C',
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  xxl: '1536px',
}

const config ={
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ colors, breakpoints, config })

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
