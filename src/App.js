import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import "./images/background-video.mov";


function App() {
  return (
    <div className="app">
      {/* <video playsInline autoPlay muted loop poster='./images/background-video.mov'>
        <source src='./images/background-video.mov'/>
      </video> */}
     <Router>
       <Header></Header>
       <div className='container'>
       <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route element={<PageNotFound />}/>
       </Routes>
       </div>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
