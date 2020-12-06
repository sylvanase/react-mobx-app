import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import AppleBasket from './App'
import apple from './stores/appleStore'

ReactDOM.render(
	<Provider apple={apple}>
		<AppleBasket />
	</Provider>,
	document.getElementById('root')
)
