import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
//material ui roboto font
import 'typeface-roboto';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
