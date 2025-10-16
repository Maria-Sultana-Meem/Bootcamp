import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    const {bookName,author,bookId,image,rating,category,tags,yearOfPublishing}=singleBook
    return (
       <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 shadow-sm">
  <figure className='p-3 bg-gray-100 m-3 rounded-lg'>
    <img className='h-[200px] rounded-lg'
      src={image}
      alt="Books" />
  </figure>
   
  <div className="card-body">
    <div className="card-actions justify-start">
      {
        tags.map(tag=><button className='text-[#23BE0A] border rounded-lg px-1'>{tag}</button>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
       <div className="badge badge-secondary">{yearOfPublishing}</div>
      
    </h2>
    <p className='border-b-2 pb-2 border-dotted border-gray-300'>Book by:{author}</p>
   
    <div className='flex justify-between'>
        <p>{category}</p>
        <div className='flex justify-between items-center gap-2'>
            <p>{rating}</p>
            <p><FaStarHalfAlt /></p>
        </div>
    </div>
  </div>
</div>
       </Link>
    );
};

export default Book;