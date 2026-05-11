import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Content from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Content />
  </StrictMode>,
)
