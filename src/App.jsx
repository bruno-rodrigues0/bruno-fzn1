import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Outlet />
      <Footer />
    </>
  );
}

