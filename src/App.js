import './App.css';
import Home from "./components/Home/home";
import {
    BrowserRouter as Router,
    Routes,
    Link,Navlink , Route
} from "react-router-dom";
import Login from "./components/Login/login";
import Registration from "./components/Registration/registration";
import Landing from "./components/Landing/landing";
import Contact from "./components/Contact/contact";
import Donate from "./components/Donate/donate";
import Listings from "./components/Listings/Listings";
import About from "./components/About/about";
import Termsandcondition from "./components/terms and condition/termsandconditon";
import PrivacyPolicy from './components/privacypolicy/privacypolicy';


function App() {
  return (
    <div className="App">
      {/*<Home />*/}
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/landing' element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/listings'element={<Listings/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/termsandcondition' element={<Termsandcondition/>}/>
                <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
