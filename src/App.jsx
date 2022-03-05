import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import MovieDetails from './pages/MovieDetails';
// styles
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}