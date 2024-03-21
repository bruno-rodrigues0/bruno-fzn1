import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <>
      <SpeedInsights />
      <Outlet />
      <Footer />
    </>
  );
}

