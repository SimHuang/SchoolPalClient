import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import Home from './Home';
import SignIn from './Authentication/Signin';
import Signup from './Authentication/Signup';
import Header from './Header';
import CreatePost from './CreatePost';
import PostThread from './PostThread';
import Bookmark from './Bookmark';

import ModalConductor from '../components/Modal/ModalConductor';


const App = () => {

    //clear local storage of any user data once the root App component loads
    localStorage.clear();

     return (
        <div>
            {/*THE REST OF THE APPLICATION STORED UNDER REACT ROUTER*/}
            <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/post/:id" component={PostThread}/>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/newpost" component={CreatePost} />
                    <Route path="/bookmark" component={Bookmark} />
                    <Route path="/feed" component={Main} />
                    <Route path="/" component={Home} />
                </Switch>
                </div>
            </BrowserRouter>

            {/** All Modals on the root element**/}
            <ModalConductor />
        </div>
    )
}

export default App