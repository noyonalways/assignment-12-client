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
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import RequireAdmin from './Shared/RequireAdmin/RequireAdmin';
import EditProfile from './Pages/Dashboard/MyProfile/EditProfile/EditProfile';
import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <HelmetProvider>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='my-portfolio' element={<MyPortfolio />} />
          <Route path='/product/:id' element={<RequireAuth><ProductDetail/></RequireAuth>} />
          <Route path='dashboard' element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route path='my-order' element={<MyOrders />} />
            <Route path='add-review' element={<AddReview />} />
            <Route path='payment/:id' element={<Payment/>} />
            <Route index element={<MyProfile />} />
            <Route path='edit-profile'  element={<EditProfile/>} />
            <Route path='manage-orders' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
            <Route path='add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
            <Route path='make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
            <Route path='manage-products' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HelmetProvider>
    </div>
  );
}

export default App;
