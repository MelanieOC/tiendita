import React, { Component } from 'react';
import './dishDescription.css';
import shake from './images/shake.jpg'

const DishDescription = ({ dish }) => {
	return (
		<section id="content">
			<div id="details-top-image"></div>
			<div id="details">
				<a id="navigate-prev"></a>
				<div id="detail-info">
					<img className="main-image" alt="Selected Product" title="Selected Product" src={dish.image} />
					<div id="description">
						<h1>{dish.dish}</h1>
						<p>{dish.description}</p>

						<div id="details-total">
							<p id="price-quantity">${dish.price.toFixed(2)}</p>
							<button className="buy">Add to cart</button>
						</div>
					</div>
				</div>
				<div id="nutrition-info">
					<h2>Nutritional Information</h2>
					<dl>
						{
							Object.keys(dish.nutricionalInform).map(a => {
								const value = dish.nutricionalInform[a];
								const nutri = a.split('_');
								const result = (nutri.length > 1) ?
									nutri[0].charAt(0).toUpperCase() + nutri[0].slice(1) + '(' + nutri[1] + ')' :
									a.charAt(0).toUpperCase() + a.slice(1);
								return (
									<div>
										<dt>{result}</dt>
										<dd>{value}</dd>
									</div>
								);
							})
						}

					</dl>
				</div>
				<a id="navigate-next" ></a>
			</div>
			<div id="details-bottom-image"></div>
		</section>
	);
}

export default DishDescription;