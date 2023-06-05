import { useState, useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './Assets/CSS/App.css';
// ============ importing components ================ //
import Navbar from "./components/mainComponent/Homepages/Navbar";
import About2 from './components/pages/About2';
import Contact from './components/pages/Contact';
import Services from './components/pages/ourServices';
import Enroll from "./components/pages/Enroll";
import Footer from "./components/mainComponent/Homepages/Footer";
import Home from "./components/mainComponent/Home";
import Web from "./components/pages/Courses-pages/Web";
import Gis from "./components/pages/Courses-pages/Gis";
import Films from "./components/pages/Courses-pages/Films";
import Graphic from "./components/pages/Courses-pages/Graphic";
import Uiuxdesign from './components/pages/Courses-pages/Uiuxdesign';
import Amazon from "./components/pages/Courses-pages/Amazon";
import Finance from "./components/pages/Courses-pages/Finance";
import Ourteam from "./components/pages/Ourteam";
import Animations from "./components/pages/Courses-pages/Animations";
import Telemarketing from "./components/pages/Courses-pages/Telemarketing";
import Marketing from "./components/pages/Courses-pages/Marketing";
import Entrepreneur from "./components/pages/Courses-pages/Entrepreneur";
import Trading from "./components/pages/Courses-pages/Trading";
import { Switch, Route, Redirect } from 'react-router-dom'
import Blog from "./components/pages/Blog";
import { Training } from "./components/pages/Trainings/Training";

function App() {
  const mobilenav = () => {
    let mobileNav = document.getElementById("navbar");
    mobileNav.classList.toggle("navbar_mobile");
  };
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(setIsVisible(scrollTop > 300)){
      setIsVisible(true)
    };
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add event listener to handle scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar mobilenav={mobilenav} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About2} />
        <Route exact path='/team' component={Ourteam} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/Services' component={Services} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/training' component={Training} />
        <Route exact path='/enroll' component={Enroll} />
        <Route exact path='/web' component={Web} />
        <Route exact path='/gis' component={Gis} />
        <Route exact path='/films' component={Films} />
        <Route exact path='/graphic' component={Graphic} />
        <Route exact path='/Animations' component={Animations} />
        <Route exact path='/uiux' component={Uiuxdesign} />
        <Route exact path='/finance' component={Finance} />
        <Route exact path='/Telemarketing' component={Telemarketing} />
        <Route exact path='/marketing' component={Marketing} />
        <Route exact path='/entrepreneur' component={Entrepreneur} />
        <Route exact path='/trading' component={Trading} />
        <Route exact path='/amazon' component={Amazon} />
        <Route exact path='/amazon' component={Amazon} />
        <Redirect to='/' />
      </Switch>
      <Footer />

      {isVisible && (
        <button
          className="btn btn-primary back-to-top-btn"
          onClick={scrollToTop}
        >
          <i className="fas fa-angle-up"></i>
        </button>
      )}
    </>
  );
}

export default App;
