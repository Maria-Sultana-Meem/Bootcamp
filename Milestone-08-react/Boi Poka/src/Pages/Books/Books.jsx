import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading.....</span>}>
              <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                data.map(singleBook=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
              }
              </div>

            </Suspense>
            
        </div>
    );
};

export default Books;