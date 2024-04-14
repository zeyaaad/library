import React from 'react'
import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router';
import axios from 'axios';
import Bookdetails from './Bookdetails';
import { Link } from 'react-router-dom';
export default function Mainpage() {


     let [books , setbooks] = useState(null) ;
  async function getbooks(e){
   try {
    if(e.target.value==="") {
      setbooks(null)
      return; 
    }
     let response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`)
     console.log(response.data.items)
     setbooks(response.data.items)
    }
    catch (error) {
      console.log(error)
      setbooks(null)
    }
  }


  return (
    <>
     <div className='topweb' >
      <div className='searchcont'> 
      <h3> Write the Name of Book : </h3>
        <input onChange={getbooks} type="text"   />
      </div>

    </div>
      <div className='contresults '>
         <div className="container">
            <h1 className='texttres' > All Results : </h1>
          <div className="row">
           {books?<>
            {books.map((book , i)=>
             <> 
              {book.volumeInfo.imageLinks?.thumbnail?
              <div key={i} className='bookcont col-lg-3 col-md-6 col-12' >
                <Link to={`/bookdetails/${book.id }`} >  <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="ll" className='w-100' /> </Link>
              
              <h5> {book.volumeInfo.title.split(" ").slice(0,5).join(" ")} </h5>
              {book.volumeInfo.subtitle?<h5> {book.volumeInfo.subtitle.split(" ").slice(0,5).join(" ")} </h5>:""}
              <h6> {book.volumeInfo.authors}</h6>
            </div>:""}
              </>
             )}
          </>:<div className='vh-100 d-flex align-items-center justify-content-center'>
            <i className='fas fa-spinner fa-spin text-success fa-4x'></i>        
        </div>}
         </div>
         </div>
      </div>

    </>
  )
}
