import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import SignIn from './Authentication/Signin';
import Signup from './Authentication/Signup';
import Header from './Header';
import CreatePost from './CreatePost';
import PostThread from './PostThread';


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/post/:id" component={PostThread}/>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/newpost" component={CreatePost} />
                    <Route path="/" component={Main} />
                </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App