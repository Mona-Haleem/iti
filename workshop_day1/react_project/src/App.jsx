import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './componentes/Layout';
import {ThemeProvider} from './contexts/ThemeContext.jsx';
import {LanguageProvider} from './contexts/LanguageContext.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Account from './pages/Account.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from './pages/ProductDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';


function App() {

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <LanguageProvider>
              <BrowserRouter>
                <Layout >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                    <Route path='*' element={<NotFound/>}/>
                  </Routes>
                </Layout>
              </BrowserRouter> 
            </LanguageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>

    
    
  )
}

export default App
