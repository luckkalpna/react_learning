import React, { Component } from "react";

export default class NewsItem extends Component {
	render() {

        let {title, description, imageUrl} = this.props;

		return (
			<div>
				<div className="card">
					<img src={!imageUrl?"https://images.hindustantimes.com/img/2022/10/01/1600x900/Musk-Twitter-CEO-Text-Messages-0_1664590625173_1664590625173_1664590667832_1664590667832.jpg":imageUrl}className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">
							{description}
						</p>
						<a href="/newsdetail/" className="btn btn-sm btn-dark">
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}
