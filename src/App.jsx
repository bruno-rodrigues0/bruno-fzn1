import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

