import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { store } from './redux/store.js';

import { Provider } from 'react-redux';

import {ToggleThemeProvider} from './contexts/ThemeContext.jsx';
import {LanguageProvider} from './contexts/LanguageContext.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from './componentes/Layout';
import Home from './pages/Home.jsx';
import Account from './pages/Account.jsx';
import Contact from './pages/Categories.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './componentes/ProtectedRoute/index.jsx';
import Categories from './pages/Categories.jsx';
import Favourite from './pages/Favourite.jsx';
import AddProduct from './componentes/AddProduct/AddProduct.jsx';


function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToggleThemeProvider>
            <LanguageProvider>
              <BrowserRouter>
                <AuthProvider>
                  <Layout >
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
                      <Route path="/Categories" element={<Categories />} />
                      <Route path="/products/:categoryName" element={<Products />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/addproduct" element={<AddProduct />} />
                       <Route path="/products/:id" element={<ProductDetails />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/fav" element={<Favourite />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/login" element={<Login />} />
                      <Route path='*' element={<NotFound/>}/>
                    </Routes>
                  </Layout>
                </AuthProvider>
              </BrowserRouter> 
            </LanguageProvider>
        </ToggleThemeProvider>
      </QueryClientProvider>
    </Provider>

    
    
  )
}

export default App
