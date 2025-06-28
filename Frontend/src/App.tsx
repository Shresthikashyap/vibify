import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ChatPage from './pages/chat/ChatPage';
import AuthCallbackPage from './pages/auth-callback/AuthCallbackPage';
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import MainLayout from './Layout/MainLayout';

export default function App() {
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<HomePage />}/> */}
      <Route 
      path='/sso-callback'
      element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"}/>}
      />
      <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
      
      <Route element={<MainLayout/>}>
      {/* renders inside the Outlet */}
        <Route path="/" element={<HomePage />} /> 
        <Route path="/chat" element={<ChatPage />} />
      </Route>
    </Routes>
    </>
  );
}
