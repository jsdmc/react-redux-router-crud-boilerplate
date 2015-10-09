import React from 'react';
import { Route, Redirect } from 'react-router';
import { CoreLayout, MoviesPage, LoginPage } from './containers';
import { Counter, AutoCounter } from './components';

export default (
 	<Route path="/" component={CoreLayout}>
	 	<Route path="login" component={LoginPage} />
  	<Route path="counter" component={Counter}/>
  	<Route path="autoCounter" component={AutoCounter} />
  	<Route path="movies" component={MoviesPage} />
  	<Redirect from="/" to="/counter" />
	</Route>
);