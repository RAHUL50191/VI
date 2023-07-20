import React ,{useState,useEffect}from 'react';
import "./NavigationBar.css"
import { BrowserRouter as Router,NavLink, Route, Routes } from "react-router-dom";
import VI from '../three/VI';
const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Router>
      <nav className={scrolled ? 'Navbar scrolled' : 'Navbar'}>
      <logo className="" to="/" style={{float:'left'}}>{ <VI />}
      </logo>
      <div className="navbar navbar-expand-lg " style={{float:'right'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNav"  >
          <ul className="navbar-nav"  >
            <li className="nav-item" >
              <a href='#home'>Home</a>
            </li>
            <li className="nav-item">
              <a href='#about'>About</a>
            </li>
            <li className="nav-item">
              <a href='#categories'>Categories</a>
            </li>
            <li className="nav-item">
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    </Router>
  );
};

export default NavigationBar;
