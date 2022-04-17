import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Bookmark from "./Bookmark";
import data from "../src/data.json";

const App = () => {
  let [bookmarkList, setBookmarkList] = useState([]); // Bookmark page data
  let [dataList, setDataList] = useState(data); // Home page data

  const addItem = (index) => { 
    let item;
    data[index].bookmark = true;
    item = dataList[index];
    bookmarkList.unshift(item); // adding item on top of the bookmark list
    setBookmarkList(bookmarkList); // adding to bookmark list
    setDataList([...dataList]); // updating home page list
  }

  const deleteItem = (index) => {
    data[index].bookmark = false;
    let bookmarkList1 = bookmarkList.filter((item) => item.title !== data[index].title);
    setBookmarkList(bookmarkList1); // deleting to bookmark list
    setDataList([...dataList]); // updating home page list
  }

  let routes = useRoutes([
    { path: "/", element: <Home data={dataList}/> },
    { path: "home", element: <Home data={dataList} addItem={addItem} deleteItem={deleteItem}/> },
    { path: "bookmark", element: <Bookmark data={bookmarkList} /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;