

import './App.css';
import Home from './pages/Home/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Search from './pages/Search/Search';
import ComicLibrary from './pages/ComicLibrary/ComicLibrary'
import Product from './pages/Product/Product';
import Recently from './pages/ComicLibrary/RecentlyRead/Recently';
import React, { useState, useEffect} from 'react';
import Subscribed from './pages/ComicLibrary/Subscribed/Subscribed';
import Liked from './pages/ComicLibrary/Liked/Liked';



function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 4000);
  }
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();

    let interval;

    const startTimer = () => {
      const countDownDate = new Date("July 21,2023 ").getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  
        if (distance < 0) {
          // Stop Timer
  
          clearInterval(interval.current);
        } else {
          // Update Timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
        }
      });
    };
  
    useEffect(() => {
      startTimer();
    });
  return (
    !loading &&(
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<About />} />
        <Route path="/search" element= {<Search />} />
        <Route path="/comiclibrary" element={<ComicLibrary />} />
        <Route path="/recently" element={<Recently />} />
        <Route path="/subscribed" element={<Subscribed />} />
        <Route path="/like" element={<Liked />} />
        <Route path="/product"
         element=
         {<Product 
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          />} 
         />
      </Routes>
      
     </div>
    )
   
  );
}

export default App;
