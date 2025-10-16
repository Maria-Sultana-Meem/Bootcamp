import React from "react";
import { useLoaderData, useParams } from "react-router";
import { AddToStoreDB } from "../../Utility/AddToDb";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const BooksDetails = () => {
  const { id } = useParams();
  const booksId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((book) => book.bookId === booksId);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleData || {};

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Drag me!",
  icon: "success",
  draggable: true
    });
    AddToStoreDB(id);
  };
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="md:flex gap-20 ">
        <div className="border-gray-100 border p-30 bg-gray-100 rounded-lg">
          <img className="h-[400px]" src={image} alt="" />
        </div>
        <div className="space-y-3 w-1/2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="text-2xl">By:{author}</p>
          <hr className="" />
          <p className="text-xl">{category}</p>
          <hr />
          <p>
            <span className="text-xl font-bold">Review:</span>
            {review}
          </p>
          <div className="flex gap-5">
            <p className="font-bold">Tag</p>
            {tags.map((tag) => (
              <button className="text-[#23BE0A] bg-gray-100 rounded-lg px-2">
                #{tag}
              </button>
            ))}
          </div>
          <hr />
          <p>
            <span className="text-gray-500">Number of Pages :</span>{" "}
            {totalPages}
          </p>
          <p>
            <span className="text-gray-500">Publisher: </span> {publisher}
          </p>
          <p>
            <span className="text-gray-500">Year of Publishing:</span>{" "}
            {yearOfPublishing}
          </p>
          <p>
            <span className="text-gray-500">Rating:</span> {rating}
          </p>
          <div className="flex gap-5">
            <button onClick={() => handleMarkAsRead(id)} className="btn">
              Mark as Read
            </button>
            <button className="btn bg-[#23BE0A] text-white">
              {" "}
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
