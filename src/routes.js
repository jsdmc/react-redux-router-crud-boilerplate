import React from 'react';
import { Route, Redirect } from 'react-router';
import { CoreLayout, MoviesPage, LoginPage, CountersPage } from './containers';
import { Counter, AutoCounter } from './components';

export default (store) => {
  const requireLogin = (nextState, replace) => {
    const { auth: { user } } = store.getState();
    if (!user) {
      // oops, not logged in, so can't be here!
      replace({ pathname: '/login' });
    }
  };

  return (
		<Route component={CoreLayout}>
			<Route path="login" component={LoginPage} />
			<Route path="counter" component={Counter}/>
		<Route path="countersPage" component={CountersPage}/>
			<Route path="autoCounter" component={AutoCounter} />
			<Route onEnter={requireLogin}>
				<Route path="movies" component={MoviesPage} />
			</Route>
			<Redirect from="/" to="/counter" />
		</Route>
	);
};
