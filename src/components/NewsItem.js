import React from "react";

const  NewsItem  = (props) => {
 
    let { title, description, imageUrl, url, author, date, source } =
     props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              poition: "absolute",
              right: "0",
            }}
          >
            <span className=" badge bg-danger"> {source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89cwJFg8HGbhL4Pl0rErUz3qStXRO62EKpXVE0MqP&s"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknow" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
