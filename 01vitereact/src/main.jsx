import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const newContainer = (
  <a href="https://google.com" target='_blank'>Click me </a>
)

const customContainer = React.createElement(
  'a',
  {href: 'http://google.com',target: '_blank'},
  'click to go to google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  customContainer
)
