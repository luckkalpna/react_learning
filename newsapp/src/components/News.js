import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

    constructor(){
        super();
        console.log("Hello monkeynews");
        this.state  =  {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        console.log("cmd");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults}) 
    }

    handlePrevClick = async () => {

        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=${this.state.page - 1}&pageSize=20`;
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

        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.pageSize)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b8b3c2888e824b29af9ceb487d5c93ff&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
        }
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <div className="text-center"><h1>Top headlines - India</h1></div>
                    <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}/>
                        </div>
                        })}
                    </div>
                
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" Class="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.pageSize)} type="button" Class="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        );
    }
}

export default News;