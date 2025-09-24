import React from 'react'
import { createRoot } from 'react-dom/client'
import { LandingApp } from './LandingApp'
import './styles.css'

const el = document.getElementById('root')!
createRoot(el).render(
  <React.StrictMode>
    <LandingApp />
  </React.StrictMode>
)