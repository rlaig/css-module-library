import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from "./App"
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
