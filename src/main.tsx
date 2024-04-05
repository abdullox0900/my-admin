import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { TextProvider } from './context/title_context.tsx'

import { Provider } from 'react-redux'
import { store } from './store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <TextProvider>
        <App />
      </TextProvider>
    </Provider>
  </BrowserRouter>
)
