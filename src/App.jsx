import { Outlet } from 'react-router-dom'
import { SpeedInsigths } from '@vercel/speed-insights/react'

export default function App() {
  return (
    <>
      <SpeedInsigths />
      <Outlet />
    </>
  );
}

