import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { SidebarToggle } from './context/sidebar_context.tsx'
import { TextProvider } from './context/title_context.tsx'

// import { Provider } from 'react-redux'
// import { store } from './store.ts'

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SidebarToggle>
        <TextProvider>
          <App />
        </TextProvider>
      </SidebarToggle>
    </BrowserRouter>
  </QueryClientProvider>
)
