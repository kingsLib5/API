import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Api from './Api'
import Napi from './Napi'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Api /> */}
    <Napi />
  </StrictMode>,
)
