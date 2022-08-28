import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom";
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header/Header';
import Location from './components/Shared/Location';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Reviews from './components/Reviews/Reviews';
import ContactUs from './components/ContactUs/ContactUs';

import BusinessSummary from './components/BusinessSummary/BusinessSummary';
import Blogs from './components/Blogs/Blogs';
import SignUp from './components/Shared/SignUp/SignUp';
import SignIn from './components/Shared/SignIn/SignIn';
import ToolsParts from './components/Tools&Parts/ToolsParts';
import Purchase from './components/Shared/Purchase/Purchase';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import MyPurchase from './components/Dashboard/MyPurchase';
import My_History from './components/Dashboard/My_History';
import My_Review from './components/Dashboard/My_Review';
import All_User from './components/Dashboard/All_User';

function App() {

  return (
    <div className='background'>
      <Location></Location>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/tools' element={<ToolsParts></ToolsParts>}></Route>

        <Route path='/tools/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>

        <Route path='dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyPurchase />}></Route>
          <Route path='purchase' element={<MyPurchase />}></Route>

          <Route path='review' element={<My_Review></My_Review>}></Route>
          <Route path='history' element={<My_History></My_History>}></Route>
          <Route path='users' element={<All_User></All_User>}></Route>

        </Route>

        <Route path='/business' element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>

  );
}

export default App;
