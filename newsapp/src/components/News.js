import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "general",
    }

    // static PropTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,
    // }
    

    constructor(){
        super();
        console.log("Hello monkeynews");
        this.state  =  {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        }) 
    }

    handlePrevClick = async () => {

        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json(); 
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async () => {

        console.log("Next")

        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
        }
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <div className="text-center"><h1>Top headlines - India</h1>
                    {this.state.loading && <Spinner/>}
                    </div>
                    <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}/>
                        </div>
                        })}
                    </div>
                
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" Class="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" Class="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        );
    }
}

export default News;