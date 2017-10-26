import React, {Component} from 'react';
import './dishDescription.css';
import shake from './images/shake.jpg'

class DishDescription extends Component {
  render() {
    return (<div>

				<section id="content">
						<div id="details-top-image"></div>
								<div id="details">
									<a id="navigate-prev"></a>
									<div id="detail-info">
										<img className="main-image" alt="Selected Product" title="Selected Product" src={shake}/>
										<div id="description">
											<h1>Shake</h1>
											<p></p>
										
											<div id="details-total">
												<p id="price-quantity">$10.00</p>
												<button className="buy">Add to cart</button>
										</div>
									</div>
								</div>
								
							<div id="nutrition-info">
								<h2>Nutritional Information</h2>
									<dl>
									<dt>Protein</dt>
										<dd>1.4804</dd>
									<dt>Fat (total)</dt>
										<dd>1.4739</dd>
									<dt>Carbohydrate</dt>
										<dd>1.4739</dd>
										<dt>Energy (kJ)</dt>
										<dd>16.9406</dd>
									<dt>Energy (kcal)</dt>
										<dd>4.0489</dd>
										<dt>Sugar</dt>
										<dd>0.245</dd>
									</dl>
							</div>
						<a id="navigate-next" ></a>
	</div>
					<div id="details-bottom-image"></div>
				
			</section>   
		</div>

    );
  }
}

export default DishDescription;