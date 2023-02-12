import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

// v6
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// top loading bar
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  // making pageSize variable
  pageSize = 8;

  // making state
  state = {
    progress: 0,
  };

  // setting progress or passing this setProgress to News component because it needs to be get updated when clicked
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <>
        <Router>
          {/* Top laoding bar */}
          <LoadingBar color="#f11946" height = {3} progress={this.state.progress} />
          <Navbar />

          <Routes>
            {/* for home */}

            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
