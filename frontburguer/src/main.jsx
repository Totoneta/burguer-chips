import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

/* React Router Dom */
import Router from './router/router.jsx'

/* Redux */
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
