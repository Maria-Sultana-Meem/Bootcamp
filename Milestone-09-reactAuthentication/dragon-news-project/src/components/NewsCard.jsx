import React from "react";
import { FaStar, FaRegEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  // Format date
  const date = new Date(author.published_date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md border border-gray-100 hover:shadow-lg transition rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
       <div className="flex gap-5">
         <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-blue-600"></FaRegBookmark>
        <FaShareAlt className="text-gray-500 cursor-pointer hover:text-blue-600" />
       </div>
        
      </div>

      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-base font-semibold leading-snug hover:text-blue-600 cursor-pointer">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mt-2">
          {details.slice(0, 200)}...
          <span className="text-blue-500 font-medium cursor-pointer hover:underline">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="ml-2 text-gray-700 font-medium text-sm">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center text-gray-500">
            <FaRegEye className="mr-1" />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
