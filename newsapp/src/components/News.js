import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

    constructor(){
        super();
        console.log("Hello monkeynews");
        this.state  =  {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        console.log("cmd");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b8b3c2888e824b29af9ceb487d5c93ff";
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({articles: parsedata.articles}) 
    }

    handlePrevClick = () => {
        console.log("Previous");
    }
    handleNextClick = () => {
        console.log("Next");
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1>Top headlines - India</h1>
                    <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}/>
                        </div>
                        })}
                    </div>
                
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page>=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
                <button type="button" className="btn btn-dark"  onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        );
    }
}

export default News;