import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import Product from './products';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App>
        <Product name="Lenovo LOQ" brand="Lenovo" price = "90k inr"></Product>
        <Product name="Samsung s25 ultra" brand="Samsung" price = "150k inr"></Product>
        <Product name="Kreo hive 4123" brand="Kreo" price = "5k inr"></Product>
    </App>
  </StrictMode>
);