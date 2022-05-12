import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="app">
     <Router>
       <Header></Header>
       <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route element={<PageNotFound />}/>
       </Routes>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
