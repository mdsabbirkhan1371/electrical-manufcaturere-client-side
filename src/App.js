import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header/Header';
import Location from './components/Shared/Location';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Reviews from './components/Reviews/Reviews';
import ContactUs from './components/ContactUs/ContactUs';
import Tools_Parts from './components/Tools&Parts/Tools_Parts';
import BusinessSummary from './components/BusinessSummary/BusinessSummary';
import Blogs from './components/Blogs/Blogs';
import SignUp from './components/Shared/SignUp/SignUp';
import SignIn from './components/Shared/SignIn/SignIn';

function App() {

  return (
    <div>
      <Location></Location>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/tools' element={<Tools_Parts></Tools_Parts>}></Route>
        <Route path='/business' element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
