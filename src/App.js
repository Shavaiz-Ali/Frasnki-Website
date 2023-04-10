import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './Assets/CSS/App.css';
// ============ importing components ================ //
import Navbar from "./components/main/Homepages/Navbar";
import Home from "./components/main/Home";
import About2 from './components/pages/About2';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Enroll from './components/pages/Enroll';
import Web from "./components/pages/Courses-pages/Web";
import Gis from "./components/pages/Courses-pages/Gis";
import Films from "./components/pages/Courses-pages/Films";
import Graphic from "./components/pages/Courses-pages/Graphic";
import Uiuxdesign from './components/pages/Courses-pages/Uiuxdesign';
import Amazon from "./components/pages/Courses-pages/Amazon"; 
import { Switch, Route, Redirect } from 'react-router-dom'
import Events from "./components/pages/Events";
import Footer from "./components/main/Homepages/Footer";
function App() {
  const mobilenav = () => {
    let mobileNav = document.getElementById("navbar");
    let mobileToggle = document.getElementById("navtoggle");
    mobileNav.classList.toggle("navbar-mobile");
    mobileToggle.classList.toggle("fa-xmark");
    mobileToggle.classList.toggle("text-white");
    if (document.body.style.width >= '980px') {
      mobileToggle.classList.remove("navbar-mobile");
    }
  };
  return (
    <>
      <Navbar mobilenav={mobilenav} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About2} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/Services' component={Services} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/enroll' component={Enroll} />
        <Route exact path='/web' component={Web} />
        <Route exact path='/gis' component={Gis} />
        <Route exact path='/films' component={Films} />
        <Route exact path='/graphic' component={Graphic} />
        <Route exact path='/uiux' component={Uiuxdesign} />
        <Route exact path='/amazon' component={Amazon} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
