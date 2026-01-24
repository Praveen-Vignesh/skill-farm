import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserList from './UserList';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <UserList />
  </StrictMode>
);