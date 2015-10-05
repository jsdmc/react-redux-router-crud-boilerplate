import React from 'react';
import { Route, Redirect } from 'react-router';
import CoreLayout from './containers/CoreLayout';
import { Counter, AutoCounter } from './components';

export default (
	 <Route component={CoreLayout}>
	  <Route path="counter" component={Counter}/>
	  <Route path="autoCounter" component={AutoCounter} />
	  <Redirect from="/" to="/counter" />
	</Route>
);