import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import Header from './componnent/header'
import Footer from './componnent/Footer'

// import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header/>
    <App />
    
    </ChakraProvider>
  </React.StrictMode>,
)
