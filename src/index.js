import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import IntroApp from './App';
import reactDom from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "alertifyjs/build/alertify.min.js";
import "alertifyjs/build/css/alertify.min.css";
var alertify = require('alertifyjs');

reactDom.render(<Router> <IntroApp/> </Router>, document.getElementById('root'));


