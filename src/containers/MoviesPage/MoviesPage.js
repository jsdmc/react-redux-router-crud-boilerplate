import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isLoaded, load } from 'redux-base/modules/movies';

const mapStateToProps = state => ({
  movies: state.movies.data,
  error: state.movies.error,
  loading: state.movies.loading,
  isDataLoaded: isLoaded(state)
});

const mapActionsToProps = { load };

export class MoviesPage extends Component {

  componentWillMount() {
    const { isDataLoaded, load: loadData } = this.props;

    if (!isDataLoaded) {
      loadData();
    }
  }

  render() {
    const { movies, error, loading } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }

    const styles = require('./MoviesPage.scss');

    return (
      <div>
        <h1 className="page-header">Dashboard</h1>

          <div className="row placeholders">
            <div className="col-xs-6 col-sm-3 placeholder">
              <img data-src="holder.js/200x200/auto/sky" className="img-responsive" alt="Generic placeholder thumbnail" />
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img data-src="holder.js/200x200/auto/vine" className="img-responsive" alt="Generic placeholder thumbnail" />
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img data-src="holder.js/200x200/auto/sky" className="img-responsive" alt="Generic placeholder thumbnail" />
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img data-src="holder.js/200x200/auto/vine" className="img-responsive" alt="Generic placeholder thumbnail" />
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
          </div>

          <h2 className="sub-header">Movies</h2>

          <button className={`${styles.refreshBtn} btn btn-success`} onClick={this.props.load}>
            <i className={refreshClassName}/> {' '} Reload movies
          </button>

          <p>
            This widgets are stored in your session, so feel free to edit it and refresh.
          </p>

          {error &&
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            {' '}
            {error.toString()}
          </div>}

          {loading &&
          <div>
            Loading...(here you can render spinner or whatever)
          </div>}

          <div className="table-responsive">
          {movies && movies.length &&
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                {
                  movies.map((movie) =>
                    <tr key={movie.id}>
                      <td>{movie.id}</td>
                      <td>{movie.title}</td>
                      <td>{movie.sprocketCount}</td>
                      <td>{movie.owner}</td>
                    </tr>)
                }
              </tbody>
            </table>
          }
          </div>
      </div>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  load: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(MoviesPage);
