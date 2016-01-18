'use strict';

import React     from 'react';
import { Route, Redirect, IndexRoute, IndexRedirect } from 'react-router';

import App from './../containers/App.jsx';

import MainLayout from './../containers/layouts/MainLayout.jsx';

import MoviesPageContainer from './../containers/pages/TodosPage.jsx';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={MoviesPageContainer}/>
    </Route>
);
