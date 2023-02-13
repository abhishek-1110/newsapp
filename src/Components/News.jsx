import React, { Component, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import { useState } from "react";
const News = (props) => {
  // using state
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [totalResults, setTotalResults] = useState(0);

  // fetching more data
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);

    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  // making a function to update news or making the code shorter
  const updateNews = async (props) => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      setPage(page + 1);
      setLoading(true);
      props.setProgress(20);
      let data = await fetch(url);
      let parsedData = await data.json();
      //console.log(parsedData);

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);

      props.setProgress(100);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  // use effect here works the same work as componentDidMount() works in Class based component
  useEffect(() => {
    document.title = props.heading + " - News App";
    updateNews(props);
  }, []);

  const Dateformatter = (a) => {
    const d = new Date(a);
    return d.toGMTString();
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ marginTop: "90px" }}>
        Top Headlines - {props.heading}
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading && <Spinner />}
        scrollableTarget="scrollableDiv"
      >
        <div className="row">
          {articles &&
            articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={
                      element.title ? element.title.slice(0, 45) + "..." : ""
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88) + "..."
                        : "Not available"
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxtJ19p2MnrCfF8EnqnmJQgIK_hcfs3eJIEP1EAof4Q&s"
                    }
                    newsUrl={element.url}
                    source={element.source.name}
                    publishedAt={Dateformatter(element.publishedAt)}
                  />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  heading: "News Headlines",
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  heading: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
