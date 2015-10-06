import React from 'react';
import { Route, Redirect } from 'react-router';
import { CoreLayout, MoviesPage } from './containers';
import { Counter, AutoCounter } from './components';

export default (
	 <Route component={CoreLayout}>
	  <Route path="counter" component={Counter}/>
	  <Route path="autoCounter" component={AutoCounter} />
	  <Route path="movies" component={MoviesPage} />
	  <Redirect from="/" to="/counter" />
	</Route>
);