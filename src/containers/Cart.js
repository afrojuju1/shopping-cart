import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'

import * as CartActions from '../actions/CartActions'
import Shelf from '../components/Shelf'

class Cart extends Component{
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const cartItems = this.props.cart.map((item, id) => {
			return (
				<li key={id}>
					{item}
				</li>
			)
		})

		return (
			<div>
				<Shelf addItem={this.props.actions.addToCart} />
				<h2>Cart</h2>
				<ol>
					{cartItems}
				</ol>
			</div>
		)
	}
}

/**
 * Subscribes the container component to any changes in Redux-managed state.
 * The state being mapped to props is the redux state.
 * @param state
 * @param props
 * @returns {{cart: Function}}
 */
function mapStateToProps(state, props) {
	return {
		cart: state.cart
	}
}

// Changes in our program will be reflected when new actions are dispatched
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(CartActions, dispatch)
	}
}

// all these can be simplified into
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// returns a wrapper that we need to pass the component into
const wrapperFunction = connect(mapStateToProps, mapDispatchToProps)

// wraps the Cart component with the store connection configured above.
const wrappedComponent = wrapperFunction(Cart)

export default wrappedComponent
