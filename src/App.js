import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextApi";

import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import LeftNavMenuItem from "./components/LeftNavMenuItem";
import SearchResult from "./components/SearchResult";
import SearchResultVideoCard from "./components/SearchResultVideoCard";
import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route exact path="/" element={ <Feed />}/>
          <Route path="/seearchResult/:searchQuery" element={<SearchResult />}/>
          <Route path="/vedio/:id" element={<VideoDetails />}/>
        </Routes>


      </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
