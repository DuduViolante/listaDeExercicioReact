import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// {} para importat metodos
// RouterProvider disponibiliza as rotas para o sistema
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aparelhos from './routes/Aparelhos/index.jsx'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
// import VisualizarProdutos from './routes/VisualizarAparelhos/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // endereço url errado    
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/aparelhos',
        element: <Aparelhos/>
      },
      {
        //passar valor para
        path: '/aparelhos/visualizar/:id',
        element: <VisualizarProdutos/>
      },
      // {
      //   // endereco certo porem nao existe mais (nao esta habilitado)
      //   path: '/antiga',
      //   element: <Navigate to='/Home'/>
      // }
    ] 
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
