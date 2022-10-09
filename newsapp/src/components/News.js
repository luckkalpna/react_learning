import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
	static defaultProps = {
		country: "in",
		pageSize: 6,
		category: "general",
	};

	// static PropTypes = {
	//     country: PropTypes.string,
	//     pageSize: PropTypes.number,
	//     category: PropTypes.string
	// }

	constructor() {
		super();
		// console.log("Hello monkeynews");
		this.state = {
			articles: [],
			loading: false,
			page: 1,
      totalResults: 0
		};
	}

	async updateNews() {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		// console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}

	async componentDidMount() {
		// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=1&pageSize=${this.props.pageSize}`;
		// this.setState({loading: true});
		// let data = await fetch(url);
		// let parsedData = await data.json();
		// console.log(parsedData);
		// this.setState({articles: parsedData.articles,
		//     totalResults: parsedData.totalResults,
		//     loading: false
		// })
		this.updateNews();
	}

	handlePrevClick = async () => {
		// console.log("previous")
		// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
		// this.setState({loading: true});
		// let data = await fetch(url);
		// let parsedData = await data.json();
		// console.log(parsedData);
		// this.setState({
		//     page: this.state.page - 1,
		//     articles: parsedData.articles
		// })
		this.setState({ page: this.state.page - 1 });
		this.updateNews();
	};

	handleNextClick = async () => {
		// console.log("Next")
		// if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
		//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
		//     this.setState({loading: true});
		// let data = await fetch(url);
		// let parsedData = await data.json();
		// console.log(parsedData);
		// this.setState({
		//     page: this.state.page + 1,
		//     articles: parsedData.articles,
		//     loading: false
		// })
		// }
		this.setState({ page: this.state.page + 1 });
		this.updateNews();
	};

  fetchMoreData = async () => {
      this.setState({page: this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		// console.log(parsedData);
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults
		});
  };

	render() {
		return (
			<>
				<div className="container my-3 text-center">
					<h1>Top headlines - India</h1>
					<InfiniteScroll
						dataLength={this.state.articles.length}
						next={this.fetchMoreData}
						hasMore={this.state.articles.length !== this.totalResults}
						loader={<Spinner/>}
					>
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        author={element.author}
                        date={element.publishedAt}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

					{/* <div className="container d-flex justify-content-between">
						<button
							disabled={this.state.page <= 1}
							type="button"
							ClassName="btn btn-dark"
							onClick={this.handlePrevClick}
						>
							&laquo; Previous
						</button>
						<button
							disabled={
								this.state.page + 1 >
								Math.ceil(this.state.totalResults / this.props.pageSize)
							}
							type="button"
							ClassName="btn btn-dark"
							onClick={this.handleNextClick}
						>
							Next &raquo;
						</button>
					</div> */}
          </InfiniteScroll>
				</div>
			</>
		);
	}
}

export default News;
