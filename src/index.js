import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './Screens/Home';
import BookDetail from './Screens/BookDetail'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Public/Redux/store';

class EnhancedApp extends Component {
    render (){  
    return (
        <Provider store={store}>
            <Router>
                <Route path='/' exact component={Home}/>
                <Route path='/book/:idbook' exact component={BookDetail}/>
            </Router>
        </Provider>
    );
    }
}

ReactDOM.render(<EnhancedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
