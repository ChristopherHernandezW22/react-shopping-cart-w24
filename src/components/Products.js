import React, { useContext } from 'react';

// Components
import Product from './Product';

import ProductContext from '../contexts/ProductContext';

const Products = props => {
	// capturing output. Will give us back the value object from App.js from the .provider
	const { products, addItem } = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
