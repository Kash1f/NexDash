import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
<<<<<<< HEAD
=======
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()
>>>>>>> 30e2c792954626630d78d2ed54ab436fc92f72ec

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
