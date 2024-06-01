import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from './components/Feed';
import Profile from './components/Profile';
import PostEditor from './components/PostEditor';
import Notifications from './components/Notifications';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/profile" component={Profile} />
        <Route path="/post-editor" component={PostEditor} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
