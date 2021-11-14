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
/* 
 <Todo text ='Learn React' /> 
 when we set custom attributes we need to set some code  in the component to use that received values. 

 We do that with a concept of props

 we accept the parameter in our function component. 
 this parameter 

 Props is a javascript object where all the attributes added on the element are in the end available in this key value pairs in this props object.  
 example
 {text:'dynamic value' }

 with the standard JS we  access objects properties with the . notation. 

 <h2>props.text</h2>  in React you cant do it, cause everything in the return block is threated like JSX elements or payling text.
 
 But we can use dynamic expressions!

 something should not thrating like plain text but instead as  JS expression shat should be avaluated. 

 <h2>{2 +2 }</h2>  

 you cant adding any block statement like if statement 
 but what does work is to referring to props.text here. 
 SO outputting the result. 
 
 we build our own truly reusable compontent. 

This is the core props conept built into react. 

from accepting data from outside. From the place where it is being rendered. This is how you build cusomt reusavle componets. 


// Eventlisteners 


 
*/