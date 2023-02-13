import React from "react";

const NewsItem = (props) => {
  // destructuring
  let { title, description, imageUrl, newsUrl } = props;
  return (
    <>
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl}
            style={{ height: "10rem" }}
            className="card-img-top"
            alt="News logo"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p style={{ fontSize: 13 }}>
              <b>Source: </b>
              {props.source}
            </p>
            <p style={{ fontSize: 13 }}>
              <b>Published Time: </b>
              {/*new Date(this.props.publishedAt).toGMTString()*/}
              {props.publishedAt}
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsItem;