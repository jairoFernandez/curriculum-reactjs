import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "typeface-roboto";

ReactDOM.render(<App />, document.getElementById('root'));
document.title = "Currículum";
registerServiceWorker();