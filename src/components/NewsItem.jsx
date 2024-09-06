import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;

    return (
      <div className="card h-100">
        <img src={!imgUrl ? 'https://scx1.b-cdn.net/csz/news/tmb/2021/ai-algorithm.jpg' : imgUrl} className="card-img-top" alt="news" style={{ height: "150px", objectFit: "cover" }} />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ height: "3rem", overflow: "hidden" }}>{title}</h5>
          <p className="card-text" style={{ height: "6rem", overflow: "hidden" }}>{description}</p>
          <p className="card-text"><small className="text-black">By {!author ? 'Unknown' : author} on {(new Date(date).toGMTString())}</small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary m-auto" style={{ width: '100px' }}>Read more... </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
