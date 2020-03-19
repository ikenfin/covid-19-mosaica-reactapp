import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import { init } from '@sentry/browser'

init({
  dsn: 'https://c431b955883d4fd682879e859a7146da@sentry.io/5130961',
  environment: 'frontend'
})

ReactDOM.render(<App />, document.getElementById('covid19-mosaica'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
