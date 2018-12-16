import React from 'react'
import {Route, Switch} from 'react-router-dom';

import './stylesheets/APP.scss'
import Menu from './components/Menu';
import Whoops404 from './components/Whoops404';
import NewColor from './containers/NewColor';
import Colors from './containers/Colors';
import Color from './containers/Color';

const App = () =>
    <Switch>
        <Route exact path="/:id" component={Color} />
        <Route path="/"
            component={() => (
                <div className="app">
                    <Route component={Menu} />
                    <NewColor />
                    <Switch>
                        <Route exact path="/" component={Colors} />
                        <Route path="/sort/:sort" component={Colors} />
                        <Route component={Whoops404} />
                    </Switch>
                </div>
            )} />
    </Switch>

export default App;
