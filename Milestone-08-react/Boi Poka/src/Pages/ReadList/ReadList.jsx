import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/AddToDb";
import Book from "../Book/Book";
const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort,setSort]= useState("")
  const data = useLoaderData();
  useEffect(() => {
    const storeBookData = getStoredBook();
    const convert = storeBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) => convert.includes(book.bookId));
    setReadList(myReadList);
  }, [data]);
  const handleSort=(type)=>{

    setSort(type)
    if (type==="pages") {
        const sortedByPage =[...readList].sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing)
        setReadList(sortedByPage)
    }
    if (type==="rating") {
        const sortedByRating =[...readList].sort((a,b)=>a.rating-b.rating)
        setReadList(sortedByRating)
    }
  }
  return (
    <div className="py-10 max-w-6xl mx-auto">
      <div className=" text-center py-10">
        <details className="dropdown ">
          <summary className="btn m-1">Sort by : {sort?sort:""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={()=>handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={()=>handleSort("rating")}>Rating</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i Read {readList.length}</h2>
          <div className="mt-5">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
