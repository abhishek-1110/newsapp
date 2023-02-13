import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

// v6
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// top loading bar
import LoadingBar from "react-top-loading-bar";

const App = () => {

  // apiKey getting this key from .env file
  const apiKey = process.env.REACT_APP_NEWS_API;

  // making pageSize variable
  const pageSize = 8;

  // making state
  const [progress, setProgress] = useState(10);

    return (
      <>
        <Router>
          {/* Top laoding bar */}
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <Navbar />

          <Routes>
            {/* for home */}

            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  heading="News App"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/home"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  heading="News App"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  heading="Business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  heading="Entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  heading="Health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  heading="Science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  heading="Sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  heading="Technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
        {/*
              key is provided to mount the component again on click 
        */}
      </>
    );
  }
export default App;
