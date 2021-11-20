import React from "react";
import "./App.css";


import AllMeetupsPage from './pages/AllMeetupsPage';
import NewMeetupPage from './pages/NewMeetupPage';
import FavoritesPage from './pages/FavoritesPage';
import MainNavigation from './compontents/Layout/MainNavigation';

import { Route, Routes } from 'react-router-dom';



    function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetupPage />} />
          <Route path='/favorites' element={<FavoritesPage/>} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
