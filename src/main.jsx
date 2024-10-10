import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from './store/store.js'
import { BrowserRouter } from 'react-router-dom'
import {router} from "./Routes/AppRoutes.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
</StrictMode>,
)
