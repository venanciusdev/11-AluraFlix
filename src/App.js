import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner
        title="Featured Movie"
        description="This is the description of the featured movie."
        image="https://via.placeholder.com/800x400"
      />
      <MovieList />
      <Footer />
    </div>
  );
};

export default App;
