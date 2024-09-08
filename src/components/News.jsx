import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f2d99ab3da0a434291c3ae69202c6cbb&page=${page}`;
    setLoading(true);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    if (articles.length >= totalResults) {
      // Stop fetching if all articles are loaded
      return;
    }

    const newPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f2d99ab3da0a434291c3ae69202c6cbb&page=${newPage}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setPage(newPage);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - QuickNews`;
    updateNews();
  }, [props.category]);

  return (
    <>
      <h2 className="mb-3 mt-5 text-center text-danger">
        Latest Top Headlines On - {capitalizeFirstLetter(props.category)}
      </h2> 
      <hr />
      {loading && <Spinner />}

      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length < totalResults} loader={<Spinner />}>
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-3 my-3" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
