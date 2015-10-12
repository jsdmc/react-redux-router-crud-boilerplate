import React from 'react';
import { Route, Redirect } from 'react-router';
import { CoreLayout, MoviesPage, LoginPage } from './containers';
import { Counter, AutoCounter } from './components';

import { load as loadMovies } from 'redux-base/modules/movies';

export default (store) => {
  const requireLogin = (nextState, replaceState) => {
    const { auth: { user }} = store.getState();
    if (!user) {
      // oops, not logged in, so can't be here!
      replaceState(null, '/login');
    }
  };

  // let's load some data for one of the pages
  const loadData = () => {
		store.dispatch(loadMovies());
	};

 	return (
		<Route path="/" component={CoreLayout}>
			<Route path="login" component={LoginPage} />
			<Route path="counter" component={Counter}/>
			<Route path="autoCounter" component={AutoCounter} />
			<Route onEnter={requireLogin}>
				<Route path="movies" component={MoviesPage} onEnter={loadData} />
			</Route>
			<Redirect from="/" to="/counter" />
		</Route>
	);
};