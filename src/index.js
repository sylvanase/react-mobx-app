import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import apple from './stores/AppleStore'
import App from './App'

ReactDOM.render(
	<Provider apple={apple}>
		<App />
	</Provider>,
	document.getElementById('root')
)
