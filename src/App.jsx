import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router';

import axios from 'axios';
import Bookdetails from './Bookdetails';
import { Link } from 'react-router-dom';
import Mainpage from './Mainpage';
// let word="";
// let api=`https://www.googleapis.com/books/v1/volumes?q=${word}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`
function App() {

  




  return <>
  <Routes>

    <Route path='' element={<Mainpage/>} />
    <Route path='/home' element={<Mainpage/>} />
    <Route path='/bookdetails' element={<Bookdetails/>}>  
        <Route path=":id" element={ <Bookdetails/> } />
    </Route>

  </Routes>

   


  </>
}

export default App;
