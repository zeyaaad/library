import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Bookdetails(props) {

    let [book , setbook]=useState(null)

    let prams = useParams() ;

    useEffect(()=>{
        getbookdetalis()
    },[])

    async function getbookdetalis() {
        let response= await axios.get(`https://www.googleapis.com/books/v1/volumes/${prams.id}`)
        setbook(response.data.volumeInfo) 
        console.log(response.data.volumeInfo) 
    }

 const removeHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  return (
    <div className="bookdetalis text-white">
        <div className='container '>
       {book? <div className="row  w-sm-100 w-lg-75  mx-auto contbookdetails">
            <div className="col-lg-6 col-12">
                <h2> {book.title.split(" ").slice(0,5).join(" ")} </h2>
                <h3> {book.suptitle} </h3>
                <p>  { book.description? removeHtmlTags(book.description.split(" ").slice(0,100).join(" ")):<strong>NO Description </strong>}</p>
                <ul>
                    <li><p> Page Count:  <strong> {book.pageCount} </strong> </p></li>
                    <li><p>Published Date : <strong> {book.publishedDate} </strong></p></li>
                    <li> <p> Lang : {book.language} </p> </li>
                    <li> <p> Type : {book.printType} </p> </li>
                    <li> <p> Authors : {book.authors} </p> </li>
                </ul>
                <a href={book.infoLink} rel='noreferrer' target='_blank' className='btn btn-primary mb-4'  > Buy </a>
            </div>
            <div className="col-lg-6 col-12">
                <img src={book.imageLinks.smallThumbnail} className='w-100' height={600} alt="" />
            </div>
        </div>:""}
      
    </div>
    </div>
  )
}
