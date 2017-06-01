import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import App from './components/App';
import SignIn from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import Main from './components/Main';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

import reducers from './reducers';

const createStorewithMiddleware = applyMiddleware()(createStore);
const store = createStorewithMiddleware(reducers);

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/newpost" component={CreatePost} />
                    <Route path="/" component={Main} />
                </Switch>
            </div>
        </BrowserRouter> 
    </Provider>
    , document.getElementById('app'));