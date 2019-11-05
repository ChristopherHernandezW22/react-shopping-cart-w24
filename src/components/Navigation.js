import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CartContext from '../contexts/CartContext';

const Navigation = props => {
	// we want to pass the context that we want to consume
	// props removed because { cart } is now in it's own variable
	const { cart } = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
