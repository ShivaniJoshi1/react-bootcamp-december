import { Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Page2 from './Page2';
import React from 'react';

function ChildRoute() {

    const { url, path } = useRouteMatch();

    return (
        <div>

            <nav className="navbar navbar-light bg-light">
                <Link to={`${url}/sub`}>Sub Page</Link>
            </nav>
            <React.Fragment>
                <Switch>
                    <Route path={`${path}/sub`}><Page2 /></Route>
                </Switch>
            </React.Fragment>

        </div>
    );
}

export default ChildRoute;
