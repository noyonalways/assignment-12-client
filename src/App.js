import './App.css';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/bundle";



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='my-portfolio' element={<MyPortfolio/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
