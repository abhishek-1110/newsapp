import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

// v6
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  // making pageSize variable
  pageSize = 8;
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            {/* for home */}

            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  heading="News App"
                  pageSize={this.pageSize}
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
                  key="general"
                  heading="News App"
                  pageSize={this.pageSize}
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
                  key="business"
                  heading="Business"
                  pageSize={this.pageSize}
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
                  key="entertainment"
                  heading="Entertainment"
                  pageSize={this.pageSize}
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
                  key="health"
                  heading="Health"
                  pageSize={this.pageSize}
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
                  key="science"
                  heading="Science"
                  pageSize={this.pageSize}
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
                  key="sports"
                  heading="Sports"
                  pageSize={this.pageSize}
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
                  key="technology"
                  heading="Technology"
                  pageSize={this.pageSize}
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
}
